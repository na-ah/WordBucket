import { Example, Meaning, NewWordProps, Word } from "@/types/types";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

export default function NewWord({ newWord }: NewWordProps) {
  const [meanings, setMeanings] = useState<Meaning[]>([]);
  const [examples, setExamples] = useState<Example[]>([]);
  const [isEditingMeaning, setIsEditingMeaning] = useState<boolean>(false);
  const [isEditingExample, setIsEditingExample] = useState<boolean>(false);

  const [newMeaning, setNewMeaning] = useState<string>("");
  const [newExample, setNewExample] = useState<string>("");

  const handleMeaningChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNewMeaning(e.target.value);
  };

  const handleExampleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNewExample(e.target.value);
  };

  const submitMeaning = () => {
    if (newMeaning != "") {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${newWord.id}/meanings?meaning=${newMeaning}`
        )
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e));
    }
    setIsEditingMeaning(false);
  };

  const submitExample = () => {
    if (newExample != "") {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${newWord.id}/examples?example=${newExample}`
        )
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e));
    }
    setIsEditingExample(false);
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${newWord.id}}`)
      .then((res) => {
        setMeanings(res.data.word.meanings);
        setExamples(res.data.word.examples);
      })
      .catch((e) => console.log(e));
  }, [isEditingExample, isEditingMeaning, newWord.id]);

  return (
    <>
      <div className="my-8 mx-3 flex gap-3 min-h-32">
        <div className="basis-1/4 flex justify-center items-center bg-zinc-700 rounded">
          <div className="text-xl">{newWord.word}</div>
        </div>
        <div className="grow flex flex-col gap-3 justify-center items-center">
          <div
            className="bg-zinc-700 w-full flex px-5 gap-3 items-center h-full rounded"
            onClick={() => setIsEditingMeaning(true)}
          >
            {!isEditingMeaning && (
              <div className="flex flex-col gap-3 py-5">
                {meanings.length > 0 &&
                  meanings.map((meaning, i) => (
                    <p key={i}>- {meaning.meaning}</p>
                  ))}
              </div>
            )}
            {isEditingMeaning && (
              <input
                type="text"
                placeholder="meaning"
                onBlur={() => submitMeaning()}
                className="w-full outline-none rounded py-1 px-3 text-zinc-700"
                onChange={handleMeaningChange}
                autoFocus
              />
            )}
          </div>
          <div
            className="bg-zinc-700 w-full flex px-5 gap-3 items-center h-full rounded"
            onClick={() => setIsEditingExample(true)}
          >
            {!isEditingExample && (
              <div className="flex flex-col gap-3 py-5">
                {examples.length > 0 &&
                  examples.map((example, i) => (
                    <p key={i}>- {example.example}</p>
                  ))}
              </div>
            )}
            {isEditingExample && (
              <input
                type="text"
                placeholder="example"
                onBlur={() => submitExample()}
                onChange={handleExampleChange}
                className="w-full outline-none rounded py-1 px-3 text-zinc-700"
                autoFocus
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
