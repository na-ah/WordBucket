import { MouseEvent, ReactElement, ReactNode } from "react";

export interface MenuPosition {
  top: number;
  left: number;
}

export interface DashboardProps {
  pageTitle: string;
  informations: informations[];
  reviewList?: DashboardBoxProps[];
  learningList?: DashboardBoxProps[];
  studyTermList?: DashboardBoxProps[];
  correctRatioList?: DashboardBoxProps[];
  requiredTimeList?: DashboardBoxProps[];
  menuVisible?: boolean;
  handleBoxClick?: (e: MouseEvent<HTMLDivElement>) => void;
  handleMenuClose: () => void;
  menuPosition?: MenuPosition;
}

export interface DashboardInformationProps {
  pageTitle: string;
  informations: informations[];
}

export interface informations {
  title: string;
  text: string;
  color?: string;
}

export interface DashboardBoxProps {
  title: string;
  count: number;
  percentage: number;
  color?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface Colors {
  [key: string]: string;
}

export interface LeftBarTitleProps {
  title: string;
  color?: string;
  className?: string;
}

export interface UnderlineTitleProps {
  title: string;
  content: string;
}

export interface DashboardBoxesProps {
  listTitle: string;
  listContent: string;
  children: ReactNode;
}

export interface ButtonProps {
  className?: string;
  text: ReactNode;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  style?: Colors;
}

export interface FlashcardProps {
  pageTitle: string;
  isFront: boolean;
  flipCard: () => void;
  word: Word;
  remainingTimePercentage: number;
  progressStatus: ProgressStatus;
  markIncorrect: () => void;
  markCorrect: () => void;
  wordStats: WordStats;
}

export interface ProgressStatus {
  completed: number;
  total: number;
}

export interface Word {
  question: string;
  answer: string;
  example: string[];
  image: string;
  history: Result[];
}

export interface Result {
  date: string;
  result: string;
  time: number;
}

export interface FlashcardAreaProps {
  word: Word;
  remainingTimePercentage: number;
  progressStatus: ProgressStatus;
  isFront: boolean;
  wordStats: WordStats;
}

export interface WordStats {
  averageResponseTime: number;
  accuracyRate: number;
  learningCount: number;
}
