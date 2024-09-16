import { ReaderButtonProps } from "@/types/types";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { SiDeepl } from "react-icons/si";

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
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>
      <button
        className="text-3xl"
        onClick={sentenceIndexDecrease}
      >
        <MdOutlineKeyboardArrowLeft />
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
          <SiDeepl className="text-5xl text-yellow-300" />
        </a>
      </button>
      <button
        className="text-3xl"
        onClick={sentenceIndexIncrease}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
      <button
        className="text-3xl"
        onClick={paragraphIndexIncrease}
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </>
  );
}
