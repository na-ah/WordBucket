import { ButtonProps, Colors } from "@/types/types";

export default function Button({
  className,
  text,
  bgColor = "black",
  textColor = "white",
  style,
  onClick,
  ...props
}: ButtonProps) {
  const bgColors: Colors = {
    black: "bg-black",
    zinc800: "bg-zinc-800",
  };
  const textColors: Colors = {
    white: "text-white",
  };
  return (
    <>
      <button
        className={`${textColors[textColor]} ${bgColors[bgColor]} ${className} hover:brightness-75 `}
        style={{ ...style }}
        onClick={onClick}
        {...props}
      >
        {text}
      </button>
    </>
  );
}
