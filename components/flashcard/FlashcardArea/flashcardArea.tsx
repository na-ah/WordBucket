import { FlashcardAreaProps } from "@/types/types";
import LeftBarTitle from "@/components/shared/uiParts/Dashboard/LeftBarTitle/LeftBarTitle";
import Image from "next/image";

export default function flashcardArea({
  word,
  remainingTimePercentage,
  progressStatus,
  isFront,
  wordStats,
}: FlashcardAreaProps) {
  const progressBar = (
    <div className="w-full mt-auto flex">
      <hr
        className="border border-lime-300 mt-auto me-auto"
        style={{
          display: remainingTimePercentage === 0 ? "none" : "block",
          width: `${remainingTimePercentage}%`,
        }}
      />
      <hr
        className="border border-zinc-600 mt-auto ms-auto"
        style={{
          display: 100 - remainingTimePercentage === 0 ? "none" : "block",
          width: `${100 - remainingTimePercentage}%`,
        }}
      />
    </div>
  );

  const historyTable = (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <td>日付</td>
            <td>結果</td>
            <td>時間</td>
          </tr>
        </thead>
        <tbody>
          {word.histories.map((result, i) => (
            <tr key={i}>
              <td>{result.datetime}</td>
              <td>{result.result}</td>
              <td>{result.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  const imageArea = (
    <>
      <div className="w-fit mx-auto mt-3">
        {word.image && (
          <Image
            src={word.image}
            width={300}
            height={300}
            alt={word.word}
          />
        )}
      </div>
    </>
  );

  const exampleArea = (
    <>
      <div className="mt-3 p-2 gap-3 bg-zinc-700  flex flex-col items-start overflow-y-auto">
        {word.examples.map((sentence, i) => (
          <div key={i}>
            <LeftBarTitle
              title={sentence.example}
              color="lime"
            />
          </div>
        ))}
      </div>
    </>
  );

  const wordStatsArea = (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span>accuracyRate:</span>
        <span>{wordStats.accuracyRate * 100} %</span>
      </div>
      <div className="flex justify-between">
        <span>averageResponseTime:</span>
        <span>{wordStats.averageResponseTime} sec</span>
      </div>
      <div className="flex justify-between">
        <span>learningCount:</span>
        <span>{wordStats.learningCount} times</span>
      </div>
    </div>
  );

  return (
    <>
      <div className="h-full w-full my-auto flex flex-col">
        <div className="flex">
          <span className="ms-auto">
            {`${progressStatus.completed} / ${progressStatus.total}`}
          </span>
        </div>
        {isFront ? (
          <div className="basis-1/5 my-auto flex flex-col justify-center items-center text-2xl bg-zinc-700 ">
            <div className="mt-auto">{word.word}</div>
            {progressBar}
          </div>
        ) : (
          <>
            <div className="flex flex-col h-full">
              <div className="basis-2/5 flex pt-3">
                <div className="basis-3/4 text-sm">{historyTable}</div>
                <div className="basis-auto text-sm">{wordStatsArea}</div>
              </div>
              <div className="basis-1/5 flex flex-col h-full justify-center items-center text-2xl bg-zinc-700 ">
                {word.meanings.map((meaning) => (
                  <>{meaning.meaning}</>
                ))}
              </div>
              <div className="flex gap-3">
                {exampleArea}
                {imageArea}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
