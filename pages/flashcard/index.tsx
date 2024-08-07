import useTimer from "../../components/flashcard/hooks/useTimer";
import useWords from "../../components/flashcard/hooks/useWords";
import Presenter from "./presenter";
import { useState } from "react";
import useWordStats from "../../components/flashcard/hooks/useWordStats";

export default function Flashcard() {
  const [isFront, setIsFront] = useState(true);
  const { currentWord, total, completed, markCorrect, markIncorrect } =
    useWords(setIsFront);
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
