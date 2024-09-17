import { FlashcardWordProps } from "@/types/types";

export default function FlashcardWord({ word }: FlashcardWordProps) {
  return (
    <>
      <div className="flex-grow flex justify-center items-center">
        {word.word}
      </div>
    </>
  );
}
