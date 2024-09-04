import { Word } from "@/types/types";
import axios from "axios";
import { useState } from "react";

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
      {!isEditing && <div onClick={() => setIsEditing(true)}>+</div>}
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="例文を追加"
            className="outline-none text-zinc-700 px-3 w-32 rounded"
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
