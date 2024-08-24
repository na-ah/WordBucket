import { FlashcardWordAreaProps } from "@/types/types";
import FlashcardProgressBar from "./flashcardProgressBar";
import FlashcardWord from "./flashcardWord";

export default function FlashcardWordArea({
  word,
  remainingTimePercentage,
}: FlashcardWordAreaProps) {
  return (
    <>
      <div className="h-full flex flex-col justify-center items-center text-2xl bg-zinc-700 ">
        <FlashcardWord word={word} />
        <FlashcardProgressBar
          remainingTimePercentage={remainingTimePercentage}
        />
      </div>
    </>
  );
}
