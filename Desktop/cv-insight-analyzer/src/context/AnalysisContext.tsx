
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AnalysisStep, ResumeData, AssessmentQuestion, AnalysisResult } from '@/types';

interface AnalysisContextType {
  currentStep: AnalysisStep;
  setCurrentStep: (step: AnalysisStep) => void;
  resumeData: ResumeData | null;
  setResumeData: (data: ResumeData | null) => void;
  assessmentQuestions: AssessmentQuestion[];
  setAssessmentQuestions: (questions: AssessmentQuestion[]) => void;
  analysisResult: AnalysisResult | null;
  setAnalysisResult: (result: AnalysisResult | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export const AnalysisProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<AnalysisStep>('upload');
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [assessmentQuestions, setAssessmentQuestions] = useState<AssessmentQuestion[]>([]);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <AnalysisContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        resumeData,
        setResumeData,
        assessmentQuestions,
        setAssessmentQuestions,
        analysisResult,
        setAnalysisResult,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
};

export const useAnalysis = () => {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
};
