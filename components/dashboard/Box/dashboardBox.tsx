import { colorList } from "@/data/shared/colorList";
import { DashboardBoxProps } from "@/types/types";

export default function DashboardBox({
  title,
  count,
  percentage,
  color = "sky",
  handleBoxClick,
  boxName,
  ...props
}: DashboardBoxProps) {
  return (
    <>
      <div
        className="border flex-1 aspect-square flex justify-center items-center relative"
        onClick={(e) => handleBoxClick(e, boxName)}
        {...props}
      >
        <p className="absolute -top-3 bg-zinc-700 px-2 z-10">{title}</p>
        <p className="z-10">{count} cards</p>
        <div
          className={`bottom-0 w-full absolute`}
          style={{
            height: `${percentage}%`,
            backgroundColor: `${colorList[color]}`,
          }}
        />
      </div>
    </>
  );
}
