import type { Example, Word } from "@/types/types";
import { useState } from "react";

export default function Example({
  word,
  example,
}: {
  word: Word;
  example: Example;
}) {
  const handleClick = () => {
    console.log(example.example);
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentExample(e.target.value);
  };

  const handleSubmit = () => {
    // wordの該当のexampleを更新
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [currentExample, setCurrentExample] = useState(example.example);

  return (
    <>
      {!isEditing && <div onClick={handleClick}>{currentExample}</div>}
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={currentExample}
            onBlur={handleSubmit}
            onChange={handleChange}
            className="text-zinc-700 w-32 outline-none rounded px-3"
            autoFocus
          />
        </form>
      )}
    </>
  );
}
