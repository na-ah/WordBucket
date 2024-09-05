export default function ShowMeanings({ meanings }) {
  return (
    <>
      <div className="bg-teal-300">
        {meanings.map((meaning, i) => (
          <p key={i}>{meaning.meaning}</p>
        ))}
      </div>
    </>
  );
}
