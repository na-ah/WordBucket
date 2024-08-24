import PageTitle from "@/components/shared/PageTitle";
import DashboardInformation from "./dashboardInformation";
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
