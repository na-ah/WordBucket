import { FlashcardWordAreaProps } from "@/types/types";
import FlashcardWord from "./flashcardWord";
import FlashcardProgressBar from "./flashcardProgressBar";

export default function FlashcardAreaFront({
  word,
  remainingTimePercentage,
}: FlashcardWordAreaProps) {
  return (
    <>
      <div className="flex-grow overflow-auto flex flex-col gap-3">
        <div className="basis-1/5"></div>
        <div className="basis-1/5"></div>
        <div className="basis-1/5">
          <div className="h-full flex flex-col text-2xl bg-zinc-700 ">
            <FlashcardWord word={word} />
          </div>
          <FlashcardProgressBar
            remainingTimePercentage={remainingTimePercentage}
          />
        </div>
        <div className="basis-2/5"></div>
      </div>
    </>
  );
}
