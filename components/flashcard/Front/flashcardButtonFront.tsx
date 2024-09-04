import Button from "@/components/shared/Button";
import { FlashcardButtonFrontProps } from "@/types/types";
import { GrPowerCycle } from "react-icons/gr";

export default function FlashcardButtonFront({
  flipCard,
}: FlashcardButtonFrontProps) {
  return (
    <>
      <Button
        onClick={flipCard}
        text={<GrPowerCycle />}
        className="w-full mx-auto my-3 py-3 flex justify-center text-5xl text-zinc-200  bg-zinc-700"
      />
    </>
  );
}
