import { DashboardBoxProps } from "@/types/types";
import Presenter from "./presenter";

export default function DashboardBox({
  title,
  count,
  percentage,
  color = "sky",
  ...props
}: DashboardBoxProps) {
  return (
    <>
      <Presenter
        title={title}
        count={count}
        percentage={percentage}
        color={color}
        {...props}
      />
    </>
  );
}
