import { Colors, LeftBarTitleProps } from "@/types/types";

export default function LeftBarTitle({
  title,
  color = "sky",
  className,
  ...props
}: LeftBarTitleProps) {
  const colors: Colors = {
    sky: "border-sky-400",
    lime: "border-lime-400",
    rose: "border-rose-400",
  };

  return (
    <>
      <div
        className={`border-l-4 ${colors[color]} ps-2 ${className}`}
        {...props}
      >
        {title}
      </div>
    </>
  );
}
