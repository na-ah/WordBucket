import LeftBarTitle from "@/components/shared/LeftBarTitle/LeftBarTitle";
import { DashboardInformationProps } from "@/types/types";

export default function DashboardInformation({
  informations,
}: DashboardInformationProps) {
  return (
    <>
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
    </>
  );
}
