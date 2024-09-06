import { ArticleWordColor } from "@/data/reader/readerColor";
import { wordMap } from "@/data/reader/source";
import { ReaderArticleProps } from "@/types/types";

export default function ReaderArticle({
  article,
  currentMode,
  paragraphIndex,
  sentenceIndex,
  wordIndex,
  handleClickWord,
}: ReaderArticleProps) {
  return (
    <>
      {article.map((paragraph, paragraph_i) => (
        <div
          key={paragraph_i}
          style={{
            display: paragraph_i === paragraphIndex ? "block" : "none",
          }}
        >
          {paragraph.map((sentence, sentence_i) => (
            <div
              key={sentence_i}
              className="inline"
              style={{
                color:
                  currentMode === "sentence" &&
                  paragraphIndex === paragraph_i &&
                  sentenceIndex === sentence_i
                    ? "white"
                    : "inherit",
                filter:
                  (currentMode === "sentence" || currentMode === "word") &&
                  paragraphIndex === paragraph_i &&
                  sentenceIndex === sentence_i
                    ? "none"
                    : "brightness(0.4)",
              }}
            >
              {sentence.map((word, word_i) => (
                <div
                  key={word_i}
                  className="inline-block me-2 mt-1 hover:cursor-pointer"
                  onClick={() => {
                    handleClickWord(word_i, sentence_i, paragraph_i);
                  }}
                  style={{
                    color: wordMap.hasOwnProperty(word.toString())
                      ? wordMap[word.toString()].status === "unlearned"
                        ? ArticleWordColor["unlearned"]
                        : wordMap[word.toString()].status === "in_progress"
                        ? ArticleWordColor["inProgress"]
                        : wordMap[word.toString()].status === "memorizing"
                        ? ArticleWordColor["memorizing"]
                        : "inherit"
                      : "inherit",
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
