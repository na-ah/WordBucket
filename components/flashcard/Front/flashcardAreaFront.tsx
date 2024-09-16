import { FlashcardWordAreaProps } from "@/types/types";
import FlashcardWord from "./flashcardWord";
import FlashcardProgressBar from "./flashcardProgressBar";

export default function FlashcardAreaFront({
  word,
  remainingTimePercentage,
}: FlashcardWordAreaProps) {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="basis-2/5"></div>
        <div className="basis-1/5">
          <div className="h-full flex flex-col justify-center items-center text-2xl bg-zinc-700 ">
            <FlashcardWord word={word} />
            <FlashcardProgressBar
              remainingTimePercentage={remainingTimePercentage}
            />
          </div>
        </div>
        <div className="basis-2/5"></div>
      </div>
    </>
  );
}
