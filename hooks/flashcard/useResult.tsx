import {
  batchSizeAtom,
  correctListAtom,
  currentDeckIndexAtom,
  incorrectListAtom,
  isResultShownAtom,
  isReviewIncorrectListModeAtom,
  wordsPoolAtom,
} from "@/data/atoms/flashcardAtoms";
import {
  answeredDeckDataAtom,
  answeredDeckIdAtom,
  currentWordIndexAtom,
  isFrontAtom,
} from "@/data/atoms/flashcardStateAtoms";
import axios from "axios";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect, useMemo } from "react";

export default function useResult() {
  const setCurrentDeckIndex = useSetAtom(currentDeckIndexAtom);
  const setIsResultShown = useSetAtom(isResultShownAtom);

  const wordsPool = useAtomValue(wordsPoolAtom);
  const batchSize = useAtomValue(batchSizeAtom);

  const setCurrentWordIndex = useSetAtom(currentWordIndexAtom);
  const [answeredDeckId, setAnsweredDeckId] = useAtom(answeredDeckIdAtom);
  const [answeredDeckData, setAnsweredDeckData] = useAtom(answeredDeckDataAtom);
  const setIsFront = useSetAtom(isFrontAtom);
  const [correctList, setCorrectList] = useAtom(correctListAtom);
  const [incorrectList, setInCorrectList] = useAtom(incorrectListAtom);

  const setIsReviewIncorrectListMode = useSetAtom(
    isReviewIncorrectListModeAtom
  );

  const getIdsData = useCallback(() => {
    console.log("answeredDeckId:", answeredDeckId);
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_LOCAL_HOST
        }/words/ids?ids=${answeredDeckId.join(",")}`
      )
      .then((response) => {
        console.log("getidsdata, data.words:", response.data.words);
        setAnsweredDeckData(response.data.words);
      })
      .catch((error) => {
        console.log("get ids error");
      });
  }, [answeredDeckId, setAnsweredDeckData]);

  const lastRap =
    (wordsPool.length % batchSize === 0
      ? wordsPool.length / batchSize
      : Math.floor(wordsPool.length / batchSize) + 1) - 1;

  const sortedDeck = useMemo(() => {
    if (!answeredDeckData) return [];

    return answeredDeckData.map((word) => ({
      ...word,
      histories: word.histories.sort((a, b) =>
        a.datetime > b.datetime ? 1 : -1
      ),
    }));
  }, [answeredDeckData]);

  useEffect(() => {
    setCorrectList(
      sortedDeck.filter((word) => word.histories.at(-1)?.result === true)
    );

    setInCorrectList(
      sortedDeck.filter((word) => word.histories.at(-1)?.result === false)
    );
  }, [sortedDeck, setCorrectList, setInCorrectList]);

  // const correctList = useMemo(() => {
  //   return sortedDeck.filter((word) => word.histories.at(-1)?.result === true);
  // }, [sortedDeck]);

  // const incorrectList = useMemo(() => {
  //   return sortedDeck.filter((word) => word.histories.at(-1)?.result === false);
  // }, [sortedDeck]);

  const totalAverageResponseTime =
    Math.round(
      (correctList
        .map((word) => word.histories.at(-1)?.duration ?? 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
        correctList.length) *
        100
    ) / 100;

  const totalAccuracyRate =
    Math.round(
      (correctList.length / (correctList.length + incorrectList.length)) * 100
    ) / 100;

  const nextDeck = () => {
    setCurrentDeckIndex((prevIndex) => prevIndex + 1);
    setCurrentWordIndex(0);
    setIsFront(true);
    setIsResultShown(false);
    setAnsweredDeckId([]);
  };

  const reviewIncorrectList = () => {
    setIsReviewIncorrectListMode(true);
    setCurrentWordIndex(0);
    setIsFront(true);
    setIsResultShown(false);
    setAnsweredDeckId([]);
  };

  return {
    nextDeck,
    correctList,
    incorrectList,
    totalAverageResponseTime,
    totalAccuracyRate,
    lastRap,
    answeredDeckId,
    getIdsData,
    reviewIncorrectList,
  };
}
