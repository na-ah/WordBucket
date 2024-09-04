import { useState } from "react";

export default function NewMeaning() {
  const [isEditing, setIsEditing] = useState(false);
  const [newMeaning, setNewMeaning] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMeaning(e.target.value);
  };
  const handleSubmit = () => {
    // APIでMeaningに追加する
  };
  return (
    <>
      {!isEditing && <div onClick={() => setIsEditing(true)}>+</div>}
      {isEditing && (
        <form>
          <input
            type="text"
            placeholder="意味を追加"
            className="outline-none text-zinc-700 px-3 w-32 rounded"
            value={newMeaning}
            onChange={handleChange}
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        </form>
      )}
    </>
  );
}
