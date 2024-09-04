import Link from "next/link";
import { useRouter } from "next/router";

export default function WordMenu() {
  const router = useRouter();
  const activeStyle = (href: string) => {
    if (router.pathname === href) {
      return { color: "black", backgroundColor: "white" };
    } else {
      return { color: "white" };
    }
  };

  const forMissingStyle = (href: string) => {
    if (router.pathname.indexOf(href) > -1) {
      return { color: "black", backgroundColor: "white" };
    } else {
      return { color: "white" };
    }
  };

  console.log(router.pathname);

  return (
    <>
      <div className="flex justify-center gap-3 my-5">
        <Link href="/word">
          <div
            className="border py-2 px-4 rounded-xl hover:cursor-pointer"
            style={activeStyle("/word")}
          >
            新規単語登録
          </div>
        </Link>
        <Link href="/word/missing">
          <div
            className="border py-2 px-4 rounded-xl hover:cursor-pointer"
            style={forMissingStyle("/word/missing")}
          >
            未完成カード
          </div>
        </Link>
        <Link href="/word/history">
          <div
            className="border py-2 px-4 rounded-xl hover:cursor-pointer"
            style={activeStyle("/word/history")}
          >
            学習履歴
          </div>
        </Link>
      </div>
    </>
  );
}
