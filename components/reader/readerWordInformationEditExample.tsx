import { Example } from "@/types/types";
import { useState } from "react";

export default function ReaderWordInformationEditExample({
  currentExample,
  handleSubmitEditExample,
}: {
  currentExample: Example;
  handleSubmitEditExample: (
    currentExample: Example,
    newExample: string
  ) => void;
}) {
  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExample(e.target.value);
  };

  const handleSubmit = () => {
    handleSubmitEditExample(currentExample, newExample);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [newExample, setNewExample] = useState(currentExample.example);

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
