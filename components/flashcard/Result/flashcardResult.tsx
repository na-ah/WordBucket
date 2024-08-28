import Button from "@/components/shared/Button";
import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import useDeck from "@/hooks/flashcard/useDeck";
import FlashcardResultList from "./flashcardResultList";
import FlashcardResultStatistics from "./flashcardResultStatistics";

export default function FlashcardResult() {
  const {
    wordsPool,
    batchSize,
    currentDeckIndex,
    nextDeck,
    correctList,
    incorrectList,
    totalAverageResponseTime,
    totalAccuracyRate,
  } = useDeck();

  const lastRap =
    (wordsPool.length % batchSize === 0
      ? wordsPool.length / batchSize
      : Math.floor(wordsPool.length / batchSize) + 1) - 1;

  return (
    <>
      <div className="py-3 px-5 h-dvh grid grid-rows-[32px_5fr_2fr_1fr] ">
        <div className="">
          <PageTitle title="Result" />
        </div>
        <div className="overflow-y-auto">
          <div className="h-full">
            <FlashcardResultList
              correctList={correctList}
              incorrectList={incorrectList}
            />
          </div>
        </div>
        <div className="overflow-y-auto">
          <FlashcardResultStatistics
            totalAccuracyRate={totalAccuracyRate}
            totalAverageResponseTime={totalAverageResponseTime}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center flex-col items-center gap-5">
            <Button
              text="間違えた問題を復習する"
              bgColor="zinc800"
              className="border py-2 rounded-lg w-3/4"
            />
            {currentDeckIndex !== lastRap && (
              <Button
                text="次のセットへ"
                onClick={nextDeck}
                bgColor="zinc800"
                className="border py-2 rounded-lg w-3/4"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
