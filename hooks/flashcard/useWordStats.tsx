import { Word, WordStats } from "@/types/types";
import { useMemo } from "react";

export default function useWordStats(currentWord: Word) {
  function calcAccuracyRatio(word: Word) {
    if (!word) {
      return 0;
    }
    const learningCount = word.histories.length;
    const correctCount = word.histories.filter(
      (data) => data.result === true
    ).length;

    return Math.round((correctCount / learningCount) * 100) / 100;
  }

  function calcAverageResponseTime(word: Word) {
    if (!word) {
      return 0;
    }
    const learningCount = word.histories.length;
    const totalResponseTime = word.histories
      .map((data) => data.duration)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return Math.round((totalResponseTime / learningCount) * 100) / 100;
  }

  function calcLearningCount(word: Word) {
    if (!word) {
      return 0;
    }
    return word.histories.length;
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
