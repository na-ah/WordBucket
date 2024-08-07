import { Word } from "@/types/types";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

export default function useWords(
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>,
  words: Word[]
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const router = useRouter();

  const currentWord = useMemo(() => {
    return words[currentWordIndex];
  }, [currentWordIndex, words]);

  function nextWord() {
    if (currentWordIndex === words.length - 1) {
      showResults();
      return;
    }

    setCurrentWordIndex((prevIndex) =>
      prevIndex === words.length - 1 ? prevIndex : prevIndex + 1
    );
  }

  function showResults() {
    router.push({
      pathname: "/flashcard/results",
    });
  }

  const total = words.length;
  const completed = currentWordIndex + 1;

  function markCorrect() {
    nextWord();
    setIsFront(true);
  }

  function markIncorrect() {
    nextWord();
    setIsFront(true);
  }

  return {
    currentWordIndex,
    setCurrentWordIndex,
    words,
    currentWord,
    nextWord,
    total,
    completed,
    markCorrect,
    markIncorrect,
  };
}
