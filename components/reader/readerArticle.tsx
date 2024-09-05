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
            color:
              currentMode === "paragraph" && paragraphIndex === paragraph_i
                ? "white"
                : "gray",
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
              }}
            >
              {sentence.map((word, word_i) => (
                <div
                  key={word_i}
                  className="inline-block me-2 hover:cursor-pointer"
                  onClick={() => {
                    console.log(word.toString());
                    handleClickWord(word_i, sentence_i, paragraph_i);
                  }}
                  style={{
                    color:
                      currentMode === "word" &&
                      paragraphIndex === paragraph_i &&
                      sentenceIndex === sentence_i &&
                      wordIndex === word_i
                        ? "white"
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
