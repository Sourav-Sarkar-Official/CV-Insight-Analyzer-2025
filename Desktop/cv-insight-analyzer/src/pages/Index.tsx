import { useEffect } from 'react';
import { useAnalysis } from '@/context/AnalysisContext';
import StepIndicator from '@/components/StepIndicator';
import UploadStep from '@/components/UploadStep';
import AssessmentStep from '@/components/AssessmentStep';
import ResultStep from '@/components/ResultStep';
import { Toaster } from '@/components/ui/sonner';
import { toast } from '@/lib/toast';
import { AnalysisProvider } from '@/context/AnalysisContext';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ResumeAnalyzer = () => {
  const { currentStep, error } = useAnalysis();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col py-6">
      <header className="text-center mb-8 relative px-4">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-2" 
            onClick={() => navigate('/')}
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span className="sr-only">Back to Home</span>
          </Button>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Resume Analyzer
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto px-4">
          Get insights and improvement suggestions for your resume using AI-powered analysis
        </p>
      </header>
      
      <StepIndicator />
      
      <div className="flex-1 w-full max-w-4xl mx-auto px-4">
        {currentStep === 'upload' && <UploadStep />}
        {currentStep === 'assessment' && <AssessmentStep />}
        {currentStep === 'result' && <ResultStep />}
      </div>
      
      <footer className="mt-12 text-center text-sm text-slate-500 py-4">
        <p>Powered by Bengal Coders • Secure and Private Analysis</p>
      </footer>
    </div>
  );
};

const AnalyzerPage = () => (
  <AnalysisProvider>
    <ResumeAnalyzer />
  </AnalysisProvider>
);

export default AnalyzerPage;