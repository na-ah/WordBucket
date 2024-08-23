import Layout from "@/components/Template/Layout/Layout";
import Button from "@/components/shared/Button/Button";
import PageTitle from "@/components/shared/PageTitle/PageTitle";
import UnderlineTitle from "@/components/shared/UnderlineTitle/UnderlineTitle";
import useDeck from "@/hooks/flashcard/useDeck";

export default function Results() {
  const {
    wordsPool,
    batchSize,
    currentDeckIndex,
    setCurrentDeckIndex,
    currentDeck,
    nextDeck,
    correctList,
    incorrectList,
    totalAverageResponseTime,
    totalAccuracyRate,
  } = useDeck();

  const resultsArea = (
    <>
      <div className="flex gap-3 h-full">
        <div className="basis-1/2 flex flex-col px-3 py-5">
          <UnderlineTitle
            content={String(correctList.length)}
            title="○"
          />
          <div className="overflow-y-auto">
            <ul className="flex flex-col items-center">
              {correctList.map((data, i) => (
                <p key={i}>{data.word}</p>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col basis-1/2 px-3 py-5">
          <UnderlineTitle
            content={String(incorrectList.length)}
            title="×"
          />
          <div className="px-8 overflow-y-auto">
            <ul className="flex flex-col flex-wrap mt-3 items-center">
              {incorrectList.map((data, i) => (
                <p key={i}>{data.word}</p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  const statisticsArea = (
    <>
      <UnderlineTitle
        content=""
        title="Statistics"
      />
      <div className="px-5 py-3 flex flex-col gap-3">
        <div className="flex justify-between">
          <span>平均解答時間</span>
          <span>{totalAverageResponseTime} 秒</span>
        </div>
        <div className="flex justify-between">
          <span>正答率</span>
          <span>{totalAccuracyRate * 100} %</span>
        </div>
      </div>
    </>
  );

  const lastRap =
    (wordsPool.length % batchSize === 0
      ? wordsPool.length / batchSize
      : Math.floor(wordsPool.length / batchSize) + 1) - 1;

  return (
    <>
      <Layout>
        <div className="py-3 px-5 h-dvh grid grid-rows-[32px_5fr_2fr_1fr] ">
          <div className="">
            <PageTitle title="Results" />
          </div>
          <div className="overflow-y-auto">
            <div className="h-full">{resultsArea}</div>
          </div>
          <div className="overflow-y-auto">{statisticsArea}</div>
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
      </Layout>
    </>
  );
}
