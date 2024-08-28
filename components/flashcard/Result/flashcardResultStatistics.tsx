import UnderlineTitle from "@/components/shared/UnderlineTitle";
import { FlashcardResultStatisticsProps } from "@/types/types";

export default function FlashcardResultStatistics({
  totalAverageResponseTime,
  totalAccuracyRate,
}: FlashcardResultStatisticsProps) {
  return (
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
}
