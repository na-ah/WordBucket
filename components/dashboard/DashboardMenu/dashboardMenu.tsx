import Button from "@/components/shared/uiParts/Dashboard/Button/Button";
import ButtonList from "@/components/shared/uiParts/Dashboard/ButtonList/ButtonList";
import { DashboardMenuProps } from "@/types/types";

export default function DashboardMenu({ menuPosition }: DashboardMenuProps) {
  return (
    <>
      <ButtonList
        className="absolute z-50 bg-white p-3 rounded-md"
        style={{
          top: `${menuPosition?.top && menuPosition?.top}px`,
          left: `${menuPosition?.left && menuPosition?.left - 56}px`,
        }}
      >
        <Button
          text={"aaa"}
          textColor="white"
          bgColor="black"
          className="rounded-md px-8"
        />
        <Button
          text={"aaa"}
          textColor="white"
          bgColor="black"
          className="rounded-md px-8"
        />
      </ButtonList>
    </>
  );
}
