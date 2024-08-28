import Link from "next/link";

export default function SideBarButton({
  text,
  link,
  color = "blue",
  handleClick,
}: {
  text: string;
  link: string;
  color?: string;
  handleClick?: () => void;
}) {
  const colors: { [key: string]: string } = {
    blue: "hover:bg-sky-600",
    lime: "hover:bg-lime-600",
    rose: "hover:bg-rose-600",
  };
  return (
    <>
      <Link
        href={link}
        className={`bg-zinc-700 rounded-full flex justify-center items-center aspect-square w-3/4 transition-all duration-50  hover:cursor-pointer ${colors[color]}`}
        onClick={handleClick}
      >
        <li>{text}</li>
      </Link>
    </>
  );
}
