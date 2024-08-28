import { isResultShownAtom } from "@/data/atoms/flashcardAtoms";
import { UseFlashcardLogicProps } from "@/types/types";
import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";

export default function useFlashcardLogic({
  isFront,
  setIsFront,
  currentWordIndex,
  setCurrentWordIndex,
  currentDeck,
  timeLimit,
  time,
  setTime,
}: UseFlashcardLogicProps) {
  const [isResultShown, setIsResultShown] = useAtom(isResultShownAtom);

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
    showResult,
    nextWord,
    flipCard,
    markCorrect,
    markIncorrect,
  };
}
