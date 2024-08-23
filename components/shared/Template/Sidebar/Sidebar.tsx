import SideBarButton from "@/components/shared/uiParts/Sidebar/SideBarButton/SideBarButton";

export default function Sidebar() {
  return (
    <>
      <div className="bg-zinc-900 text-white w-14 py-3">
        <ul className="flex flex-col gap-3 mx-auto items-center">
          <SideBarButton
            text="/"
            link="/"
            color="blue"
          />
          <SideBarButton
            text="D"
            link="/dashboard"
            color="rose"
          />
          <SideBarButton
            text="F"
            link="/flashcard"
            color="lime"
          />
          <SideBarButton
            text="w"
            link="/word"
            color="lime"
          />
        </ul>
      </div>
    </>
  );
}
