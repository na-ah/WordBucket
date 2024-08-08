import PageTitle from "@/components/uiParts/Dashboard/PageTitle/PageTitle";
import FlashcardArea from "../../components/flashcard/FlashcardArea/flashcardArea";
import Button from "@/components/uiParts/Dashboard/Button/Button";
import { GrPowerCycle } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Layout from "@/components/shared/Templates/Layout/Layout";
import useFlashcard from "@/components/flashcard/hooks/useFlashcard";

export default function Flashcard() {
  const {
    isFront,
    currentWord,
    progressStatus,
    markCorrect,
    markIncorrect,
    flipCard,
    remainingTimePercentage,
    wordStats,
  } = useFlashcard();

  return (
    <>
      <Layout>
        <div className="flex-1 flex flex-col w-full px-5 py-3">
          <PageTitle title={"Flashcard"} />
          <FlashcardArea
            remainingTimePercentage={remainingTimePercentage}
            progressStatus={progressStatus}
            word={currentWord}
            isFront={isFront}
            wordStats={wordStats}
          />
          {isFront ? (
            <Button
              onClick={flipCard}
              text={<GrPowerCycle />}
              className="w-full mx-auto py-3 flex justify-center text-5xl text-zinc-200  bg-zinc-700"
            />
          ) : (
            <>
              <div className="flex w-full bg-zinc-700  text-5xl py-3 justify-around">
                <Button
                  text={<RxCross1 />}
                  className="bg-zinc-700 text6xl"
                  onClick={markIncorrect}
                />
                <Button
                  text={<FaRegCircle />}
                  className="bg-zinc-700"
                  onClick={markCorrect}
                />
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
