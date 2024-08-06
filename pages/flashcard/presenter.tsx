import Layout from "@/shared/Templates/Layout/Layout";
import { FlashcardProps } from "@/types/types";
import PageTitle from "@/uiParts/Dashboard/PageTitle/PageTitle";
import FlashcardArea from "./FlashcardArea/flashcardArea";
import Button from "@/uiParts/Dashboard/Button/Button";
import { GrPowerCycle } from "react-icons/gr";

export default function Presenter({ pageTitle }: FlashcardProps) {
  return (
    <>
      <Layout>
        <div className="flex-1 flex flex-col w-full px-5 py-3">
          <PageTitle title={pageTitle} />
          <FlashcardArea />
          <Button
            text={<GrPowerCycle />}
            className="w-full mx-auto py-3 flex justify-center text-5xl text-zinc-200  bg-zinc-700"
          />
        </div>
      </Layout>
    </>
  );
}
