import useFlashcardLogic from "./useFlashcardLogic";
import useFlashcardState from "./useFlashcardState";

export default function useFlashcard() {
  const {
    isFront,
    setIsFront,
    currentWordIndex,
    setCurrentWordIndex,
    currentDeck,
    currentWord,
    progressStatus,
    wordStats,
    time,
    setTime,
    timeLimit,
    remainingTimePercentage,
  } = useFlashcardState();

  const { showResults, nextWord, flipCard, markCorrect, markIncorrect } =
    useFlashcardLogic({
      isFront,
      setIsFront,
      currentWordIndex,
      setCurrentWordIndex,
      currentDeck,
      timeLimit,
      time,
      setTime,
    });

  return {
    isFront,
    setIsFront,
    currentWordIndex,
    setCurrentWordIndex,
    currentDeck,
    currentWord,
    showResults,
    nextWord,
    progressStatus,
    wordStats,
    markCorrect,
    markIncorrect,
    flipCard,
    remainingTimePercentage,
  };
}
