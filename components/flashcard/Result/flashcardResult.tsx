import PageTitle from "@/components/shared/PageTitle";
import FlashcardResultList from "./flashcardResultList";
import FlashcardResultStatistics from "./flashcardResultStatistics";
import useResult from "@/hooks/flashcard/useResult";
import FlashcardResultButton from "./flashcardResultButton";

export default function FlashcardResult() {
  const {
    correctList,
    incorrectList,
    totalAverageResponseTime,
    totalAccuracyRate,
  } = useResult();
  console.log("resultない");
  console.log("correctList:", correctList);
  console.log("incorrectList:", incorrectList);
  return (
    <>
      <div className="py-3 px-5 h-dvh grid grid-rows-[32px_5fr_2fr_1fr_2fr] ">
        <div className="">
          <PageTitle title="Result" />
        </div>
        <div className="overflow-y-auto">
          <div className="h-full">
            <FlashcardResultList
              correctList={correctList}
              incorrectList={incorrectList}
            />
          </div>
        </div>
        <div className="overflow-y-auto">
          <FlashcardResultStatistics
            totalAccuracyRate={totalAccuracyRate}
            totalAverageResponseTime={totalAverageResponseTime}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center flex-col items-center gap-5">
            <FlashcardResultButton />
          </div>
        </div>
      </div>
    </>
  );
}
