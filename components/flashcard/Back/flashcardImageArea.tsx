import { FlashcardImageAreaProps } from "@/types/types";
import Image from "next/image";

export default function FlashcardImageArea({ word }: FlashcardImageAreaProps) {
  return (
    <>
      <div className="w-fit mx-auto mt-3">
        {word.image && (
          <Image
            src={word.image}
            width={300}
            height={300}
            alt={word.word}
          />
        )}
      </div>
    </>
  );
}
