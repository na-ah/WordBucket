import Button from "@/components/shared/Button/Button";
import { FaRegCircle } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { FlashcardButtonProps } from "@/types/types";

export default function FlashcardButton({
  isFront,
  flipCard,
  markCorrect,
  markIncorrect,
}: FlashcardButtonProps) {
  return (
    <>
      {isFront && (
        <Button
          onClick={flipCard}
          text={<GrPowerCycle />}
          className="w-full mx-auto py-3 flex justify-center text-5xl text-zinc-200  bg-zinc-700"
        />
      )}
      {!isFront && (
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
      )}
    </>
  );
}
