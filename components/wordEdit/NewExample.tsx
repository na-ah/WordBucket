import { useState } from "react";

export default function NewExample() {
  const [isEditing, setIsEditing] = useState(false);
  const [newExample, setNewExample] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExample(e.target.value);
  };
  const handleSubmit = () => {
    // APIでExampleに追加する
  };
  return (
    <>
      {!isEditing && <div onClick={() => setIsEditing(true)}>+</div>}
      {isEditing && (
        <form>
          <input
            type="text"
            placeholder="例文を追加"
            className="outline-none text-zinc-700 px-3 w-32 rounded"
            value={newExample}
            onChange={handleChange}
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        </form>
      )}
    </>
  );
}
