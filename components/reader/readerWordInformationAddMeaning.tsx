import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function ReaderWordInformationAddMeaning({
  handleSubmitMeaning,
}: {
  handleSubmitMeaning: (newMeaning: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newMeaning, setNewMeaning] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMeaning(e.target.value);
  };

  const handleSubmit = () => {
    handleSubmitMeaning(newMeaning);
    setIsEditing(false);
    setNewMeaning("");
  };

  return (
    <>
      {!isEditing && (
        <div
          onClick={() => setIsEditing(true)}
          className="hover:cursor-pointer hover:backdrop-brightness-150 rounded-full w-fit ms-auto p-1"
        >
          <IoMdAdd />
        </div>
      )}
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="意味を追加"
            className="outline-none text-zinc-700 px-3 w-full rounded text-center"
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
