
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
  
  // Determine color based on score
  const getColorClass = (score: number) => {
    if (score >= 80) return 'stroke-green-500';
    if (score >= 60) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };
  
  const getBgColorClass = (score: number) => {
    if (score >= 80) return 'stroke-green-100';
    if (score >= 60) return 'stroke-yellow-100';
    return 'stroke-red-100';
  };
  
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
          className={cn("fill-none", getBgColorClass(value))}
          style={{ strokeWidth }}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={cn("fill-none transition-all duration-1000 ease-in-out", getColorClass(value))}
          style={{ strokeWidth }}
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          {label && <span className="text-sm font-medium text-gray-600 mt-1">{label}</span>}
        </div>
      )}
    </div>
  );
};

export default CircleProgress;
