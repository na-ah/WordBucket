import { isLoadingAtom } from "@/data/atoms/flashcardAtoms";
import { isFrontAtom, timeLimitAtom } from "@/data/atoms/flashcardStateAtoms";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";

export default function useTimer() {
  const isFront = useAtomValue(isFrontAtom);
  const timeLimit = useAtomValue(timeLimitAtom);
  const [isLoading] = useAtom(isLoadingAtom);

  const [time, setTime] = useState(timeLimit);

  useEffect(() => {
    if (!isFront) {
      return;
    }

    if (isLoading) {
      return;
    }

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(timerId);
    };
  }, [isFront, isLoading]);

  const remainingTimePercentage = (time / timeLimit) * 100;

  return {
    time,
    setTime,
    remainingTimePercentage,
  };
}
