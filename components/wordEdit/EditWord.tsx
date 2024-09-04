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
      <div className="mx-3 my-3 grid grid-cols-[25%_auto] gap-3">
        <div className="p-3 bg-zinc-700 rounded flex justify-center items-center">
          {word.word}
        </div>
        <div className="grid gap-3">
          <div className="bg-zinc-700 rounded flex flex-col p-3 gap-3">
            {word.meanings &&
              word.meanings.map((meaning, i) => (
                <div
                  key={i}
                  className="flex flex-col"
                >
                  <EditMeaning
                    word={word}
                    meaning={meaning}
                    setWord={setWord}
                  />
                </div>
              ))}
            <NewMeaning
              word={word}
              setWord={setWord}
            />
          </div>
          <div className="p-3 bg-zinc-700 rounded flex flex-col gap-3">
            {word.examples &&
              word.examples.map((example, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3"
                >
                  <EditExample
                    word={word}
                    example={example}
                    setWord={setWord}
                  />
                </div>
              ))}
            <NewExample
              word={word}
              setWord={setWord}
            />
          </div>
        </div>
      </div>
    </>
  );
}
