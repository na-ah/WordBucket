import { ReaderButtonProps } from "@/types/types";

export default function ReaderButtons({
  wordIndexDecrease,
  wordIndexIncrease,
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
        onClick={wordIndexDecrease}
      >
        ←
      </button>
      <button
        className="text-3xl"
        onClick={wordIndexIncrease}
      >
        →
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
