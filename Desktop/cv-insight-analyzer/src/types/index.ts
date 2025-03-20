
export type AnalysisStep = 'upload' | 'assessment' | 'result';

export interface ResumeData {
  text: string;
  filename: string;
  fileSize: number;
  jobDescription?: string;
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface ResumeScore {
  score: number;
  strengths: string[];
  weaknesses: string[];
}

export interface AssessmentScore {
  score: number;
  feedback: string;
}

export interface QuestionEvaluation {
  question: string;
  answer: string;
  feedback: string;
  score: number;
}

export interface AnalysisResult {
  matchedSkills: string[];
  unmatchedSkills: string[];
  resumeScore: ResumeScore;
  assessmentScore: AssessmentScore;
  improvementPoints: string[];
  overallScore: number;
  summary: string;
  questionEvaluation?: QuestionEvaluation[];
}
