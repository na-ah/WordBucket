export default function ShowExamples({ examples }) {
  return (
    <>
      <div className="bg-rose-300">
        {examples.map((example, i) => (
          <p key={i}>{example.example}</p>
        ))}
      </div>
    </>
  );
}
