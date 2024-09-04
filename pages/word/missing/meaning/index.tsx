import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import MissingMenu from "@/components/word/missing/missingMenu";
import WordMenu from "@/components/word/wordMenu";
import EditWord from "@/components/wordEdit/EditWord";
import { Word } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MissingMeaning() {
  const [targetWords, setTargetWords] = useState<Word[]>([]);
  const fetchTargetWords = async () => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_LOCAL_HOST +
          "/words/search?missing_meanings=true&limit=8"
        }`
      )
      .then((res) => {
        const newWord = res.data.words;
        setTargetWords(newWord);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchTargetWords();
  }, []);

  return (
    <>
      <Layout>
        <div className="flex flex-col h-vh min-h-dvh ">
          <PageTitle title={"MissingMeaning"} />
          <WordMenu />
          <MissingMenu />
          <div className="flex-grow">
            {targetWords &&
              targetWords.map((word, i) => (
                <EditWord
                  key={i}
                  word={word}
                />
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
