import { fetchDashboard } from "@/data/atoms/flashcardAtoms";
import { Dashboard } from "@/types/types";
import { useEffect, useState } from "react";

export default function useDashboard() {
  const [dashboardData, setDashboardData] = useState<Dashboard>({
    new_cards: 0,
    today_learning_cards: 0,
    unlearned: 0,
    in_progress: 0,
    completed: 0,
    under_four: 0,
    five_to_nine: 0,
    over_ten: 0,
    low_accuracy_rate: 0,
    medium_accuracy_rate: 0,
    high_accuracy_rate: 0,
    shortDuration: 0,
    mediumDuration: 0,
    longDuration: 0,
  });

  useEffect(() => {
    fetchDashboard().then((data) => {
      if (data) {
        setDashboardData(data);
      }
    });
  }, []);

  const learningTotal =
    dashboardData?.unlearned +
    dashboardData?.in_progress +
    dashboardData?.completed;

  const countTotal =
    dashboardData?.under_four +
    dashboardData?.five_to_nine +
    dashboardData?.over_ten;

  const accuracyTotal =
    dashboardData?.low_accuracy_rate +
    dashboardData?.medium_accuracy_rate +
    dashboardData?.high_accuracy_rate;

  const durationTotal =
    dashboardData?.shortDuration +
    dashboardData?.mediumDuration +
    dashboardData?.longDuration;

  const informations = [
    { title: "本日の新規カード", text: `${dashboardData?.new_cards}card` },
    {
      title: "本日の学習件数",
      text: `${dashboardData?.today_learning_cards}cards`,
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
    },
    {
      title: "学習中",
      count: `${dashboardData?.in_progress}`,
      percentage: `${(dashboardData?.in_progress / learningTotal) * 100}`,
      color: "lime",
    },
    {
      title: "学習済",
      count: `${dashboardData?.completed}`,
      percentage: `${(dashboardData?.completed / learningTotal) * 100}`,
      color: "lime",
    },
  ];

  const studyCountList = [
    {
      title: "～4回",
      count: `${dashboardData?.under_four}`,
      percentage: `${(dashboardData?.under_four / countTotal) * 100}`,
      color: "sky",
    },
    {
      title: "5回～9回",
      count: `${dashboardData?.five_to_nine}`,
      percentage: `${(dashboardData?.five_to_nine / countTotal) * 100}`,
      color: "sky",
    },
    {
      title: "10回～",
      count: `${dashboardData?.over_ten}`,
      percentage: `${(dashboardData?.over_ten / countTotal) * 100}`,
      color: "sky",
    },
  ];

  const correctRatioList = [
    {
      title: "~20%",
      count: `${dashboardData?.low_accuracy_rate}`,
      percentage: `${(dashboardData?.low_accuracy_rate / accuracyTotal) * 100}`,
      color: "lime",
    },
    {
      title: "20%~50%",
      count: `${dashboardData?.medium_accuracy_rate}`,
      percentage: `${
        (dashboardData?.medium_accuracy_rate / accuracyTotal) * 100
      }`,
      color: "lime",
    },
    {
      title: "50%~",
      count: `${dashboardData?.high_accuracy_rate}`,
      percentage: `${
        (dashboardData?.high_accuracy_rate / accuracyTotal) * 100
      }`,
      color: "lime",
    },
  ];

  const requiredTimeList = [
    {
      title: "~2秒",
      count: `${dashboardData?.shortDuration}`,
      percentage: `${(dashboardData?.shortDuration / durationTotal) * 100}`,
      color: "rose",
    },
    {
      title: "2秒~5秒",
      count: `${dashboardData?.mediumDuration}`,
      percentage: `${(dashboardData?.mediumDuration / durationTotal) * 100}`,
      color: "rose",
    },
    {
      title: "5秒~",
      count: `${dashboardData?.longDuration}`,
      percentage: `${(dashboardData?.longDuration / durationTotal) * 100}`,
      color: "rose",
    },
  ];

  return {
    informations,
    reviewList,
    learningList,
    studyCountList,
    correctRatioList,
    requiredTimeList,
  };
}
