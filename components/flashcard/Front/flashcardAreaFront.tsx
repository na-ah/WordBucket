import { FlashcardWordAreaProps } from "@/types/types";
import FlashcardWordArea from "./flashcardWordArea";

export default function FlashcardAreaFront({
  word,
  remainingTimePercentage,
}: FlashcardWordAreaProps) {
  return (
    <>
      <div className="basis-1/5 my-auto">
        <FlashcardWordArea
          word={word}
          remainingTimePercentage={remainingTimePercentage}
        />
      </div>
    </>
  );
}
