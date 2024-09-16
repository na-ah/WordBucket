import { FlashcardAreaBackProps } from "@/types/types";
import FlashcardHistoryTable from "./flashcardHistoryTable";
import FlashcardWordStatsArea from "./flashcardWordStatsArea";
import FlashcardMeaningArea from "./flashcardMeaningArea";
import FlashcardExampleArea from "./flashcardExampleArea";
import FlashcardImageArea from "./flashcardImageArea";

export default function FlashcardAreaBack({
  word,
  wordStats,
}: FlashcardAreaBackProps) {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="basis-2/5 flex flex-col">
          <div className="text-sm">
            <FlashcardWordStatsArea wordStats={wordStats} />
          </div>
          <div className="my-3 text-sm overflow-auto h-full">
            <FlashcardHistoryTable word={word} />
          </div>
        </div>
        <div className="basis-1/5">
          <FlashcardMeaningArea word={word} />
        </div>
        <div className="basis-2/5 flex flex-col h-[30%] overflow-auto">
          <FlashcardExampleArea word={word} />
          <FlashcardImageArea word={word} />
        </div>
      </div>
    </>
  );
}
