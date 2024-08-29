import Button from "@/components/shared/Button";
import { currentDeckIndexAtom } from "@/data/atoms/flashcardAtoms";
import useResult from "@/hooks/flashcard/useResult";
import { useAtomValue } from "jotai";

export default function FlashcardResultButton() {
  const currentDeckIndex = useAtomValue(currentDeckIndexAtom);
  const { lastRap, nextDeck } = useResult();

  return (
    <>
      <Button
        text="間違えた問題を復習する"
        bgColor="zinc800"
        className="border py-2 rounded-lg w-3/4"
      />
      {currentDeckIndex !== lastRap && (
        <Button
          text="次のセットへ"
          onClick={nextDeck}
          bgColor="zinc800"
          className="border py-2 rounded-lg w-3/4"
        />
      )}
    </>
  );
}
