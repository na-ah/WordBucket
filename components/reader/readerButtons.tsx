import { ReaderButtonProps } from "@/types/types";

export default function ReaderButtons({
  currentSentence,
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
      <button>
        <a
          href={`${
            "https://www.deepl.com/ja/translator#en/ja/" +
            encodeURIComponent(currentSentence)
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          DeepL
        </a>
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
