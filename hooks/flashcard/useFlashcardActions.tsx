import {
  answeredDeckIdAtom,
  currentWordAtom,
  currentWordIndexAtom,
  isFrontAtom,
  timeLimitAtom,
} from "@/data/atoms/flashcardStateAtoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import {
  currentDeckAtom,
  isResultShownAtom,
} from "@/data/atoms/flashcardAtoms";
import useFlashcardUpdate from "./useFlashcardUpdate";
import useResult from "./useResult";

export default function useFlashcardActions(
  time: number,
  setTime: (arg: number) => void
) {
  const currentDeck = useAtomValue(currentDeckAtom);
  const [isFront, setIsFront] = useAtom(isFrontAtom);
  const setIsResultShown = useSetAtom(isResultShownAtom);
  const isResultShown = useAtomValue(isResultShownAtom);
  const [currentWordIndex, setCurrentWordIndex] = useAtom(currentWordIndexAtom);
  const timeLimit = useAtomValue(timeLimitAtom);
  const { updateWordHistory } = useFlashcardUpdate();
  const currentWord = useAtomValue(currentWordAtom);
  const [duration, setDuration] = useState(0);
  const setAnsweredDeckId = useSetAtom(answeredDeckIdAtom);
  const answeredDeckId = useAtomValue(answeredDeckIdAtom);
  const { getIdsData } = useResult();

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
    console.log("getIdsData直前のansweredDeckID:", answeredDeckId);
  }, [setIsResultShown, answeredDeckId]);

  useEffect(() => {
    if (isResultShown) {
      console.log("useEffectでのansweredDeckId:", answeredDeckId);
      getIdsData();
    }
  }, [answeredDeckId, isResultShown, getIdsData]);

  const nextWord = useCallback(() => {
    if (currentWordIndex === currentDeck.length - 1) {
      setIsFront(false);
      showResult();
    } else {
      setIsFront(true);
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }
  }, [
    currentWordIndex,
    currentDeck.length,
    setCurrentWordIndex,
    showResult,
    setIsFront,
  ]);

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

  const addAnsweredDeckId = useCallback(
    (word_id: number) => {
      setAnsweredDeckId((prevDeck) => [...prevDeck, word_id]);
    },
    [setAnsweredDeckId]
  );

  const markWord = useCallback(
    (isCorrect: boolean) => {
      updateCurrentWordHistory(isCorrect);
      console.log("markword_currentWord.id: ", currentWord.id);
      addAnsweredDeckId(currentWord.id);
      nextWord();
    },
    [nextWord, updateCurrentWordHistory, addAnsweredDeckId, currentWord.id]
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
