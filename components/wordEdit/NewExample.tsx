import { Word } from "@/types/types";
import axios from "axios";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function NewExample({
  word,
  setWord,
}: {
  word: Word;
  setWord: (arg: Word) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newExample, setNewExample] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExample(e.target.value);
  };
  const handleSubmit = () => {
    if (newExample != "") {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${word.id}/examples?example=${newExample}`
        )
        .then((res) => {
          const newWord = { ...word, examples: res.data.word.examples };
          setWord(newWord);
        })
        .catch((e) => console.log(e));
    }
    setIsEditing(false);
    setNewExample("");
  };
  return (
    <>
      {!isEditing && (
        <div
          onClick={() => setIsEditing(true)}
          className="hover:cursor-pointer hover:backdrop-brightness-150 rounded-full w-fit mx-auto p-1"
        >
          <IoMdAdd />
        </div>
      )}
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            placeholder="例文を追加"
            className="outline-none text-zinc-700 px-3 w-full rounded"
            value={newExample}
            onChange={handleChange}
            onBlur={handleSubmit}
            autoFocus
          />
        </form>
      )}
    </>
  );
}
