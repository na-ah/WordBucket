import UnderlineTitle from "@/components/shared/UnderlineTitle";
import { FlashcardResultListProps } from "@/types/types";

export default function FlashcardResultList({
  correctList,
  incorrectList,
}: FlashcardResultListProps) {
  return (
    <>
      <div className="flex gap-3 h-full">
        <div className="basis-1/2 flex flex-col px-3 py-5">
          <UnderlineTitle
            content={String(correctList.length)}
            title="○"
          />
          <div className="overflow-y-auto">
            <ul className="flex flex-col items-center">
              {correctList.map((data, i) => (
                <p key={i}>{data.word}</p>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col basis-1/2 px-3 py-5">
          <UnderlineTitle
            content={String(incorrectList.length)}
            title="×"
          />
          <div className="px-8 overflow-y-auto">
            <ul className="flex flex-col flex-wrap mt-3 items-center">
              {incorrectList.map((data, i) => (
                <p key={i}>{data.word}</p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
