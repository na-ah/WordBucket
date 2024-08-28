import FlashcardArea from "@/components/flashcard/Organisms/flashcardArea";
import FlashcardButton from "@/components/flashcard/Organisms/flashcardButton";
import FlashcardResult from "@/components/flashcard/Result/flashcardResult";
import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import {
  currentDeckAtom,
  isLoadingAtom,
  isResultShownAtom,
} from "@/data/atoms/flashcardAtoms";
import useFlashcard from "@/hooks/flashcard/useFlashcard";
import { useAtom, useAtomValue } from "jotai";

export default function Flashcard() {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const currentDeck = useAtomValue(currentDeckAtom);
  const [isResultShown, setIsResultShown] = useAtom(isResultShownAtom);

  const {
    isFront,
    flipCard,
    currentWord,
    progressStatus,
    remainingTimePercentage,
    wordStats,
    markCorrect,
    markIncorrect,
    closeResult,
  } = useFlashcard();

  if (currentDeck.length === 0) {
    return (
      <Layout>
        <p>currentDeck has no cards.</p>
      </Layout>
    );
  }

  if (isResultShown) {
    return (
      <>
        <FlashcardResult />
        <button onClick={closeResult}>結果画面を閉じる</button>
      </>
    );
  }
  return (
    <>
      <Layout>
        <div className="flex-1 flex flex-col w-full px-5 py-3">
          <PageTitle title={"Flashcard"} />
          <>
            {isLoading && (
              <>
                <p>Loading...</p>
              </>
            )}
            {!isLoading && (
              <>
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
              </>
            )}
          </>
        </div>
      </Layout>
    </>
  );
}
