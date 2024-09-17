import ReaderArticle from "@/components/reader/readerArticle";
import ReaderButtons from "@/components/reader/readerButtons";
import ReaderWordInformation from "@/components/reader/readerWordInformation";
import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import { sample } from "@/data/reader/source";
import useIndex from "@/hooks/reader/useIndex";
import useWordStatus from "@/hooks/reader/useWordStatus";
import ReaderAddArticle from "./readerAddArticle";
import { useState } from "react";

export default function InnerReader() {
  const [sourceArticle, setSourceArticle] = useState(sample);
  const {
    currentWord,
    currentSentence,
    article,
    currentMode,
    paragraphIndex,
    sentenceIndex,
    wordIndex,
    sentenceIndexDecrease,
    sentenceIndexIncrease,
    paragraphIndexDecrease,
    paragraphIndexIncrease,
    handleClickWord,
    handleClickInformationClose,
  } = useIndex(sourceArticle);

  const { wordStatus, fetchStatus } = useWordStatus(sourceArticle);
  const [isShowAddArticleForm, setIsShowAddArticleForm] = useState(false);
  const [newArticle, setNewArticle] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSourceArticle(newArticle);
    setIsShowAddArticleForm(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewArticle(e.target.value);
  };

  return (
    <>
      <Layout>
        {isShowAddArticleForm && (
          <>
            <div className="flex flex-col w-full px-5 py-3 relative h-dvh">
              <div className="flex justify-between items-center">
                <PageTitle title="Reader" />
                <button
                  className="text-2xl"
                  onClick={() => setIsShowAddArticleForm(false)}
                >
                  ×
                </button>
              </div>
              <form
                className="mt-5"
                onSubmit={handleSubmit}
              >
                <textarea
                  className="w-full h-32 text-black"
                  onChange={handleChange}
                />
                <button type="submit">submit</button>
              </form>
            </div>
          </>
        )}
        {!isShowAddArticleForm && (
          <>
            <div className="flex flex-col w-full px-5 py-3 relative h-dvh">
              <div className="flex justify-between items-center">
                <PageTitle title="Reader" />
                <ReaderAddArticle
                  setIsShowAddArticleForm={setIsShowAddArticleForm}
                />
              </div>
              <div className="flex-1 flex flex-col text-xl gap-3 overflow-y-auto py-4">
                <ReaderArticle
                  article={article}
                  currentMode={currentMode}
                  paragraphIndex={paragraphIndex}
                  sentenceIndex={sentenceIndex}
                  wordIndex={wordIndex}
                  handleClickWord={handleClickWord}
                  wordStatus={wordStatus}
                />
              </div>
              <div
                className="overflow-auto mb-5"
                style={{ display: currentMode === "word" ? "block" : "none" }}
              >
                <ReaderWordInformation
                  currentWord={currentWord}
                  currentSentence={currentSentence}
                  currentMode={currentMode}
                  handleClickInformationClose={handleClickInformationClose}
                  wordStatus={wordStatus}
                  fetchStatus={fetchStatus}
                />
              </div>
              <div className="basis-1/12 flex justify-between items-center">
                <ReaderButtons
                  currentSentence={currentSentence}
                  sentenceIndexDecrease={sentenceIndexDecrease}
                  sentenceIndexIncrease={sentenceIndexIncrease}
                  paragraphIndexDecrease={paragraphIndexDecrease}
                  paragraphIndexIncrease={paragraphIndexIncrease}
                />
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
