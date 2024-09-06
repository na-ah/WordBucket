import useWordApi from "@/hooks/common/useWordApi";
import type { Example, Word } from "@/types/types";
import { useState } from "react";

export default function EditExample({
  word,
  example,
  setWord,
}: {
  word: Word;
  example: Example;
  setWord: (arg: Word) => void;
}) {
  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExample(e.target.value);
  };

  const { editExampleApi } = useWordApi();

  const handleSubmit = () => {
    editExampleApi(newExample, word, example, setWord);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [newExample, setNewExample] = useState(example.example);

  return (
    <>
      {!isEditing && (
        <div
          className="hover:cursor-pointer"
          onClick={handleClick}
        >
          {newExample}
        </div>
      )}
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            defaultValue={newExample}
            onBlur={handleSubmit}
            onChange={handleChange}
            rows={3}
            className="text-zinc-700 w-full outline-none rounded px-3"
            autoFocus
          />
        </form>
      )}
    </>
  );
}
