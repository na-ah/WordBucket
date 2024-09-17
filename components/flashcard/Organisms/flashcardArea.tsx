import { FlashcardAreaProps } from "@/types/types";
import FlashcardProgressStatus from "../Common/flashcardProgressStatus";
import FlashcardAreaFront from "../Front/flashcardAreaFront";
import FlashcardAreaBack from "../Back/flashcardAreaBack";

export default function FlashcardArea({
  word,
  remainingTimePercentage,
  progressStatus,
  isFront,
  wordStats,
}: FlashcardAreaProps) {
  return (
    <>
      <FlashcardProgressStatus progressStatus={progressStatus} />
      {isFront && (
        <FlashcardAreaFront
          word={word}
          remainingTimePercentage={remainingTimePercentage}
        />
      )}
      {!isFront && (
        <FlashcardAreaBack
          word={word}
          wordStats={wordStats}
        />
      )}
    </>
  );
}
