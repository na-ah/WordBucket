import useDashboard from "@/hooks/dashboard/useDashboard";
import DashboardInformationList from "../Information/dashboardInformationList";
import DashboardBoxWrapper from "../Box/dashboardBoxWrapper";
import DashboardBoxList from "../Box/dashboardBoxList";
import LeftBarTitle from "@/components/shared/LeftBarTitle";
import PageTitle from "@/components/shared/PageTitle";

export default function InnerDashboard() {
  const {
    informations,
    reviewList,
    learningList,
    studyCountList,
    correctRatioList,
    requiredTimeList,
    handleBoxClick,
  } = useDashboard();

  return (
    <>
      <div className="flex flex-col w-full px-5 py-3 relative h-dvh">
        <PageTitle title={"dashboard"} />
        <div className="overflow-y-auto w-full">
          <DashboardInformationList
            informations={informations}
            pageTitle={"pageTitle"}
          />
          <DashboardBoxWrapper
            listTitle={"reviewList"}
            listContent={"total: 45 card"}
          >
            <DashboardBoxList
              boxPropsList={reviewList}
              handleBoxClick={handleBoxClick}
            />
          </DashboardBoxWrapper>
          <DashboardBoxWrapper
            listTitle={"learning"}
            listContent={`total: ${2} card`}
          >
            <DashboardBoxList
              boxPropsList={learningList}
              handleBoxClick={handleBoxClick}
            />
          </DashboardBoxWrapper>
          <DashboardBoxWrapper
            listTitle="memorizing"
            listContent="total: 235 card"
          >
            <LeftBarTitle
              title="学習回数"
              className="mt-3"
            />
            <DashboardBoxList
              boxPropsList={studyCountList}
              handleBoxClick={handleBoxClick}
            />
            <LeftBarTitle
              title="正答率"
              className="mt-3"
              color="lime"
            />
            <DashboardBoxList
              boxPropsList={correctRatioList}
              handleBoxClick={handleBoxClick}
            />
            <LeftBarTitle
              title="所要時間"
              className="mt-3"
              color="rose"
            />
            <DashboardBoxList
              boxPropsList={requiredTimeList}
              handleBoxClick={handleBoxClick}
            />
          </DashboardBoxWrapper>
        </div>
      </div>
    </>
  );
}
