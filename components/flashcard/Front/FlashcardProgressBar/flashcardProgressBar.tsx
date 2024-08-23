import { FlashcardProgressBarProps } from "@/types/types";

export default function FlashcardProgressBar({
  remainingTimePercentage,
}: FlashcardProgressBarProps) {
  return (
    <>
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
    </>
  );
}
