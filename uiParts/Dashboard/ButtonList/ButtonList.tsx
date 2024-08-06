import { ReactNode } from "react";
import { Colors } from "@/types/types";

export default function ButtonList({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style: Colors;
  className?: string;
}) {
  return (
    <>
      <div
        className={`flex flex-col gap-3 ${className}`}
        style={{ ...style }}
      >
        {children}
      </div>
    </>
  );
}
