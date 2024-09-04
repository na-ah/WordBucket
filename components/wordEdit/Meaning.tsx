import type { Meaning, Word } from "@/types/types";
import { ReactElement, useState } from "react";

export default function Meaning({
  word,
  meaning,
}: {
  word: Word;
  meaning: Meaning;
}) {
  const handleClick = () => {
    console.log(meaning.meaning);
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMeaning(e.target.value);
  };

  const handleSubmit = () => {
    // wordの該当のmeaningを更新
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [currentMeaning, setCurrentMeaning] = useState(meaning.meaning);

  return (
    <>
      {!isEditing && <div onClick={handleClick}>{currentMeaning}</div>}
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={currentMeaning}
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
