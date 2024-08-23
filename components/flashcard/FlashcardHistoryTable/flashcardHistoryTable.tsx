import { FlashcardHistoryTableProps } from "@/types/types";

export default function FlashcardHistoryTable({
  word,
}: FlashcardHistoryTableProps) {
  return (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <td>日付</td>
            <td>結果</td>
            <td>時間</td>
          </tr>
        </thead>
        <tbody>
          {word.histories.map((result, i) => (
            <tr key={i}>
              <td>{result.datetime}</td>
              <td>{result.result}</td>
              <td>{result.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
