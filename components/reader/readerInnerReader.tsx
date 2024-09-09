import ReaderArticle from "@/components/reader/readerArticle";
import ReaderButtons from "@/components/reader/readerButtons";
import ReaderWordInformation from "@/components/reader/readerWordInformation";
import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import { sample } from "@/data/reader/source";
import useIndex from "@/hooks/reader/useIndex";
import useWordStatus from "@/hooks/reader/useWordStatus";

export default function InnerReader() {
  const {
    currentWord,
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
  } = useIndex(sample);

  const { wordStatus, fetchStatus } = useWordStatus();

  return (
    <>
      <Layout>
        <div className="flex flex-col w-full px-5 py-3 relative h-dvh">
          <PageTitle title="Reader" />
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
              currentMode={currentMode}
              handleClickInformationClose={handleClickInformationClose}
              wordStatus={wordStatus}
              fetchStatus={fetchStatus}
            />
          </div>
          <div className="basis-1/12 flex justify-between items-center">
            <ReaderButtons
              sentenceIndexDecrease={sentenceIndexDecrease}
              sentenceIndexIncrease={sentenceIndexIncrease}
              paragraphIndexDecrease={paragraphIndexDecrease}
              paragraphIndexIncrease={paragraphIndexIncrease}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
