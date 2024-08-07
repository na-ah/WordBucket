import { FlashcardAreaProps } from "@/types/types";
import Presenter from "./presenter";

export default function FlashcardArea({
  isFront,
  word,
  progressStatus,
  remainingTimePercentage,
  wordStats,
}: FlashcardAreaProps) {
  return (
    <>
      <Presenter
        word={word}
        remainingTimePercentage={remainingTimePercentage}
        progressStatus={progressStatus}
        isFront={isFront}
        wordStats={wordStats}
      />
    </>
  );
}
