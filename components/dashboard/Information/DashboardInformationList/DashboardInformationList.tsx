import PageTitle from "@/components/shared/PageTitle/PageTitle";
import DashboardInformation from "../DashboardInformation/dashboardInformation";
import { DashboardInformationListProps } from "@/types/types";

export default function DashboardInformationList({
  pageTitle,
  informations,
}: DashboardInformationListProps) {
  return (
    <>
      <div>
        <PageTitle title={pageTitle} />
        <DashboardInformation informations={informations} />
      </div>
    </>
  );
}
