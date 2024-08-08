import {
  batchSizeAtom,
  currentDeckAtom,
  currentDeckIndexAtom,
  wordsPoolAtom,
} from "@/data/flashcard/flashcardAtoms";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

export default function useDeck() {
  const [currentDeck, setCurrentDeck] = useAtom(currentDeckAtom);
  const [batchSize, setBatchSize] = useAtom(batchSizeAtom);
  const [wordsPool, setWordsPool] = useAtom(wordsPoolAtom);
  const [currentDeckIndex, setCurrentDeckIndex] = useAtom(currentDeckIndexAtom);
  const router = useRouter();

  function nextDeck() {
    setCurrentDeckIndex((prevIndex) => prevIndex + 1);
    router.push("/flashcard");
  }

  return {
    wordsPool,
    setWordsPool,
    batchSize,
    setBatchSize,
    currentDeckIndex,
    setCurrentDeckIndex,
    currentDeck,
    setCurrentDeck,
    nextDeck,
  };
}
