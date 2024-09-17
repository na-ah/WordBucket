import { FlashcardWordStatsAreaProps } from "@/types/types";

export default function FlashcardWordStatsArea({
  wordStats,
}: FlashcardWordStatsAreaProps) {
  return (
    <>
      <div className="basis-1/5 flex flex-col">
        <div className="flex justify-between">
          <span>accuracyRate:</span>
          <span className="font-bold text-base">
            {wordStats.accuracyRate} %
          </span>
        </div>
        <div className="flex justify-between">
          <span>averageResponseTime:</span>
          <span className="font-bold text-base">
            {wordStats.averageResponseTime} sec
          </span>
        </div>
        <div className="flex justify-between">
          <span>learningCount:</span>
          <span className="font-bold text-base">
            {wordStats.learningCount} times
          </span>
        </div>
      </div>
    </>
  );
}
