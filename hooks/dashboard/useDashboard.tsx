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
    short_duration: 0,
    medium_duration: 0,
    long_duration: 0,
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
    dashboardData?.short_duration +
    dashboardData?.medium_duration +
    dashboardData?.long_duration;

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
      boxName: "unlearned",
    },
    {
      title: "学習中",
      count: `${dashboardData?.in_progress}`,
      percentage: `${(dashboardData?.in_progress / learningTotal) * 100}`,
      color: "lime",
      boxName: "in_progress",
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
      count: `${dashboardData?.under_four}`,
      percentage: `${(dashboardData?.under_four / countTotal) * 100}`,
      color: "sky",
      boxName: "low_count",
    },
    {
      title: "5回～9回",
      count: `${dashboardData?.five_to_nine}`,
      percentage: `${(dashboardData?.five_to_nine / countTotal) * 100}`,
      color: "sky",
      boxName: "medium_count",
    },
    {
      title: "10回～",
      count: `${dashboardData?.over_ten}`,
      percentage: `${(dashboardData?.over_ten / countTotal) * 100}`,
      color: "sky",
      boxName: "high_count",
    },
  ];

  const correctRatioList = [
    {
      title: "~20%",
      count: `${dashboardData?.low_accuracy_rate}`,
      percentage: `${(dashboardData?.low_accuracy_rate / accuracyTotal) * 100}`,
      color: "lime",
      boxName: "low_accuracy_rate",
    },
    {
      title: "20%~50%",
      count: `${dashboardData?.medium_accuracy_rate}`,
      percentage: `${
        (dashboardData?.medium_accuracy_rate / accuracyTotal) * 100
      }`,
      color: "lime",
      boxName: "medium_accuracy_rate",
    },
    {
      title: "50%~",
      count: `${dashboardData?.high_accuracy_rate}`,
      percentage: `${
        (dashboardData?.high_accuracy_rate / accuracyTotal) * 100
      }`,
      color: "lime",
      boxName: "high_accuracy_rate",
    },
  ];

  const requiredTimeList = [
    {
      title: "~2秒",
      count: `${dashboardData?.short_duration}`,
      percentage: `${(dashboardData?.short_duration / durationTotal) * 100}`,
      color: "rose",
      boxName: "short_duration",
    },
    {
      title: "2秒~5秒",
      count: `${dashboardData?.medium_duration}`,
      percentage: `${(dashboardData?.medium_duration / durationTotal) * 100}`,
      color: "rose",
      boxName: "medium_duration",
    },
    {
      title: "5秒~",
      count: `${dashboardData?.long_duration}`,
      percentage: `${(dashboardData?.long_duration / durationTotal) * 100}`,
      color: "rose",
      boxName: "long_duration",
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
