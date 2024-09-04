import type { Meaning, Word } from "@/types/types";
import axios from "axios";
import { useState } from "react";

export default function EditMeaning({
  word,
  meaning,
  setWord,
}: {
  word: Word;
  meaning: Meaning;
  setWord: (arg: Word) => void;
}) {
  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMeaning(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${word.id}/meanings/${meaning.id}?meaning=${newMeaning}`
      )
      .then((res) => {
        const newWord = { ...word, meanings: res.data.word.meanings };
        setWord(newWord);
      })
      .catch((e) => console.log(e));

    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [newMeaning, setNewMeaning] = useState(meaning.meaning);

  return (
    <>
      {!isEditing && (
        <div
          className="hover:cursor-pointer"
          onClick={handleClick}
        >
          {newMeaning}
        </div>
      )}
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={newMeaning}
            onBlur={handleSubmit}
            onChange={handleChange}
            className="text-zinc-700 w-full outline-none rounded px-3"
            autoFocus
          />
        </form>
      )}
    </>
  );
}
