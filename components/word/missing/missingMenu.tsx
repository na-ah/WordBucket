import Link from "next/link";
import { useRouter } from "next/router";

export default function MissingMenu() {
  const router = useRouter();
  const activeStyle = (href: string) => {
    if (router.pathname === href) {
      return { color: "black", backgroundColor: "white" };
    } else {
      return { color: "white" };
    }
  };

  console.log(router.pathname);

  return (
    <>
      <div className="flex justify-center gap-3">
        <Link href="/word/missing">
          <div
            className="border py-2 px-4 rounded-xl hover:cursor-pointer"
            style={activeStyle("/word/missing")}
          >
            すべて未登録
          </div>
        </Link>
        <Link href="/word/missing/meaning">
          <div
            className="border py-2 px-4 rounded-xl hover:cursor-pointer"
            style={activeStyle("/word/missing/meaning")}
          >
            意味未登録
          </div>
        </Link>
        <Link href="/word/missing/example">
          <div
            className="border py-2 px-4 rounded-xl hover:cursor-pointer"
            style={activeStyle("/word/missing/example")}
          >
            例文未登録
          </div>
        </Link>
      </div>
    </>
  );
}
