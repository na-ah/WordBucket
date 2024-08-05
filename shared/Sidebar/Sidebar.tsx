import SideBarButton from "@/uiParts/Sidebar/SideBarButton/SideBarButton";

export default function Sidebar() {
  return (
    <>
      <div className="bg-zinc-700 text-white w-14 py-3">
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
            text="w"
            link="/word"
            color="lime"
          />
        </ul>
      </div>
    </>
  );
}
