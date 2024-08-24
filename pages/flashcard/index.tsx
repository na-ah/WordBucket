import FlashcardArea from "@/components/flashcard/Organisms/flashcardArea";
import FlashcardButton from "@/components/flashcard/Organisms/flashcardButton";
import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import useFlashcard from "@/hooks/flashcard/useFlashcard";

export default function Flashcard() {
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

  return (
    <>
      <Layout>
        <div className="flex-1 flex flex-col w-full px-5 py-3">
          <PageTitle title={"Flashcard"} />
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
        </div>
      </Layout>
    </>
  );
}
