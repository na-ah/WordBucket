import { FlashcardAreaProps } from "@/types/types";

export default function Presenter({
  word,
  remainingTimePercentage,
}: FlashcardAreaProps) {
  return (
    <>
      <div className="bg-zinc-700 flex flex-col justify-center items-center text-2xl h-1/5 w-full mx-auto my-auto ">
        <div className="mt-auto">{word}</div>
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
      </div>
    </>
  );
}
