import { wordMap } from "@/data/reader/source";
import { ReaderWordInformationProps } from "@/types/types";

export default function ReaderWordInformation({
  currentWord,
}: ReaderWordInformationProps) {
  return (
    <>
      <div className="text-slate-200 flex flex-col gap-3 py-3">
        <div className="font-bold text-2xl">{currentWord}</div>
        <div className="font-bold text-lg flex">
          {wordMap[currentWord]?.meanings && (
            <>
              <p>意味：</p>
              <div>
                {wordMap[currentWord].meanings.map((meaning, i) => (
                  <p key={i}>{meaning.meaning}</p>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="font-bold text-lg flex">
          {wordMap[currentWord]?.examples && (
            <>
              <p>例文：</p>
              <div>
                {wordMap[currentWord].examples.map((example, i) => (
                  <p key={i}>{example.example}</p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
