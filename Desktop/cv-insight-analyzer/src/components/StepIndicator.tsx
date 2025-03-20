import { useAnalysis } from '@/context/AnalysisContext';
import { AnalysisStep } from '@/types';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

const StepIndicator = () => {
  const { currentStep } = useAnalysis();
  
  const steps: { id: AnalysisStep; label: string }[] = [
    { id: 'upload', label: 'Upload' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'result', label: 'Result' },
  ];
  
  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep);
  };
  
  const currentStepIndex = getCurrentStepIndex();
  
  return (
    <div className="step-container">
      <div className="step-line" />
      <div 
        className="step-line-progress" 
        style={{ 
          width: currentStepIndex === 0 
            ? '0%' 
            : currentStepIndex === 1 
              ? '50%' 
              : '100%' 
        }} 
      />
      
      <div className="flex items-center justify-between relative w-full max-w-3xl mx-auto px-4 pt-10 pb-16">
        {/* Background line */}
        <div className="absolute top-10 left-0 right-0 h-[2px] bg-slate-200 z-0">
          {/* First segment of the progress line */}
          <div 
            className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500 ease-in-out"
            style={{ 
              width: currentStepIndex >= 1 ? '50%' : '0%'
            }}
          />
          {/* Second segment of the progress line */}
          <div 
            className="absolute top-0 left-1/2 h-full bg-blue-500 transition-all duration-500 ease-in-out"
            style={{ 
              width: currentStepIndex >= 2 ? '50%' : '0%'
            }}
          />
        </div>
        
        {steps.map((step, index) => {
          const isActive = index <= currentStepIndex;
          const isCompleted = index < currentStepIndex;
          
          return (
            <div key={step.id} className="flex flex-col items-center z-10">
              <div 
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full border-2 bg-white transition-all duration-300",
                  isActive 
                    ? "border-blue-500 text-blue-500" 
                    : "border-slate-200 text-slate-400"
                )}
              >
                {isCompleted ? (
                  <CheckIcon className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div 
                className={cn(
                  "mt-2 font-medium transition-all duration-300",
                  isActive ? "text-slate-800" : "text-slate-400"
                )}
              >
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
