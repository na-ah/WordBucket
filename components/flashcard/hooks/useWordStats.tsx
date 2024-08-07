import { Word, WordStats } from "@/types/types";
import { useMemo } from "react";

export default function useWordStats(currentWord: Word) {
  function calcAccuracyRatio(word: Word) {
    const learningCount = word.history.length;
    const correctCount = word.history.filter(
      (data) => data.result === "correct"
    ).length;

    return Math.round((correctCount / learningCount) * 100) / 100;
  }

  function calcAverageResponseTime(word: Word) {
    const learningCount = word.history.length;
    const totalResponseTime = word.history
      .map((data) => data.time)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return Math.round((totalResponseTime / learningCount) * 100) / 100;
  }

  function calcLearningCount(word: Word) {
    return word.history.length;
  }

  const wordStats: WordStats = useMemo(() => {
    return {
      accuracyRate: calcAccuracyRatio(currentWord),
      averageResponseTime: calcAverageResponseTime(currentWord),
      learningCount: calcLearningCount(currentWord),
    };
  }, [currentWord]);
  return wordStats;
}
