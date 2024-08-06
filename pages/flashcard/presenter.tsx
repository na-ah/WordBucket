import Layout from "@/shared/Templates/Layout/Layout";
import { FlashcardProps } from "@/types/types";
import PageTitle from "@/uiParts/Dashboard/PageTitle/PageTitle";
import FlashcardArea from "./FlashcardArea/flashcardArea";
import Button from "@/uiParts/Dashboard/Button/Button";
import { GrPowerCycle } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export default function Presenter({
  pageTitle,
  flipCard,
  isFront,
  word,
  progressStatus,
  remainingTimePercentage,
  markIncorrect,
  markCorrect,
}: FlashcardProps) {
  return (
    <>
      <Layout>
        <div className="flex-1 flex flex-col w-full px-5 py-3">
          <PageTitle title={pageTitle} />
          <FlashcardArea
            remainingTimePercentage={remainingTimePercentage}
            progressStatus={progressStatus}
            word={word}
            isFront={isFront}
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
