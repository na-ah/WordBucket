import Main from "@/shared/Main/Main";
import Sidebar from "@/shared/Sidebar/Sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </>
  );
}
