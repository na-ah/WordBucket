import ReaderArticle from "@/components/reader/readerArticle";
import ReaderButtons from "@/components/reader/readerButtons";
import ReaderWordInformation from "@/components/reader/readerWordInformation";
import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import { sample } from "@/data/reader/source";
import useIndex from "@/hooks/reader/useIndex";

export default function Reader() {
  const {
    currentWord,
    article,
    currentMode,
    paragraphIndex,
    sentenceIndex,
    wordIndex,
    wordIndexDecrease,
    wordIndexIncrease,
    sentenceIndexDecrease,
    sentenceIndexIncrease,
    paragraphIndexDecrease,
    paragraphIndexIncrease,
    handleClickWord,
  } = useIndex(sample);
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full px-5 py-3 relative h-dvh">
          <PageTitle title="Reader" />
          <div className="basis-7/12 flex flex-col text-xl gap-3 overflow-y-auto py-4">
            <ReaderArticle
              article={article}
              currentMode={currentMode}
              paragraphIndex={paragraphIndex}
              sentenceIndex={sentenceIndex}
              wordIndex={wordIndex}
              handleClickWord={handleClickWord}
            />
          </div>
          <div className="basis-4/12 overflow-auto">
            <ReaderWordInformation
              currentWord={currentWord}
              currentMode={currentMode}
            />
          </div>
          <div className="basis-1/12 flex justify-center items-center gap-5">
            <ReaderButtons
              wordIndexDecrease={wordIndexDecrease}
              wordIndexIncrease={wordIndexIncrease}
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
