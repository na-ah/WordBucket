import Layout from "@/components/Template/Layout/Layout";
import { isLoadingAtom, queryAtom } from "@/data/atoms/flashcardAtoms";
import { useAtom } from "jotai";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [query, setQuery] = useAtom(queryAtom);

  return (
    <>
      <Layout>
        {isLoading ? "loading" : "fin"}
        <div>aaa</div>
        {isLoading && (
          <>
            <p>Loading...</p>
          </>
        )}
        <Link href={"/flashcard"}>
          <button
            onClick={() =>
              setQuery(
                "/words/search?created_at_to=2024-08-20&created_at_from=2024-08-01&learning_count_min=3&learning_count_max=5&correct_rate_min=0.1&average_duration_min=5&average_duration_max=8.9&status=completed&correct_rate_max=0.9"
              )
            }
          >
            changeQuery
          </button>
        </Link>
        <p>{query}</p>
      </Layout>
    </>
  );
}
