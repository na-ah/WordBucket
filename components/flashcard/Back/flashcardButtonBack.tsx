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
      <div className="flex w-full text-5xl my-3 justify-around gap-3">
        <Button
          text={<RxCross1 />}
          className="bg-zinc-700 basis-1/2 flex justify-center py-3"
          onClick={markIncorrect}
        />
        <Button
          text={<FaRegCircle />}
          className="bg-zinc-700 basis-1/2 flex justify-center py-3"
          onClick={markCorrect}
        />
      </div>
    </>
  );
}
