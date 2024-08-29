import {
  currentWordAtom,
  currentWordIndexAtom,
  isFrontAtom,
  timeLimitAtom,
} from "@/data/atoms/flashcardStateAtoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import {
  currentDeckAtom,
  isResultShownAtom,
} from "@/data/atoms/flashcardAtoms";
import useFlashcardUpdate from "./useFlashcardUpdate";

export default function useFlashcardActions(
  time: number,
  setTime: (arg: number) => void
) {
  const currentDeck = useAtomValue(currentDeckAtom);
  const [isFront, setIsFront] = useAtom(isFrontAtom);
  const setIsResultShown = useSetAtom(isResultShownAtom);
  const [currentWordIndex, setCurrentWordIndex] = useAtom(currentWordIndexAtom);
  const timeLimit = useAtomValue(timeLimitAtom);
  const { updateWordHistory } = useFlashcardUpdate();
  const currentWord = useAtomValue(currentWordAtom);
  const [duration, setDuration] = useState(0);

  // 非公開関数
  const calculateDuration = (
    totalTime: number,
    remainingTime: number,
    unit = 1000
  ) => {
    return (totalTime - remainingTime) / unit;
  };
  const showResult = useCallback(() => {
    setIsResultShown(true);
  }, [setIsResultShown]);

  const nextWord = useCallback(() => {
    if (currentWordIndex === currentDeck.length - 1) {
      showResult();
    } else {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentWordIndex, currentDeck.length, setCurrentWordIndex, showResult]);

  const updateCurrentWordHistory = useCallback(
    (result: boolean) => {
      updateWordHistory({
        word_id: currentWord.id,
        duration: duration,
        result: result,
        datetime: new Date().toTimeString(),
      });
    },
    [currentWord.id, duration, updateWordHistory]
  );

  const markWord = useCallback(
    (isCorrect: boolean) => {
      updateCurrentWordHistory(isCorrect);
      nextWord();
      setIsFront(true);
    },
    [nextWord, updateCurrentWordHistory, setIsFront]
  );

  // 公開関数
  const flipCard = useCallback(() => {
    setIsFront(!isFront);
    setDuration(calculateDuration(timeLimit, time, 1000));
    setTime(timeLimit);
  }, [isFront, setIsFront, setTime, timeLimit, time]);

  const markCorrect = () => markWord(true);
  const markIncorrect = () => markWord(false);

  return {
    markCorrect,
    markIncorrect,
    flipCard,
  };
}
