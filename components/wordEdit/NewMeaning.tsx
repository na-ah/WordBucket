import { Word } from "@/types/types";
import axios from "axios";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function NewMeaning({
  word,
  setWord,
}: {
  word: Word;
  setWord: (arg: Word) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newMeaning, setNewMeaning] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMeaning(e.target.value);
  };
  const handleSubmit = () => {
    if (newMeaning != "") {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${word.id}/meanings?meaning=${newMeaning}`
        )
        .then((res) => {
          const newWord = { ...word, meanings: res.data.word.meanings };
          setWord(newWord);
        })
        .catch((e) => console.log(e));
    }
    setIsEditing(false);
    setNewMeaning("");
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
          <input
            type="text"
            placeholder="意味を追加"
            className="outline-none text-zinc-700 px-3 w-full rounded"
            value={newMeaning}
            onChange={handleChange}
            onBlur={handleSubmit}
            autoFocus
          />
        </form>
      )}
    </>
  );
}
