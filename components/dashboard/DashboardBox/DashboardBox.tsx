import { Colors, DashboardBoxProps } from "@/types/types";

export default function DashboardBox({
  title,
  count,
  percentage,
  color = "sky",
  ...props
}: DashboardBoxProps) {
  const colors: Colors = {
    sky: "bg-sky-500/25",
    lime: "bg-lime-500/25",
    rose: "bg-rose-500/25",
  };
  return (
    <>
      <div
        className="border flex-1 aspect-square flex justify-center items-center relative"
        {...props}
      >
        <p className="absolute -top-3 bg-zinc-700 px-2 z-10">{title}</p>
        <p className="z-10">{count} cards</p>
        <div
          className={`${colors[color]} bottom-0 w-full absolute`}
          style={{ height: `${percentage}%` }}
        />
      </div>
    </>
  );
}
