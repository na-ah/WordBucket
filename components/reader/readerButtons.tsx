import { ReaderButtonProps } from "@/types/types";

export default function ReaderButtons({
  sentenceIndexDecrease,
  sentenceIndexIncrease,
  paragraphIndexDecrease,
  paragraphIndexIncrease,
}: ReaderButtonProps) {
  return (
    <>
      <button
        className="text-3xl"
        onClick={paragraphIndexDecrease}
      >
        👈
      </button>
      <button
        className="text-3xl"
        onClick={sentenceIndexDecrease}
      >
        ⇐
      </button>
      <button
        className="text-3xl"
        onClick={sentenceIndexIncrease}
      >
        ⇒
      </button>
      <button
        className="text-3xl"
        onClick={paragraphIndexIncrease}
      >
        👉
      </button>
    </>
  );
}
