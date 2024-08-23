import LeftBarTitle from "@/components/shared/LeftBarTitle/LeftBarTitle";
import { FlashcardExampleAreaProps } from "@/types/types";

export default function FlashcardExampleArea({
  word,
}: FlashcardExampleAreaProps) {
  return (
    <>
      <div className="mt-3 p-2 gap-3 bg-zinc-700  flex flex-col items-start overflow-y-auto">
        {word.examples.map((sentence, i) => (
          <div key={i}>
            <LeftBarTitle
              title={sentence.example}
              color="lime"
            />
          </div>
        ))}
      </div>
    </>
  );
}
