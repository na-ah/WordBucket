import SideBarButton from "@/components/shared/SideBarButton";
import useDashboard from "@/hooks/dashboard/useDashboard";

export default function Sidebar() {
  const { handleBoxClick } = useDashboard();
  return (
    <>
      <div className="bg-zinc-900 text-white w-14 py-3 shrink-0">
        <ul className="flex flex-col gap-3 mx-auto items-center">
          <SideBarButton
            text="D"
            link="/dashboard"
            color="blue"
          />
          <SideBarButton
            text="F"
            link="/flashcard"
            color="lime"
            handleClick={() => handleBoxClick("inProgress")}
          />
          <SideBarButton
            text="R"
            link="/reader"
            color="rose"
          />
          <SideBarButton
            text="W"
            link="/word"
            color="amber"
          />
        </ul>
      </div>
    </>
  );
}
