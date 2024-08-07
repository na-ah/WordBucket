import DashboardInformation from "../../components/dashboard/DashboardInformation/DashboardInformation";
import { DashboardProps } from "@/types/types";
import DashboardBox from "../../components/dashboard/DashboardBoxes/DashboardBox/DashboardBox";
import DashboardBoxes from "../../components/dashboard/DashboardBoxes/DashboardBoxies";
import LeftBarTitle from "@/components/uiParts/Dashboard/LeftBarTitle/LeftBarTitle";
import Button from "@/components/uiParts/Dashboard/Button/Button";
import ButtonList from "@/components/uiParts/Dashboard/ButtonList/ButtonList";
import Layout from "@/components/shared/Templates/Layout/Layout";

export default function Presenter({
  pageTitle,
  informations,
  reviewList,
  learningList,
  studyTermList,
  correctRatioList,
  requiredTimeList,
  menuVisible,
  handleBoxClick,
  handleMenuClose,
  menuPosition,
}: DashboardProps) {
  return (
    <>
      <Layout>
        <div
          className="flex flex-col w-full px-5 py-3 relative"
          onClick={() => menuVisible && handleMenuClose()}
        >
          <DashboardInformation
            informations={informations}
            pageTitle={pageTitle}
          />
          <DashboardBoxes
            listTitle={"reviewList"}
            listContent={"total: 45 card"}
          >
            <div className="flex gap-3 mt-5">
              {reviewList?.map((review, i) => (
                <DashboardBox
                  key={i}
                  title={review.title}
                  count={review.count}
                  percentage={review.percentage}
                  onClick={handleBoxClick}
                />
              ))}
            </div>
          </DashboardBoxes>
          <DashboardBoxes
            listTitle={"learning"}
            listContent={"total: 235 card"}
          >
            <div className="flex gap-3 mt-5">
              {learningList?.map((learning, i) => (
                <DashboardBox
                  key={i}
                  title={learning.title}
                  count={learning.count}
                  percentage={learning.percentage}
                  color={learning.color}
                  onClick={handleBoxClick}
                />
              ))}
            </div>
          </DashboardBoxes>
          <DashboardBoxes
            listTitle="memorizing"
            listContent="total: 235 card"
          >
            <LeftBarTitle
              title="学習期間"
              className="mt-3"
            />
            <div className="flex gap-3 mt-5">
              {studyTermList?.map((studyTerm, i) => (
                <DashboardBox
                  key={i}
                  title={studyTerm.title}
                  count={studyTerm.count}
                  percentage={studyTerm.percentage}
                  color={studyTerm.color}
                  onClick={handleBoxClick}
                />
              ))}
            </div>
            <LeftBarTitle
              title="正答率"
              className="mt-3"
              color="lime"
            />
            <div className="flex gap-3 mt-5">
              {correctRatioList?.map((correctRatio, i) => (
                <DashboardBox
                  key={i}
                  title={correctRatio.title}
                  count={correctRatio.count}
                  percentage={correctRatio.percentage}
                  color={correctRatio.color}
                  onClick={handleBoxClick}
                />
              ))}
            </div>
            <LeftBarTitle
              title="所要時間"
              className="mt-3"
              color="rose"
            />
            <div className="flex gap-3 mt-5">
              {requiredTimeList?.map((requiredTime, i) => (
                <DashboardBox
                  key={i}
                  title={requiredTime.title}
                  count={requiredTime.count}
                  percentage={requiredTime.percentage}
                  color={requiredTime.color}
                  onClick={handleBoxClick}
                />
              ))}
            </div>
          </DashboardBoxes>
          {menuVisible && (
            <ButtonList
              className="absolute z-50 bg-white p-3 rounded-md"
              style={{
                top: `${menuPosition?.top && menuPosition?.top}px`,
                left: `${menuPosition?.left && menuPosition?.left - 56}px`,
              }}
            >
              <Button
                text={"aaa"}
                textColor="white"
                bgColor="black"
                className="rounded-md px-8"
              />
              <Button
                text={"aaa"}
                textColor="white"
                bgColor="black"
                className="rounded-md px-8"
              />
            </ButtonList>
          )}
        </div>
      </Layout>
    </>
  );
}
