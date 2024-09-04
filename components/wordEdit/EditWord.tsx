import { Word } from "@/types/types";
import Meaning from "./Meaning";
import Example from "./Example";
import NewMeaning from "./NewMeaning";
import NewExample from "./NewExample";

export default function EditWord({ word }: { word: Word }) {
  return (
    <>
      <div className="mx-3 my-8 grid grid-cols-[25%_auto] gap-3">
        <div className="p-3 bg-zinc-700 rounded flex justify-center items-center">
          {word.word}
        </div>
        <div className="grid gap-3">
          <div className="p-3 bg-zinc-700 rounded flex gap-3">
            <NewMeaning />
            <div className="flex gap-3">
              {word.meanings &&
                word.meanings.map((meaning, i) => (
                  <Meaning
                    key={i}
                    word={word}
                    meaning={meaning}
                  />
                ))}
            </div>
          </div>
          <div className="p-3 bg-zinc-700 rounded flex gap-3">
            <NewExample />
            <div className="flex gap-3">
              {word.examples &&
                word.examples.map((example, i) => (
                  <Example
                    key={i}
                    word={word}
                    example={example}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
