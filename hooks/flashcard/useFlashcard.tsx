import { useEffect, useMemo } from "react";
import useWordStats from "./useWordStats";
import useTimer from "./useTimer";
import { currentDeckAtom } from "@/data/atoms/flashcardAtoms";
import { useAtomValue } from "jotai";
import {
  currentWordAtom,
  currentWordIndexAtom,
  isFrontAtom,
} from "@/data/atoms/flashcardStateAtoms";
import useFlashcardActions from "./useFlashcardActions";

export default function useFlashcard() {
  const currentDeck = useAtomValue(currentDeckAtom);
  const isFront = useAtomValue(isFrontAtom);
  const currentWordIndex = useAtomValue(currentWordIndexAtom);

  const currentWord = useAtomValue(currentWordAtom);

  const wordStats = useWordStats(currentWord);

  const { time, setTime, remainingTimePercentage } = useTimer();
  const { markCorrect, markIncorrect, flipCard } = useFlashcardActions(
    time,
    setTime
  );

  useEffect(() => {
    if (time <= 0) {
      flipCard();
    }
  }, [time, flipCard]);

  const progressStatus = {
    completed: currentWordIndex + 1,
    total: currentDeck.length,
  };

  return {
    isFront,
    currentWord,
    progressStatus,
    wordStats,
    flipCard,
    remainingTimePercentage,
    markCorrect,
    markIncorrect,
  };
}
