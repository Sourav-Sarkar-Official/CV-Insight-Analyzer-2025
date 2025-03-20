
import { cn } from '@/lib/utils';

interface CircleProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showValue?: boolean;
  label?: string;
}

const CircleProgress = ({
  value,
  size = 120,
  strokeWidth = 4,
  className,
  showValue = true,
  label,
}: CircleProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="progress-circle-bg"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="progress-circle animate-circle-progress"
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-semibold">{value}</span>
          {label && <span className="text-xs mt-1 text-muted-foreground">{label}</span>}
        </div>
      )}
    </div>
  );
};

export default CircleProgress;
