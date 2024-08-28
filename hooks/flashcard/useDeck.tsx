import {
  currentDeckAtom,
  currentDeckIndexAtom,
  isResultShownAtom,
} from "@/data/atoms/flashcardAtoms";
import { useAtomValue, useSetAtom } from "jotai";

export default function useDeck() {
  const currentDeck = useAtomValue(currentDeckAtom);
  const setCurrentDeckIndex = useSetAtom(currentDeckIndexAtom);
  const setIsResultShown = useSetAtom(isResultShownAtom);

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
    setIsResultShown(false);
  }

  return {
    currentDeck,
    nextDeck,
    correctList,
    incorrectList,
    totalAverageResponseTime,
    totalAccuracyRate,
  };
}
