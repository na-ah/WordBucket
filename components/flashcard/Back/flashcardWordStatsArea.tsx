import { FlashcardWordStatsAreaProps } from "@/types/types";

export default function FlashcardWordStatsArea({
  wordStats,
}: FlashcardWordStatsAreaProps) {
  return (
    <>
      <div className="flex flex-col py-3 gap-1">
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
    </>
  );
}
