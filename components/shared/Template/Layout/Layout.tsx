import { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../MainArea/MainArea";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-dvh">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </>
  );
}
