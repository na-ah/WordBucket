import { ArticleWordColor } from "@/data/reader/readerColor";
import { Example, Meaning, ReaderWordInformationProps } from "@/types/types";
import axios from "axios";
import ReaderWordInformationAddMeaning from "./readerWordInformationAddMeaning";
import ReaderWordInformationAddExample from "./readerWordInformationAddExample";
import ReaderWordInformationEditMeaning from "./readerWordInformationEditMeaning";
import ReaderWordInformationEditExample from "./readerWordInformationEditExample";
import { FaGoogle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function ReaderWordInformation({
  currentWord,
  currentSentence,
  currentMode,
  handleClickInformationClose,
  wordStatus,
  fetchStatus,
}: ReaderWordInformationProps) {
  const handleSubmitWord = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words?word=${currentWord}&example=${currentSentence}`
      )
      .then((res) => {
        console.log(res.data);
        fetchStatus();
      })
      .catch((e) => console.log(e));
  };

  const handleSubmitMeaning = (newMeaning: string) => {
    if (!(wordStatus && wordStatus[currentWord])) {
      return;
    }
    const currentWordId = wordStatus[currentWord].id;
    axios
      .post(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${currentWordId}/meanings?meaning=${newMeaning}`
      )
      .then((res) => {
        console.log(res.data);
        fetchStatus();
      })
      .catch((e) => console.log(e));
  };

  const handleSubmitEditMeaning = (
    currentMeaning: Meaning,
    newMeaning: string
  ) => {
    if (!(wordStatus && wordStatus[currentWord])) {
      return;
    }
    const currentWordId = wordStatus[currentWord].id;
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${currentWordId}/meanings/${currentMeaning.id}?meaning=${newMeaning}`
      )
      .then((res) => {
        console.log(res.data);
        fetchStatus();
      })
      .catch((e) => console.log(e));
  };

  const handleSubmitExample = (newExample: string) => {
    if (!(wordStatus && wordStatus[currentWord])) {
      return;
    }
    const currentWordId = wordStatus[currentWord].id;
    axios
      .post(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${currentWordId}/examples?example=${newExample}`
      )
      .then((res) => {
        console.log(res.data);
        fetchStatus();
      })
      .catch((e) => console.log(e));
  };

  const handleSubmitEditExample = (
    currentExample: Example,
    newExample: string
  ) => {
    if (!(wordStatus && wordStatus[currentWord])) {
      return;
    }
    const currentWordId = wordStatus[currentWord].id;
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${currentWordId}/examples/${currentExample.id}?example=${newExample}`
      )
      .then((res) => {
        console.log(res.data);
        fetchStatus();
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="text-white flex flex-col gap-4 py-3 px-3 rounded-xl bg-zinc-700">
        <div className="font-bold text-2xl flex justify-between">
          <p
            style={{
              color:
                wordStatus && wordStatus.hasOwnProperty(currentWord.toString())
                  ? wordStatus[currentWord.toString()].status === "unlearned"
                    ? ArticleWordColor["unlearned"]
                    : wordStatus[currentWord.toString()].status ===
                      "in_progress"
                    ? ArticleWordColor["inProgress"]
                    : wordStatus[currentWord.toString()].status === "memorizing"
                    ? ArticleWordColor["memorizing"]
                    : "white"
                  : "white",
            }}
          >
            {currentWord}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`${
                "https://www.google.com/search?q=" +
                encodeURIComponent(currentWord) +
                encodeURIComponent(" 意味")
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className="text-base" />
            </a>
            <button
              onClick={handleClickInformationClose}
              className="text-zinc-300"
            >
              <IoMdClose className="text-xl" />
            </button>
          </div>
        </div>
        {wordStatus && wordStatus[currentWord]?.meanings && (
          <div className="font-bold text-lg flex">
            <p className="border-l-4 ps-2 border-gray-500 basis-1/4">意味：</p>
            <div className="w-full">
              <div>
                {wordStatus[currentWord].meanings?.map(
                  (meaning: Meaning, i) => (
                    <ReaderWordInformationEditMeaning
                      key={i}
                      currentMeaning={meaning}
                      handleSubmitEditMeaning={handleSubmitEditMeaning}
                    />
                  )
                )}
              </div>
              <ReaderWordInformationAddMeaning
                handleSubmitMeaning={handleSubmitMeaning}
              />
            </div>
          </div>
        )}
        {wordStatus && wordStatus[currentWord]?.examples && (
          <div className="font-bold text-lg flex">
            <p className="border-l-4 ps-2 border-gray-500 basis-1/4">例文：</p>
            <div className="w-full">
              <div>
                {wordStatus[currentWord].examples.map((example, i) => (
                  <ReaderWordInformationEditExample
                    key={i}
                    currentExample={example}
                    handleSubmitEditExample={handleSubmitEditExample}
                  />
                  // <p key={i}>{example.example}</p>
                ))}
              </div>
              <ReaderWordInformationAddExample
                handleSubmitExample={handleSubmitExample}
              />
            </div>
          </div>
        )}
        {wordStatus && !wordStatus[currentWord] && (
          <div className="flex">
            <button
              onClick={handleSubmitWord}
              className="border rounded-xl px-3 cursor-pointer"
            >
              add DB
            </button>
          </div>
        )}
      </div>
    </>
  );
}
