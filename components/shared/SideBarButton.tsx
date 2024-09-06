import Link from "next/link";
import { useRouter } from "next/router";

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
    blue: "#0284c7",
    lime: "#65a30d",
    rose: "#e11a48",
    amber: "#f59e0b",
  };
  const router = useRouter();
  const bgColor = () => {
    if (router.pathname.indexOf(link) > -1) {
      return `${colors[color]}`;
    } else {
      return "#52525b";
    }
  };

  return (
    <>
      <Link
        href={link}
        className={`bg-zinc-700 rounded-full flex justify-center items-center aspect-square w-3/4 transition-all duration-50  hover:cursor-pointer`}
        style={{ backgroundColor: bgColor() }}
        onClick={handleClick}
      >
        <li>{text}</li>
      </Link>
    </>
  );
}
