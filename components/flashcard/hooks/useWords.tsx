import { wordsAtom } from "@/data/words";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

export default function useWords(
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const router = useRouter();
  const [words, setWords] = useAtom(wordsAtom);

  const currentWord = useMemo(() => {
    return words[currentWordIndex];
  }, [currentWordIndex]);

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
