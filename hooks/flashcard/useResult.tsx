import {
  batchSizeAtom,
  currentDeckAtom,
  currentDeckIndexAtom,
  isResultShownAtom,
  wordsPoolAtom,
} from "@/data/atoms/flashcardAtoms";
import { currentWordIndexAtom } from "@/data/atoms/flashcardStateAtoms";
import { useAtomValue, useSetAtom } from "jotai";

export default function useResult() {
  const currentDeck = useAtomValue(currentDeckAtom);
  const setCurrentDeckIndex = useSetAtom(currentDeckIndexAtom);
  const setIsResultShown = useSetAtom(isResultShownAtom);

  const wordsPool = useAtomValue(wordsPoolAtom);
  const batchSize = useAtomValue(batchSizeAtom);

  const setCurrentWordIndex = useSetAtom(currentWordIndexAtom);

  const lastRap =
    (wordsPool.length % batchSize === 0
      ? wordsPool.length / batchSize
      : Math.floor(wordsPool.length / batchSize) + 1) - 1;

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

  const nextDeck = () => {
    setCurrentDeckIndex((prevIndex) => prevIndex + 1);
    setCurrentWordIndex(0);
    setIsResultShown(false);
  };

  return {
    nextDeck,
    correctList,
    incorrectList,
    totalAverageResponseTime,
    totalAccuracyRate,
    lastRap,
  };
}
