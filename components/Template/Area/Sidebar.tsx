import SideBarButton from "@/components/shared/SideBarButton";
import { isResultShownAtom } from "@/data/atoms/flashcardAtoms";
import { useSetAtom } from "jotai";

export default function Sidebar() {
  const setIsResultShown = useSetAtom(isResultShownAtom);
  return (
    <>
      <div className="bg-zinc-900 text-white w-14 py-3 shrink-0">
        <ul className="flex flex-col gap-3 mx-auto items-center">
          <SideBarButton
            text="/"
            link="/"
            color="blue"
          />
          <SideBarButton
            text="D"
            link="/dashboard"
            color="blue"
          />
          <SideBarButton
            text="F"
            link="/flashcard"
            color="lime"
            handleClick={() => setIsResultShown(false)}
          />
          <SideBarButton
            text="W"
            link="/word"
            color="lime"
          />
          <SideBarButton
            text="R"
            link="/reader"
            color="rose"
          />
        </ul>
      </div>
    </>
  );
}
