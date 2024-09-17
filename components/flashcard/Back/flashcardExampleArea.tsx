import LeftBarTitle from "@/components/shared/LeftBarTitle";
import { FlashcardExampleAreaProps } from "@/types/types";

export default function FlashcardExampleArea({
  word,
}: FlashcardExampleAreaProps) {
  return (
    <>
      <div className="basis-2/5 overflow-auto bg-zinc-700">
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
