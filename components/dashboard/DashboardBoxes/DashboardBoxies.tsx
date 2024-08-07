import { DashboardBoxesProps } from "@/types/types";
import UnderlineTitle from "@/components/uiParts/Dashboard/UnderlineTitle/UnderlineTitle";

export default function DashboardBoxes({
  listTitle,
  listContent,
  children,
}: DashboardBoxesProps) {
  return (
    <>
      <div className="mt-3 px-3 pb-3 pt-1 bg-zinc-700">
        <UnderlineTitle
          title={listTitle}
          content={listContent}
        />
        {children}
      </div>
    </>
  );
}
