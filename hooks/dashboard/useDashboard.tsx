import {
  fetchDashboard,
  isResultShownAtom,
  isReviewIncorrectListModeAtom,
  queryAtom,
} from "@/data/atoms/flashcardAtoms";
import {
  answeredDeckIdAtom,
  currentWordIndexAtom,
  isFrontAtom,
} from "@/data/atoms/flashcardStateAtoms";
import { queryByBoxName } from "@/data/dashboard/query";
import { Dashboard } from "@/types/types";
import { useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useDashboard() {
  const [dashboardData, setDashboardData] = useState<Dashboard>({
    newCards: 0,
    todayLearningCards: 0,
    unlearned: 0,
    inProgress: 0,
    completed: 0,
    lowCount: 0,
    mediumCount: 0,
    highCount: 0,
    lowAccuracyRate: 0,
    mediumAccuracyRate: 0,
    highAccuracyRate: 0,
    shortDuration: 0,
    mediumDuration: 0,
    longDuration: 0,
  });

  const router = useRouter();
  const setIsResultShown = useSetAtom(isResultShownAtom);
  const setQuery = useSetAtom(queryAtom);
  const setCurrentWordIndex = useSetAtom(currentWordIndexAtom);
  const setIsFront = useSetAtom(isFrontAtom);
  const setAnsweredDeckId = useSetAtom(answeredDeckIdAtom);
  const setIsReviewIncorrectListMode = useSetAtom(
    isReviewIncorrectListModeAtom
  );

  function handleBoxClick(boxName: string) {
    console.log(boxName);
    setQuery(queryByBoxName[boxName]);
    setCurrentWordIndex(0);
    setIsFront(true);
    setAnsweredDeckId([]);

    // 復習モードのフラグをオフ
    setIsReviewIncorrectListMode(false);

    console.log("queryByBoxName[boxName]: ", queryByBoxName[boxName]);

    setIsResultShown(false);
    router.push("/flashcard");
  }

  useEffect(() => {
    fetchDashboard().then((data) => {
      if (data) {
        setDashboardData(data);
      }
    });
  }, []);

  const learningTotal =
    dashboardData?.unlearned +
    dashboardData?.inProgress +
    dashboardData?.completed;

  const countTotal =
    dashboardData?.lowCount +
    dashboardData?.mediumCount +
    dashboardData?.highCount;

  const accuracyTotal =
    dashboardData?.lowAccuracyRate +
    dashboardData?.mediumAccuracyRate +
    dashboardData?.highAccuracyRate;

  const durationTotal =
    dashboardData?.shortDuration +
    dashboardData?.mediumDuration +
    dashboardData?.longDuration;

  const informations = [
    { title: "本日の新規カード", text: `${dashboardData?.newCards}card` },
    {
      title: "本日の学習件数",
      text: `${dashboardData?.todayLearningCards}cards`,
      color: "lime",
    },
  ];

  const reviewList = [
    {
      title: "未学習",
      count: "?",
      percentage: "25",
    },
    {
      title: "学習中",
      count: "?",
      percentage: "48",
    },
    {
      title: "学習済",
      count: "?",
      percentage: "8",
    },
  ];

  const learningList = [
    {
      title: "未学習",
      count: `${dashboardData?.unlearned}`,
      percentage: `${(dashboardData?.unlearned / learningTotal) * 100}`,
      color: "lime",
      boxName: "unlearned",
    },
    {
      title: "学習中",
      count: `${dashboardData?.inProgress}`,
      percentage: `${(dashboardData?.inProgress / learningTotal) * 100}`,
      color: "lime",
      boxName: "inProgress",
    },
    {
      title: "学習済",
      count: `${dashboardData?.completed}`,
      percentage: `${(dashboardData?.completed / learningTotal) * 100}`,
      color: "lime",
      boxName: "completed",
    },
  ];

  const studyCountList = [
    {
      title: "～4回",
      count: `${dashboardData?.lowCount}`,
      percentage: `${(dashboardData?.lowCount / countTotal) * 100}`,
      color: "sky",
      boxName: "lowCount",
    },
    {
      title: "5回～9回",
      count: `${dashboardData?.mediumCount}`,
      percentage: `${(dashboardData?.mediumCount / countTotal) * 100}`,
      color: "sky",
      boxName: "mediumCount",
    },
    {
      title: "10回～",
      count: `${dashboardData?.highCount}`,
      percentage: `${(dashboardData?.highCount / countTotal) * 100}`,
      color: "sky",
      boxName: "highCount",
    },
  ];

  const correctRatioList = [
    {
      title: "~20%",
      count: `${dashboardData?.lowAccuracyRate}`,
      percentage: `${(dashboardData?.lowAccuracyRate / accuracyTotal) * 100}`,
      color: "lime",
      boxName: "lowAccuracyRate",
    },
    {
      title: "20%~50%",
      count: `${dashboardData?.mediumAccuracyRate}`,
      percentage: `${
        (dashboardData?.mediumAccuracyRate / accuracyTotal) * 100
      }`,
      color: "lime",
      boxName: "mediumAccuracyRate",
    },
    {
      title: "50%~",
      count: `${dashboardData?.highAccuracyRate}`,
      percentage: `${(dashboardData?.highAccuracyRate / accuracyTotal) * 100}`,
      color: "lime",
      boxName: "highAccuracyRate",
    },
  ];

  const requiredTimeList = [
    {
      title: "~2秒",
      count: `${dashboardData?.shortDuration}`,
      percentage: `${(dashboardData?.shortDuration / durationTotal) * 100}`,
      color: "rose",
      boxName: "shortDuration",
    },
    {
      title: "2秒~5秒",
      count: `${dashboardData?.mediumDuration}`,
      percentage: `${(dashboardData?.mediumDuration / durationTotal) * 100}`,
      color: "rose",
      boxName: "mediumDuration",
    },
    {
      title: "5秒~",
      count: `${dashboardData?.longDuration}`,
      percentage: `${(dashboardData?.longDuration / durationTotal) * 100}`,
      color: "rose",
      boxName: "longDuration",
    },
  ];

  return {
    informations,
    reviewList,
    learningList,
    studyCountList,
    correctRatioList,
    requiredTimeList,
    handleBoxClick,
  };
}
