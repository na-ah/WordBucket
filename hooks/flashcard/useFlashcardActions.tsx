import {
  currentWordIndexAtom,
  isFrontAtom,
  timeLimitAtom,
} from "@/data/atoms/flashcardStateAtoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback } from "react";
import {
  currentDeckAtom,
  isResultShownAtom,
} from "@/data/atoms/flashcardAtoms";

export default function useFlashcardActions(setTime: (arg: number) => void) {
  const currentDeck = useAtomValue(currentDeckAtom);
  const [isFront, setIsFront] = useAtom(isFrontAtom);
  const setIsResultShown = useSetAtom(isResultShownAtom);
  const [currentWordIndex, setCurrentWordIndex] = useAtom(currentWordIndexAtom);
  const timeLimit = useAtomValue(timeLimitAtom);

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
  }, [currentWordIndex, currentDeck.length, setCurrentWordIndex, showResult]);

  const markCorrect = useCallback(() => {
    nextWord();
    setIsFront(true);
  }, [nextWord, setIsFront]);

  const markIncorrect = useCallback(() => {
    nextWord();
    setIsFront(true);
  }, [nextWord, setIsFront]);

  return {
    markCorrect,
    markIncorrect,
    flipCard,
  };
}
