import { isFrontAtom, timeLimitAtom } from "@/data/atoms/flashcardStateAtoms";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";

export default function useTimer() {
  const isFront = useAtomValue(isFrontAtom);
  const timeLimit = useAtomValue(timeLimitAtom);

  const [time, setTime] = useState(timeLimit);

  // useEffect(() => {
  //   if (!isFront) {
  //     return;
  //   }

  //   const timerId = setInterval(() => {
  //     setTime((prevTime) => prevTime - 10);
  //   }, 10);

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [isFront]);

  useEffect(() => {
    if (!isFront) {
      return;
    }
    console.log("timer start");

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(timerId);
      console.log("clear timer");
    };
  }, [isFront]);

  const remainingTimePercentage = (time / timeLimit) * 100;

  return {
    time,
    setTime,
    remainingTimePercentage,
  };
}
