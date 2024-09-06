import useWordApi from "@/hooks/common/useWordApi";
import { Word } from "@/types/types";
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
  const { addNewExampleApi } = useWordApi();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExample(e.target.value);
  };

  const handleSubmit = () => {
    addNewExampleApi(newExample, word, setWord);
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
          <input
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
