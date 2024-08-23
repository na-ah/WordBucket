import DashboardInformation from "../../components/dashboard/DashboardInformation/DashboardInformation";
import DashboardBoxWrapper from "../../components/dashboard/DashboardBoxWrapper/DashboardBoxWrapper";
import LeftBarTitle from "@/components/shared/uiParts/Dashboard/LeftBarTitle/LeftBarTitle";
import useMenu from "@/components/dashboard/hooks/useMenu";
import useDashboard from "@/components/dashboard/hooks/useDashboard";
import DashboardMenu from "@/components/dashboard/DashboardMenu/dashboardMenu";
import DashboardBoxList from "@/components/dashboard/DashboardBoxList/dashboardBoxList";
import Layout from "@/components/shared/Template/Layout/Layout";

export default function Dashboard() {
  const { menuPosition, menuVisible, handleBoxClick, handleMenuClose } =
    useMenu();

  const {
    informations,
    reviewList,
    learningList,
    studyTermList,
    correctRatioList,
    requiredTimeList,
  } = useDashboard();

  return (
    <>
      <Layout>
        <div
          className="flex flex-col w-full px-5 py-3 relative"
          onClick={() => menuVisible && handleMenuClose()}
        >
          {menuVisible && <DashboardMenu menuPosition={menuPosition} />}
          <DashboardInformation
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
            listContent={"total: 235 card"}
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
              title="学習期間"
              className="mt-3"
            />
            <DashboardBoxList
              boxPropsList={studyTermList}
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
      </Layout>
    </>
  );
}
