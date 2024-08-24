import { FlashcardWordProps } from "@/types/types";

export default function FlashcardWord({ word }: FlashcardWordProps) {
  return (
    <>
      <div className="mt-auto">{word.word}</div>
    </>
  );
}
