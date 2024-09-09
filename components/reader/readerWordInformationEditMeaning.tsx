import { Meaning } from "@/types/types";
import { useState } from "react";

export default function ReaderWordInformationEditMeaning({
  currentMeaning,
  handleSubmitEditMeaning,
}: {
  currentMeaning: Meaning;
  handleSubmitEditMeaning: (
    currentMeaning: Meaning,
    newMeaning: string
  ) => void;
}) {
  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMeaning(e.target.value);
  };

  const handleSubmit = () => {
    handleSubmitEditMeaning(currentMeaning, newMeaning);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [newMeaning, setNewMeaning] = useState(currentMeaning.meaning);

  return (
    <>
      {!isEditing && (
        <div
          className="hover:cursor-pointer"
          onClick={handleClick}
        >
          {currentMeaning.meaning}
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
