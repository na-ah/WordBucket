import { ArticleWordColor } from "@/data/reader/readerColor";
import { ReaderArticleProps } from "@/types/types";

export default function ReaderArticle({
  article,
  currentMode,
  paragraphIndex,
  sentenceIndex,
  wordIndex,
  handleClickWord,
  wordStatus,
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
                    color:
                      wordStatus && wordStatus.hasOwnProperty(word.toString())
                        ? wordStatus[word.toString()].status === "unlearned"
                          ? ArticleWordColor["unlearned"]
                          : wordStatus[word.toString()].status === "in_progress"
                          ? ArticleWordColor["inProgress"]
                          : wordStatus[word.toString()].status === "memorizing"
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
