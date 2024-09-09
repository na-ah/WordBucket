import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function ReaderWordInformationAddExample({
  handleSubmitExample,
}: {
  handleSubmitExample: (newExample: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newExample, setNewExample] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExample(e.target.value);
  };

  const handleSubmit = () => {
    handleSubmitExample(newExample);
    setIsEditing(false);
    setNewExample("");
  };

  return (
    <>
      {!isEditing && (
        <div
          onClick={() => setIsEditing(true)}
          className="hover:cursor-pointer hover:backdrop-brightness-150 rounded-full p-1 w-fit ms-auto"
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
