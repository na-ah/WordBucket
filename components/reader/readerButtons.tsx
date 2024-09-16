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
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-3  h-16">
          <button
            className="text-3xl flex items-center justify-center"
            onClick={paragraphIndexDecrease}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <button className="flex justify-center items-center">
            <a
              href={`${
                "https://www.deepl.com/ja/translator#en/ja/" +
                encodeURIComponent(currentSentence)
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiDeepl className="text-5xl" />
            </a>
          </button>
          <button
            className="text-3xl flex items-center justify-center"
            onClick={paragraphIndexIncrease}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
        <div className="w-full grid grid-cols-2 h-16">
          <button
            className="text-3xl flex justify-center items-center"
            onClick={sentenceIndexDecrease}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            className="text-3xl flex items-center justify-center"
            onClick={sentenceIndexIncrease}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
