import { wordMap } from "@/data/reader/source";
import { ReaderWordInformationProps } from "@/types/types";

export default function ReaderWordInformation({
  currentWord,
  currentMode,
  handleClickInformationClose,
}: ReaderWordInformationProps) {
  return (
    <>
      <div className="text-white flex flex-col gap-3 py-3 px-3 rounded-xl bg-zinc-700">
        <div className="font-bold text-2xl flex justify-between">
          <p className="border-l-4 ps-2 border-gray-500">{currentWord}</p>
          <button
            onClick={handleClickInformationClose}
            className="text-zinc-300"
          >
            ×
          </button>
        </div>
        <div className="font-bold text-lg flex">
          {wordMap[currentWord]?.meanings && (
            <>
              <p className="border-l-4 ps-2 border-blue-500">意味：</p>
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
              <p className="border-l-4 ps-2 border-green-500">例文：</p>
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
