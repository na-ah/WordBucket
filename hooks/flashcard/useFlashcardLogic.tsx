import { UseFlashcardLogicProps } from "@/types/types";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const flipCard = useCallback(() => {
    setIsFront(!isFront);
    setTime(timeLimit);
  }, [isFront, setIsFront, setTime, timeLimit]);

  const showResults = useCallback(() => {
    router.push({
      pathname: "/flashcard/results",
    });
  }, [router]);

  const nextWord = useCallback(() => {
    if (currentWordIndex === currentDeck.length - 1) {
      showResults();
    } else {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentWordIndex, setCurrentWordIndex, currentDeck.length, showResults]);

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
    showResults,
    nextWord,
    flipCard,
    markCorrect,
    markIncorrect,
  };
}
