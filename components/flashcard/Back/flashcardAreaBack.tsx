import { FlashcardAreaBackProps } from "@/types/types";
import FlashcardHistoryTable from "./flashcardHistoryTable";
import FlashcardWordStatsArea from "./flashcardWordStatsArea";
import FlashcardMeaningArea from "./flashcardMeaningArea";
import FlashcardExampleArea from "./flashcardExampleArea";

export default function FlashcardAreaBack({
  word,
  wordStats,
}: FlashcardAreaBackProps) {
  return (
    <>
      <div className="flex-grow overflow-auto flex flex-col gap-3">
        <FlashcardWordStatsArea wordStats={wordStats} />
        <FlashcardHistoryTable word={word} />
        <FlashcardMeaningArea word={word} />
        <FlashcardExampleArea word={word} />
      </div>
    </>
  );
}
