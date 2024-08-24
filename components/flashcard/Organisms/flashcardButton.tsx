import { FlashcardButtonProps } from "@/types/types";
import FlashcardButtonFront from "../Front/flashcardButtonFront";
import FlashcardButtonBack from "../Back/flashcardButtonBack";

export default function FlashcardButton({
  isFront,
  flipCard,
  markCorrect,
  markIncorrect,
}: FlashcardButtonProps) {
  return (
    <>
      {isFront && <FlashcardButtonFront flipCard={flipCard} />}
      {!isFront && (
        <FlashcardButtonBack
          markCorrect={markCorrect}
          markIncorrect={markIncorrect}
        />
      )}
    </>
  );
}
