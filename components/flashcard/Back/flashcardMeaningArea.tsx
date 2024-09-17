import { FlashcardMeaningAreaProps } from "@/types/types";

export default function FlashcardMeaningArea({
  word,
}: FlashcardMeaningAreaProps) {
  return (
    <>
      <div className="basis-1/5 overflow-auto flex flex-col justify-center items-center text-2xl bg-zinc-700 ">
        {word.meanings.map((meaning) => (
          <div key={meaning.id}>{meaning.meaning}</div>
        ))}
      </div>
    </>
  );
}
