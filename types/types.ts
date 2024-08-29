import exp from "constants";
import { MouseEvent, ReactNode } from "react";

export interface MenuPosition {
  top: number;
  left: number;
}

export interface DashboardMenuProps {
  menuPosition: MenuPosition;
}

export interface DashboardBoxListProps {
  boxPropsList: DashboardBoxPropsList[];
  handleBoxClick: (arg: string) => void;
}

export interface DashboardBoxPropsList {
  title: string;
  count: string;
  percentage: string;
  color?: string;
  boxName: string;
}

export interface DashboardInformationListProps {
  pageTitle: string;
  informations: Informations[];
}

export interface DashboardInformationProps {
  informations: Informations[];
}

export interface Informations {
  title: string;
  text: string;
  color?: string;
}

export interface DashboardBoxProps {
  title: string;
  count: string;
  percentage: string;
  color?: string;
  boxName: string;
  handleBoxClick: (arg: string) => void;
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

export interface DashboardBoxWrapperProps {
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

export interface FlashcardProgressStatusProps {
  progressStatus: ProgressStatus;
}

export interface FlashcardWordAreaProps {
  word: Word;
  remainingTimePercentage: number;
}

export interface FlashcardButtonFrontProps {
  flipCard: () => void;
}

export interface FlashcardButtonBackProps {
  markCorrect: () => void;
  markIncorrect: () => void;
}

export interface FlashcardAreaBackProps {
  word: Word;
  wordStats: WordStats;
}

export interface FlashcardMeaningAreaProps {
  word: Word;
}

export interface FlashcardWordProps {
  word: Word;
}

export interface FlashcardProgressBarProps {
  remainingTimePercentage: number;
}

export interface FlashcardImageAreaProps {
  word: Word;
}

export interface FlashcardExampleAreaProps {
  word: Word;
}

export interface FlashcardHistoryTableProps {
  word: Word;
}

export interface FlashcardWordStatsAreaProps {
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
  histories: History[];
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

export interface History {
  id: number;
  datetime: string;
  result: boolean;
  duration: number;
}

export interface Dashboard {
  [key: string]: unknown;
  newCards: number;
  todayLearningCards: number;
  unlearned: number;
  inProgress: number;
  completed: number;
  lowCount: number;
  mediumCount: number;
  highCount: number;
  lowAccuracyRate: number;
  mediumAccuracyRate: number;
  highAccuracyRate: number;
  shortDuration: number;
  mediumDuration: number;
  longDuration: number;
}

export interface QueryByBoxName {
  [key: string]: string;
}

export interface FlashcardResultStatisticsProps {
  totalAverageResponseTime: number;
  totalAccuracyRate: number;
}

export interface FlashcardResultListProps {
  correctList: Word[];
  incorrectList: Word[];
}

export interface UpdateWordHistoryProps {
  word_id: number;
  duration: number;
  result: boolean;
  datetime: string;
}
