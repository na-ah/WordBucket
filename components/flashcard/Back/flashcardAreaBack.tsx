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
        <div className="basis-2/5 flex pt-3">
          <div className="basis-3/4 text-sm">
            <FlashcardHistoryTable word={word} />
          </div>
          <div className="basis-auto text-sm">
            <FlashcardWordStatsArea wordStats={wordStats} />
          </div>
        </div>
        <div className="basis-1/5">
          <FlashcardMeaningArea word={word} />
        </div>
        <div className="flex">
          <FlashcardExampleArea word={word} />
          <FlashcardImageArea word={word} />
        </div>
      </div>
    </>
  );
}
