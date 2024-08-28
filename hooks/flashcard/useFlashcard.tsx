import { useCallback, useEffect, useMemo, useState } from "react";
import useDeck from "./useDeck";
import useWordStats from "./useWordStats";
import useTimer from "./useTimer";
import { isResultShownAtom } from "@/data/atoms/flashcardAtoms";
import { useSetAtom } from "jotai";

export default function useFlashcard() {
  const { currentDeck } = useDeck();
  const [isFront, setIsFront] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const currentWord = useMemo(() => {
    return currentDeck[currentWordIndex];
  }, [currentWordIndex, currentDeck]);

  const progressStatus = {
    completed: currentWordIndex + 1,
    total: currentDeck.length,
  };

  const wordStats = useWordStats(currentWord);

  const timeLimit = 5 * 1000;
  const { time, setTime, remainingTimePercentage } = useTimer(
    isFront,
    timeLimit
  );
  const setIsResultShown = useSetAtom(isResultShownAtom);

  const flipCard = useCallback(() => {
    setIsFront(!isFront);
    setTime(timeLimit);
  }, [isFront, setIsFront, setTime, timeLimit]);

  const showResult = useCallback(() => {
    setIsResultShown(true);
  }, [setIsResultShown]);

  const nextWord = useCallback(() => {
    if (currentWordIndex === currentDeck.length - 1) {
      showResult();
    } else {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentWordIndex, setCurrentWordIndex, currentDeck.length, showResult]);

  const markCorrect = useCallback(() => {
    nextWord();
    if (currentWordIndex !== currentDeck.length - 1) {
      setIsFront(true);
    }
  }, [nextWord, setIsFront, currentDeck.length, currentWordIndex]);

  const markIncorrect = useCallback(() => {
    nextWord();
    if (currentWordIndex !== currentDeck.length - 1) {
      setIsFront(true);
    }
  }, [nextWord, setIsFront, currentDeck.length, currentWordIndex]);

  useEffect(() => {
    if (time <= 0) {
      flipCard();
    }
  }, [time, flipCard]);

  return {
    isFront,
    currentWord,
    progressStatus,
    wordStats,
    markCorrect,
    markIncorrect,
    flipCard,
    remainingTimePercentage,
  };
}
