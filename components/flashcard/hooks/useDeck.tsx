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

  const sortedDeck = currentDeck.map((word) => ({
    ...word,
    history: word.histories.sort((a, b) => (a.datetime > b.datetime ? 1 : -1)),
  }));

  const correctList = sortedDeck.filter(
    (word) => word.histories.at(-1)?.result === true
  );

  const incorrectList = sortedDeck.filter(
    (word) => word.history.at(-1)?.result === false
  );

  const totalAverageResponseTime =
    Math.round(
      (correctList
        .map((word) => word.history.at(-1)?.duration ?? 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
        correctList.length) *
        100
    ) / 100;

  const totalAccuracyRate =
    Math.round(
      (correctList.length / (correctList.length + incorrectList.length)) * 100
    ) / 100;

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
    correctList,
    incorrectList,
    totalAverageResponseTime,
    totalAccuracyRate,
  };
}
