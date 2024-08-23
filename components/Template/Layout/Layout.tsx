import { ReactNode } from "react";
import Sidebar from "../Area/Sidebar/Sidebar";
import MainArea from "../Area/MainArea/MainArea";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-dvh">
        <Sidebar />
        <MainArea>{children}</MainArea>
      </div>
    </>
  );
}
