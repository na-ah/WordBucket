import { useEffect, useState } from "react";

export default function useTimer(isFront: boolean, timeLimit: number) {
  const [time, setTime] = useState(timeLimit);

  useEffect(() => {
    if (!isFront) {
      return;
    }

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(timerId);
    };
  }, [isFront]);

  const timeRemainingPercentage = (time / timeLimit) * 100;
  return {
    time,
    setTime,
    timeRemainingPercentage,
  };
}
