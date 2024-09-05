import { wordMap } from "@/data/reader/source";
import ShowMeanings from "./showMeanings";
import ShowExamples from "./showExamples";
import { ReaderWordInformationProps } from "@/types/types";

export default function ReaderWordInformation({
  currentWord,
}: ReaderWordInformationProps) {
  return (
    <>
      <div className="text-center p-8 text-slate-200 font-bold text-2xl">
        {currentWord}
      </div>
      <div className="text-center p-8 text-slate-800 font-bold text-2xl">
        {wordMap[currentWord]?.meanings && (
          <ShowMeanings meanings={wordMap[currentWord].meanings} />
        )}
      </div>
      <div className="text-center p-8 text-slate-800 font-bold text-2xl">
        {wordMap[currentWord]?.examples && (
          <ShowExamples examples={wordMap[currentWord].examples} />
        )}
      </div>
    </>
  );
}
