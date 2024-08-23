import PageTitle from "@/components/uiParts/Dashboard/PageTitle/PageTitle";
import FlashcardArea from "../../components/flashcard/FlashcardArea/flashcardArea";
import Layout from "@/components/shared/Templates/Layout/Layout";
import useFlashcard from "@/components/flashcard/hooks/useFlashcard";
import FlashcardButton from "@/components/flashcard/FlashcardButton/flashcardButton";

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
