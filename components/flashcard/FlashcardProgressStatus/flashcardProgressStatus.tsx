import { FlashcardProgressStatusProps } from "@/types/types";

export default function FlashcardProgressCounter({
  progressStatus,
}: FlashcardProgressStatusProps) {
  return (
    <>
      <div className="flex">
        <span className="ms-auto">
          {`${progressStatus.completed} / ${progressStatus.total}`}
        </span>
      </div>
    </>
  );
}
