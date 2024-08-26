import { isLoadingAtom } from "@/data/atoms/flashcardAtoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export default function useTimer(isFront: boolean, timeLimit: number) {
  const [time, setTime] = useState(timeLimit);
  const [isLoading] = useAtom(isLoadingAtom);

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
