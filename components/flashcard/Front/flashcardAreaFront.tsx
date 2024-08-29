import { FlashcardWordAreaProps } from "@/types/types";
import FlashcardWord from "./flashcardWord";
import FlashcardProgressBar from "./flashcardProgressBar";

export default function FlashcardAreaFront({
  word,
  remainingTimePercentage,
}: FlashcardWordAreaProps) {
  return (
    <>
      <div className="basis-1/5 my-auto">
        <div className="h-full flex flex-col justify-center items-center text-2xl bg-zinc-700 ">
          <FlashcardWord word={word} />
          <FlashcardProgressBar
            remainingTimePercentage={remainingTimePercentage}
          />
        </div>
      </div>
    </>
  );
}
