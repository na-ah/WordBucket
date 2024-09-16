import { FlashcardHistoryTableProps } from "@/types/types";

export default function FlashcardHistoryTable({
  word,
}: FlashcardHistoryTableProps) {
  return (
    <>
      <table className="mt-3 table-auto w-full">
        <thead>
          <tr>
            <td className="text-left">日付</td>
            <td className="text-center">結果</td>
            <td className="text-center">時間</td>
          </tr>
        </thead>
        <tbody>
          {word.histories.map((result, i) => (
            <tr key={i}>
              <td className="text-left">
                {new Date(result.datetime).toLocaleString("ja-JP")}
              </td>
              <td className="text-center">{result.result ? "○" : "×"}</td>
              <td className="text-center">{result.duration}s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
