import Button from "@/components/shared/Button";
import { FlashcardButtonBackProps } from "@/types/types";
import { FaRegCircle } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export default function FlashcardButtonBack({
  markCorrect,
  markIncorrect,
}: FlashcardButtonBackProps) {
  return (
    <>
      <div className="flex w-full bg-zinc-700  text-5xl py-3 justify-around">
        <Button
          text={<RxCross1 />}
          className="bg-zinc-700 text6xl"
          onClick={markIncorrect}
        />
        <Button
          text={<FaRegCircle />}
          className="bg-zinc-700"
          onClick={markCorrect}
        />
      </div>
    </>
  );
}
