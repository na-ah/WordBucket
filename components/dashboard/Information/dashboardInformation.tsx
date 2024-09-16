import LeftBarTitle from "@/components/shared/LeftBarTitle";
import { DashboardInformationProps } from "@/types/types";
import Link from "next/link";

export default function DashboardInformation({
  informations,
}: DashboardInformationProps) {
  return (
    <>
      {informations.map((information, i) => (
        <div
          key={i}
          className="mt-3 flex justify-between"
        >
          {information.title === "意味未登録カード" ? (
            <Link
              href={"/word/missing/meaning"}
              className="flex justify-between w-full"
            >
              <LeftBarTitle
                title={information.title}
                color={information.color}
              />
              <span>{information.text}</span>
            </Link>
          ) : (
            <>
              <LeftBarTitle
                title={information.title}
                color={information.color}
              />
              <span>{information.text}</span>
            </>
          )}
        </div>
      ))}
    </>
  );
}
