import InnerFlashcard from "@/components/flashcard/Main/flashcardInnerFlashcard";
import Layout from "@/components/Template/Layout/Layout";
import { Suspense } from "react";

export default function Flashcard() {
  return (
    <>
      <Layout>
        <Suspense fallback={<h2>Loading...</h2>}>
          <InnerFlashcard />
        </Suspense>
      </Layout>
    </>
  );
}
