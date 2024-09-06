import InnerReader from "@/components/reader/readerInnerReader";
import { Suspense } from "react";

export default function Reader() {
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <InnerReader />
      </Suspense>
    </>
  );
}
