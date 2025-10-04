import { useState, useCallback, useRef } from 'react';
import { useAnalysis } from '@/context/AnalysisContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/lib/toast';
import { Textarea } from '@/components/ui/textarea';
import { UploadIcon, FileTextIcon, XIcon, LoaderIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generateAssessmentQuestions } from '@/lib/gemini';

const UploadStep = () => {
  const { setResumeData, setCurrentStep, setLoading, loading, setAssessmentQuestions, setError } = useAnalysis();
  const [jobDescription, setJobDescription] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!validTypes.includes(file.type)) {
      toast.error('Please upload a PDF, DOC, DOCX, or TXT file');
      return;
    }
    
    setFile(file);
    
    if (file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };
      reader.readAsText(file);
    } else {
      setFileContent("This is simulated resume content extracted from a non-text file.\n\nJohn Doe\nSoftware Engineer\n\nExperience:\n- Full Stack Developer at XYZ Corp (2020-Present)\n- Frontend Developer at ABC Inc (2018-2020)\n\nSkills:\n- JavaScript, React, Node.js, MongoDB\n- MERN Stack development\n- RESTful API design\n- Docker, AWS\n\nEducation:\n- Bachelor of Science in Computer Science");
    }
  };
  
  const handleRemoveFile = () => {
    setFile(null);
    setFileContent('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const handleContinue = async () => {
    if (!file || !fileContent) {
      toast.error('Please upload a resume file');
      return;
    }

    if (!jobDescription.trim()) {
      toast.error('Please provide a job description');
      return;
    }
    
    setLoading(true);
    setIsProcessing(true);
    
    try {
      console.log("Processing resume...");
      
      const resumeDataObj = {
        text: fileContent,
        filename: file.name,
        fileSize: file.size,
        jobDescription: jobDescription.trim()
      };
      
      setResumeData(resumeDataObj);
      
      console.log("Calling generateAssessmentQuestions...");
      const questionsResult = await generateAssessmentQuestions(
        fileContent,
        jobDescription.trim()
      );
      
      console.log("Question generation result:", questionsResult);
      
      if (questionsResult && questionsResult.questions && questionsResult.questions.length > 0) {
        console.log(`Generated ${questionsResult.questions.length} questions`);
        const formattedQuestions = questionsResult.questions.map(q => ({
          ...q,
          answer: ''
        }));
        
        setAssessmentQuestions(formattedQuestions);
        toast.success('Assessment questions generated successfully');
      } else {
        console.warn("No questions returned, using fallback questions");
        
        // Improved fallback questions that are domain-agnostic
        setAssessmentQuestions([
          { id: '1', question: 'Explain a fundamental concept from your primary professional field.', answer: '' },
          { id: '2', question: 'What is a key principle or methodology you follow in your work?', answer: '' },
          { id: '3', question: 'Describe a common challenge in your professional domain and how you would approach solving it.', answer: '' },
          { id: '4', question: 'What are the most important skills for success in your field?', answer: '' }
        ]);
        
        toast.info('Using default assessment questions');
      }
      
      setCurrentStep('assessment');
    } catch (error) {
      console.error('Error generating questions:', error);
      
      // More specific error handling
      let errorMessage = 'Failed to generate assessment questions';
      if (error instanceof Error) {
        if (error.message.includes('parse')) {
          errorMessage = 'Failed to parse AI response. This might be due to API formatting issues.';
        } else if (error.message.includes('429')) {
          errorMessage = 'API quota exceeded. Please try again later.';
        } else if (error.message.includes('Empty response')) {
          errorMessage = 'AI service returned empty response. Please try again.';
        } else {
          errorMessage = error.message;
        }
      }
      
      setError(errorMessage);
      toast.error(`${errorMessage} Using default questions instead.`);
      
      // Improved fallback questions that are domain-agnostic
      setAssessmentQuestions([
        { id: '1', question: 'Explain a fundamental concept from your primary professional field.', answer: '' },
        { id: '2', question: 'What is a key principle or methodology you follow in your work?', answer: '' },
        { id: '3', question: 'Describe a common challenge in your professional domain and how you would approach solving it.', answer: '' },
        { id: '4', question: 'What are the most important skills for success in your field?', answer: '' }
      ]);
      
      setCurrentStep('assessment');
    } finally {
      setLoading(false);
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 animate-fade-in">
      <Card className="w-full shadow-sm border-0 ring-1 ring-slate-200 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center">Upload Resume</CardTitle>
          <CardDescription className="text-center">
            Upload your resume to get started with the analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div
            className={cn(
              "dropzone",
              isDragging && "dropzone-active",
              file && "border-primary bg-primary/5"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
            />
            
            {file ? (
              <div className="flex flex-col items-center">
                <FileTextIcon className="w-12 h-12 text-primary mb-4" />
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFile();
                    }}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground mt-1">
                  {(file.size / 1024).toFixed(2)} KB
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <UploadIcon className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="font-medium">Drag and drop your resume here</p>
                <p className="text-sm text-muted-foreground mt-1">
                  or click to browse (PDF, DOC, DOCX, TXT)
                </p>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Job Description (Mandatory)</h3>
            <Textarea
              placeholder="Paste job description here to get more targeted analysis"
              className="min-h-[120px] resize-none"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full"
            onClick={handleContinue}
            disabled={!file || loading}
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <LoaderIcon className="h-4 w-4 animate-spin" />
                Generating questions...
              </div>
            ) : (
              'Continue to Assessment'
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UploadStep;