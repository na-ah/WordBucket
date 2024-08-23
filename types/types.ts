import { MouseEvent, ReactNode } from "react";

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

export interface FlashcardButtonProps {
  isFront: boolean;
  flipCard: () => void;
  markCorrect: () => void;
  markIncorrect: () => void;
}

export interface UseFlashcardLogicProps {
  isFront: boolean;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
  currentWordIndex: number;
  setCurrentWordIndex: React.Dispatch<React.SetStateAction<number>>;
  currentDeck: Word[];
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  timeLimit: number;
}

export interface ProgressStatus {
  completed: number;
  total: number;
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

export interface Word {
  id: number;
  word: string;
  image?: string;
  meanings: Meaning[];
  examples: Example[];
  histories: BackendHistory[];
  average_duration: number;
  correct_rate: number;
  learning_count: number;
}

export interface Meaning {
  id: number;
  meaning: string;
}

export interface Example {
  id: number;
  example: string;
}

export interface BackendHistory {
  id: number;
  datetime: string;
  result: boolean;
  duration: number;
}
