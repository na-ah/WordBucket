import { DashboardBoxListProps } from "@/types/types";
import DashboardBox from "../DashboardBoxWrapper/DashboardBox/DashboardBox";

export default function DashboardBoxList({
  boxPropsList,
  handleBoxClick,
}: DashboardBoxListProps) {
  return (
    <>
      <div className="flex gap-3 mt-5">
        {boxPropsList?.map((item, i) => (
          <DashboardBox
            key={i}
            title={item.title}
            count={item.count}
            percentage={item.percentage}
            color={item.color}
            onClick={handleBoxClick}
          />
        ))}
      </div>
    </>
  );
}
