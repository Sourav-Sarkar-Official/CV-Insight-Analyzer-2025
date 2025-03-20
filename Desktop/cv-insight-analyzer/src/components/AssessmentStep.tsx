
import { useState } from 'react';
import { useAnalysis } from '@/context/AnalysisContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/lib/toast';
import { analyzeResume, analyzeAssessment } from '@/lib/gemini';
import { ArrowLeftIcon, ArrowRightIcon, LoaderIcon, AlertCircleIcon } from 'lucide-react';

const AssessmentStep = () => {
  const {
    resumeData,
    assessmentQuestions,
    setAssessmentQuestions,
    setAnalysisResult,
    setCurrentStep,
    loading,
    setLoading,
    setError
  } = useAnalysis();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiQuotaExceeded, setApiQuotaExceeded] = useState(false);
  
  const handleAnswerChange = (id: string, answer: string) => {
    setAssessmentQuestions(
      assessmentQuestions.map(q => (q.id === id ? { ...q, answer } : q))
    );
  };
  
  const handleBack = () => {
    setCurrentStep('upload');
  };
  
  const handleSubmit = async () => {
    // Check if all questions have been answered
    const unansweredQuestions = assessmentQuestions.filter(q => !q.answer.trim());
    if (unansweredQuestions.length > 0) {
      toast.error('Please answer all questions before submitting');
      return;
    }
    
    if (!resumeData) {
      toast.error('No resume data found. Please upload a resume first.');
      setCurrentStep('upload');
      return;
    }
    
    setIsSubmitting(true);
    setLoading(true);
    setApiQuotaExceeded(false);
    
    try {
      console.log("Starting analysis process...");
      
      // First, analyze the resume
      console.log("Analyzing resume...");
      const resumeAnalysis = await analyzeResume(
        resumeData.text,
        resumeData.jobDescription
      );
      console.log("Resume analysis completed successfully");
      
      // Then, analyze the assessment responses
      console.log("Analyzing assessment responses...");
      const assessmentAnalysis = await analyzeAssessment(
        assessmentQuestions.map(q => ({
          question: q.question,
          answer: q.answer
        }))
      );
      console.log("Assessment analysis completed successfully");
      
      // Calculate overall score: 60% resume + 40% assessment
      const resumeWeight = 0.6;
      const assessmentWeight = 0.4;
      const overallScore = Math.round(
        (resumeAnalysis.resumeScore.score * resumeWeight) + 
        (assessmentAnalysis.assessmentScore.score * assessmentWeight)
      );
      
      // Combine the results
      const combinedResult = {
        ...resumeAnalysis,
        assessmentScore: assessmentAnalysis.assessmentScore,
        questionEvaluation: assessmentAnalysis.questionEvaluation,
        overallScore
      };
      
      setAnalysisResult(combinedResult);
      setCurrentStep('result');
    } catch (error) {
      console.error('Error analyzing data:', error);
      
      // Check if the error is related to API quota
      if (error instanceof Error && error.message.includes("429")) {
        setApiQuotaExceeded(true);
        toast.error('API quota exceeded. Please try again later or proceed with limited functionality.');
      } else {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
        toast.error('Failed to analyze your data. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 animate-fade-in">
      {apiQuotaExceeded && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>API Quota Exceeded</AlertTitle>
          <AlertDescription>
            The AI service is currently unavailable due to quota limitations. You can either:
            <ul className="list-disc pl-5 mt-2">
              <li>Try again later when the quota resets</li>
              <li>Proceed with limited functionality (mock analysis results)</li>
            </ul>
            <Button 
              variant="outline" 
              className="mt-2"
              onClick={() => {
                setApiQuotaExceeded(false);
                handleSubmit();
              }}
            >
              Proceed with Limited Functionality
            </Button>
          </AlertDescription>
        </Alert>
      )}
      
      <Card className="w-full shadow-sm border-0 ring-1 ring-slate-200 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center">Assessment</CardTitle>
          <CardDescription className="text-center">
            Please answer the following questions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {assessmentQuestions.map((question, index) => (
            <div key={question.id} className="space-y-2">
              <h3 className="text-sm font-medium">
                {index + 1}. {question.question}
              </h3>
              <Input
                placeholder="Type your answer here"
                value={question.answer}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={isSubmitting}
            className="flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <LoaderIcon className="w-4 h-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                Submit
                <ArrowRightIcon className="w-4 h-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AssessmentStep;
