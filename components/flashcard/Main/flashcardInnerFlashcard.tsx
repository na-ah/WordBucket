import PageTitle from "@/components/shared/PageTitle";
import FlashcardArea from "../Organisms/flashcardArea";
import FlashcardButton from "../Organisms/flashcardButton";
import FlashcardResult from "../Result/flashcardResult";
import useFlashcard from "@/hooks/flashcard/useFlashcard";
import {
  currentDeckAtom,
  isResultShownAtom,
} from "@/data/atoms/flashcardAtoms";
import { useAtomValue } from "jotai";

export default function InnerFlashcard() {
  const currentDeck = useAtomValue(currentDeckAtom);
  const isResultShown = useAtomValue(isResultShownAtom);

  const {
    isFront,
    flipCard,
    currentWord,
    progressStatus,
    remainingTimePercentage,
    wordStats,
    markCorrect,
    markIncorrect,
  } = useFlashcard();

  if (currentDeck.length === 0) {
    return <p>currentDeck has no cards.</p>;
  }

  if (isResultShown) {
    return (
      <>
        <FlashcardResult />
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col px-5 py-3 h-dvh">
        <PageTitle title={"Flashcard"} />
        <FlashcardArea
          remainingTimePercentage={remainingTimePercentage}
          progressStatus={progressStatus}
          word={currentWord}
          isFront={isFront}
          wordStats={wordStats}
        />
        <FlashcardButton
          isFront={isFront}
          flipCard={flipCard}
          markCorrect={markCorrect}
          markIncorrect={markIncorrect}
        />
      </div>
    </>
  );
}
