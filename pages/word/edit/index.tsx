import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import EditWord from "@/components/wordEdit/EditWord";
import { Word } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WordEdit() {
  const [targetWords, setTargetWords] = useState<Word[]>([]);
  const fetchTargetWords = async () => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_LOCAL_HOST +
          "/words/search?missing_meanings=true&missing_examples=true&limit=5"
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
          <PageTitle title={"WordEdit"} />
          <div className="flex-grow">
            {targetWords &&
              targetWords.map((word, i) => (
                <EditWord
                  key={i}
                  word={word}
                />
              ))}
          </div>
          <div>aiei</div>
        </div>
      </Layout>
    </>
  );
}

// const wordList: Word[] = [
//   {
//     id: 1,
//     word: "apple",
//     meanings: [],
//     examples: [],
//     histories: [],
//     average_duration: 0,
//     correct_rate: 0,
//     learning_count: 0,
//   },
//   {
//     id: 2,
//     word: "book",
//     meanings: [
//       {
//         id: 1,
//         meaning: "りんご",
//       },
//       {
//         id: 2,
//         meaning: "林檎",
//       },
//     ],
//     examples: [],
//     histories: [],
//     average_duration: 0,
//     correct_rate: 0,
//     learning_count: 0,
//   },
//   {
//     id: 3,
//     word: "cat",
//     meanings: [],
//     examples: [
//       {
//         id: 1,
//         example: "I like cat.",
//       },
//     ],
//     histories: [],
//     average_duration: 0,
//     correct_rate: 0,
//     learning_count: 0,
//   },
// ];
