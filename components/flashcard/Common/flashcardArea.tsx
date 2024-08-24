import { FlashcardAreaProps } from "@/types/types";
import FlashcardProgressStatus from "./flashcardProgressStatus";
import FlashcardAreaFront from "../Front/flashcardAreaFront";
import FlashcardAreaBack from "../Back/flashcardAreaBack";

export default function flashcardArea({
  word,
  remainingTimePercentage,
  progressStatus,
  isFront,
  wordStats,
}: FlashcardAreaProps) {
  return (
    <>
      <div className="h-full w-full my-auto flex flex-col">
        <FlashcardProgressStatus progressStatus={progressStatus} />
        {isFront && (
          <FlashcardAreaFront
            word={word}
            remainingTimePercentage={remainingTimePercentage}
          />
        )}
        {!isFront && (
          <>
            <FlashcardAreaBack
              word={word}
              wordStats={wordStats}
            />
          </>
        )}
      </div>
    </>
  );
}
