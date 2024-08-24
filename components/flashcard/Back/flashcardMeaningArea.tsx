import { FlashcardMeaningAreaProps } from "@/types/types";

export default function FlashcardMeaningArea({
  word,
}: FlashcardMeaningAreaProps) {
  return (
    <>
      <div className="flex flex-col h-full justify-center items-center text-2xl bg-zinc-700 ">
        {word.meanings.map((meaning) => (
          <>{meaning.meaning}</>
        ))}
      </div>
    </>
  );
}
