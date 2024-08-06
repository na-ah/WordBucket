import { MouseEvent, useRef, useState } from "react";
import Presenter from "./presenter";
import { MenuPosition } from "@/types/types";

export default function Dashboard() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({
    top: 0,
    left: 0,
  });

  function handleBoxClick(e: MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    console.log(`
      clientX: ${e.clientX}
      clientY: ${e.clientY}
      `);
    setMenuPosition({ top: clientY, left: clientX });
    setMenuVisible(true);
  }

  function handleMenuClose() {
    setMenuVisible(false);
  }
  return (
    <>
      <Presenter
        pageTitle="DashBoard"
        informations={[
          { title: "本日の新規カード", text: "23card" },
          { title: "本日の学習件数", text: "112cards", color: "lime" },
        ]}
        reviewList={[
          {
            title: "未学習",
            count: 3,
            percentage: 25,
          },
          {
            title: "学習中",
            count: 16,
            percentage: 48,
          },
          {
            title: "学習済",
            count: 6,
            percentage: 8,
          },
        ]}
        learningList={[
          {
            title: "未学習",
            count: 25,
            percentage: 50,
            color: "lime",
          },
          {
            title: "学習中",
            count: 7,
            percentage: 3,
            color: "lime",
          },
          {
            title: "学習済",
            count: 13,
            percentage: 20,
            color: "lime",
          },
        ]}
        studyTermList={[
          {
            title: "~1週間",
            count: 35,
            percentage: 20,
            color: "sky",
          },
          {
            title: "1週間~1ヶ月",
            count: 32,
            percentage: 38,
            color: "sky",
          },
          {
            title: "50%~",
            count: 106,
            percentage: 58,
            color: "sky",
          },
        ]}
        correctRatioList={[
          {
            title: "~20%",
            count: 56,
            percentage: 20,
            color: "lime",
          },
          {
            title: "20%~50%",
            count: 73,
            percentage: 38,
            color: "lime",
          },
          {
            title: "50%~",
            count: 106,
            percentage: 58,
            color: "lime",
          },
        ]}
        requiredTimeList={[
          {
            title: "~2秒",
            count: 82,
            percentage: 40,
            color: "rose",
          },
          {
            title: "2秒~5秒",
            count: 73,
            percentage: 38,
            color: "rose",
          },
          {
            title: "5秒~",
            count: 106,
            percentage: 58,
            color: "rose",
          },
        ]}
        menuVisible={menuVisible}
        handleBoxClick={handleBoxClick}
        handleMenuClose={handleMenuClose}
        menuPosition={menuPosition}
      />
    </>
  );
}
