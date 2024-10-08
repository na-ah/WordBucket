import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="text-white bg-zinc-800 w-full flex flex-col">
        <div className="flex-1 flex flex-col max-w-[500px] w-full mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
