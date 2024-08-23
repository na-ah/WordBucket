import { DashboardInformationProps, DashboardProps } from "@/types/types";
import LeftBarTitle from "@/components/shared/uiParts/Dashboard/LeftBarTitle/LeftBarTitle";
import PageTitle from "@/components/shared/uiParts/Dashboard/PageTitle/PageTitle";

export default function DashboardInformation({
  pageTitle,
  informations,
}: DashboardInformationProps) {
  return (
    <>
      <div>
        <PageTitle title={pageTitle} />
        {informations.map((information, i) => (
          <div
            key={i}
            className="mt-3 flex justify-between"
          >
            <LeftBarTitle
              title={information.title}
              color={information.color}
            />
            <span>{information.text}</span>
          </div>
        ))}
      </div>
    </>
  );
}
