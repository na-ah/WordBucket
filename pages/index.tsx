import Layout from "@/components/shared/Templates/Layout/Layout";
import { BackendWord } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [words, setWords] = useState<BackendWord[]>([]);
  useEffect(() => {
    axios
      .get(
        process.env.NEXT_PUBLIC_LOCAL_HOST +
          "/words/search?created_at_to=2024-08-20&created_at_from=2024-08-01&learning_count_min=1&learning_count_max=5&correct_rate_min=0.1&average_duration_min=5&average_duration_max=5.1&status=completed&correct_rate_max=0.74"
      )
      .then((res) => {
        console.log(res.data.words);
        setWords(res.data.words);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Layout>
        <div>aaa</div>
        <h1 className="text-3xl">words</h1>
        <div>
          {words &&
            words.map((word) => (
              <>
                <div className="mt-3">
                  <h2 className="text-2xl">word:</h2>
                  {word.word}
                </div>
                <div className="mt-3">
                  <h2 className="text-2xl">meaning:</h2>

                  {word?.meanings?.map((meaning) => (
                    <>
                      <p>{meaning?.meaning}</p>
                    </>
                  ))}
                </div>
                <div className="mt-3">
                  <h2 className="text-2xl">examples</h2>
                  {word?.examples?.map((example) => (
                    <>
                      <p>{example?.example}</p>
                    </>
                  ))}
                </div>
                <div className="mt-3">
                  <h2 className="text-2xl">histories</h2>
                  {word?.histories?.map((history) => (
                    <>
                      <div className="mb-3">
                        <p>datetime: {history?.datetime}</p>
                        <p>result: {history?.result ? "true" : "false"}</p>
                        <p>duration: {history?.duration}</p>
                      </div>
                    </>
                  ))}
                </div>
                <br />
              </>
            ))}
        </div>
      </Layout>
    </>
  );
}
