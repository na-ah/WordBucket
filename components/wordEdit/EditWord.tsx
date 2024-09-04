import { Word } from "@/types/types";
import NewMeaning from "./NewMeaning";
import NewExample from "./NewExample";
import EditExample from "./EditExample";
import EditMeaning from "./EditMeaning";
import { useState } from "react";

export default function EditWord({ word: initialWord }: { word: Word }) {
  const [word, setWord] = useState(initialWord);
  return (
    <>
      <div className="mx-3 my-8 grid grid-cols-[25%_auto] gap-3">
        <div className="p-3 bg-zinc-700 rounded flex justify-center items-center">
          {word.word}
        </div>
        <div className="grid gap-3">
          <div className="p-3 bg-zinc-700 rounded flex gap-3">
            <NewMeaning
              word={word}
              setWord={setWord}
            />
            <div className="flex gap-3">
              {word.meanings &&
                word.meanings.map((meaning, i) => (
                  <EditMeaning
                    key={i}
                    word={word}
                    meaning={meaning}
                    setWord={setWord}
                  />
                ))}
            </div>
          </div>
          <div className="p-3 bg-zinc-700 rounded flex gap-3">
            <NewExample
              word={word}
              setWord={setWord}
            />
            <div className="flex gap-3">
              {word.examples &&
                word.examples.map((example, i) => (
                  <EditExample
                    key={i}
                    word={word}
                    example={example}
                    setWord={setWord}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
