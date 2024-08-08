import { useMemo, useState } from "react";
import useDeck from "./useDeck";
import useWordStats from "./useWordStats";
import useTimer from "./useTimer";

export default function useFlashcardState() {
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

  return {
    isFront,
    setIsFront,
    currentWordIndex,
    setCurrentWordIndex,
    currentDeck,
    currentWord,
    progressStatus,
    wordStats,
    timeLimit,
    time,
    setTime,
    remainingTimePercentage,
  };
}
