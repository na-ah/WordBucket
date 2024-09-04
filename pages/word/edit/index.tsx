import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import EditWord from "@/components/wordEdit/EditWord";
import NewWord from "@/components/wordForm/newWord";
import { Word } from "@/types/types";

export default function WordEdit() {
  return (
    <>
      <Layout>
        <div className="flex flex-col h-dvh">
          <PageTitle title={"WordEdit"} />
          <div className="flex-grow">
            {wordList.map((word, i) => (
              <NewWord
                key={i}
                newWord={word}
              />
            ))}
            {wordList.map((word, i) => (
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

const wordList: Word[] = [
  {
    id: 1,
    word: "apple",
    meanings: [],
    examples: [],
    histories: [],
    average_duration: 0,
    correct_rate: 0,
    learning_count: 0,
  },
  {
    id: 2,
    word: "book",
    meanings: [
      {
        id: 1,
        meaning: "りんご",
      },
      {
        id: 2,
        meaning: "林檎",
      },
    ],
    examples: [],
    histories: [],
    average_duration: 0,
    correct_rate: 0,
    learning_count: 0,
  },
  {
    id: 3,
    word: "cat",
    meanings: [],
    examples: [
      {
        id: 1,
        example: "I like cat.",
      },
    ],
    histories: [],
    average_duration: 0,
    correct_rate: 0,
    learning_count: 0,
  },
];
