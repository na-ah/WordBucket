import { FlashcardProgressStatusProps } from "@/types/types";

export default function FlashcardProgressStatus({
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
