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
}

export interface FlashcardAreaProps {
  word: string;
  remainingTimePercentage: number;
}
