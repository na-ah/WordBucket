import useTimer from "../../components/flashcard/hooks/useTimer";
import useWords from "../../components/flashcard/hooks/useWords";
import Presenter from "./presenter";
import { useMemo, useState } from "react";
import useWordStats from "../../components/flashcard/hooks/useWordStats";
import { wordsPoolAtom } from "@/data/shared/words";
import { Word } from "@/types/types";
import { useAtom } from "jotai";
import {
  batchSizeAtom,
  currentDeckAtom,
  currentDeckIndexAtom,
} from "@/data/flashcard/flashcardAtoms";

export default function Flashcard() {
  const [wordsPool, setWordsPool] = useAtom<Word[]>(wordsPoolAtom);
  const [batchSize, setBatchSize] = useAtom(batchSizeAtom);
  const [currentDeckIndex, setCurrentDeckIndex] = useAtom(currentDeckIndexAtom);
  const [currentDeck, setCurrentDeck] = useAtom(currentDeckAtom);

  const [isFront, setIsFront] = useState(true);
  const { currentWord, total, completed, markCorrect, markIncorrect } =
    useWords(setIsFront, currentDeck);

  const timeLimit = 5 * 1000;
  const { time, setTime, timeRemainingPercentage } = useTimer(
    isFront,
    timeLimit
  );

  const wordStats = useWordStats(currentWord);

  function flipCard() {
    setIsFront(!isFront);
    setTime(timeLimit);
  }

  if (time <= 0) {
    flipCard();
  }

  return (
    <>
      <Presenter
        pageTitle={"Flashcard"}
        flipCard={flipCard}
        isFront={isFront}
        word={currentWord}
        progressStatus={{
          completed: completed,
          total: total,
        }}
        remainingTimePercentage={timeRemainingPercentage}
        markIncorrect={markIncorrect}
        markCorrect={markCorrect}
        wordStats={wordStats}
      />
    </>
  );
}
