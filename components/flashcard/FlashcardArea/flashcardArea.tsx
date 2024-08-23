import { FlashcardAreaProps } from "@/types/types";
import FlashcardImageArea from "../FlashcardImageArea/flashcardImageArea";
import FlashcardWordStatsArea from "../FlashcardWordStatsArea/flashcardWordStatsArea";
import FlashcardProgressCounter from "../FlashcardProgressStatus/flashcardProgressStatus";
import FlashcardHistoryTable from "../FlashcardHistoryTable/flashcardHistoryTable";
import FlashcardExampleArea from "../FlashcardExampleArea/flashcardExampleArea";
import FlashcardProgressBar from "../Front/FlashcardProgressBar/flashcardProgressBar";
import FlashcardWord from "../Front/FlashcardWord/flashcardWord";
import FlashcardWordArea from "../Front/FlashcardWordArea/flashcardWordArea";

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
        <FlashcardProgressCounter progressStatus={progressStatus} />
        {isFront && (
          <div className="basis-1/5 my-auto">
            <FlashcardWordArea
              word={word}
              remainingTimePercentage={remainingTimePercentage}
            />
          </div>
        )}
        {!isFront && (
          <>
            <div className="flex flex-col h-full">
              <div className="basis-2/5 flex pt-3">
                <div className="basis-3/4 text-sm">
                  <FlashcardHistoryTable word={word} />
                </div>
                <div className="basis-auto text-sm">
                  <FlashcardWordStatsArea wordStats={wordStats} />
                </div>
              </div>
              <div className="basis-1/5 flex flex-col h-full justify-center items-center text-2xl bg-zinc-700 ">
                {word.meanings.map((meaning) => (
                  <>{meaning.meaning}</>
                ))}
              </div>
              <div className="flex gap-3">
                <FlashcardExampleArea word={word} />
                <FlashcardImageArea word={word} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
