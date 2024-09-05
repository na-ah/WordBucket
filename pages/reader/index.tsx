import ShowExamples from "@/components/reader/showExamples";
import ShowMeanings from "@/components/reader/showMeanings";
import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
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
  } = useIndex(sample);
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full px-5 py-3 relative h-dvh">
          <PageTitle title="Reader" />
          <div className="basis-8/12 flex flex-col gap-3 overflow-y-auto">
            {article.map((paragraph, paragraph_i) => (
              <div
                key={paragraph_i}
                style={{
                  color:
                    currentMode === "paragraph" &&
                    paragraphIndex === paragraph_i
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
                        className="inline-block me-2"
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
          </div>
          <div className="flex-1"></div>
          <div className="basis-3/12 overflow-auto">
            <div className="text-center p-8 text-slate-200 font-bold text-2xl">
              {currentWord}
            </div>
            <div className="text-center p-8 text-slate-800 font-bold text-2xl">
              {wordMap[currentWord]?.meanings && (
                <ShowMeanings meanings={wordMap[currentWord].meanings} />
              )}
            </div>
            <div className="text-center p-8 text-slate-800 font-bold text-2xl">
              {wordMap[currentWord]?.examples && (
                <ShowExamples examples={wordMap[currentWord].examples} />
              )}
            </div>
          </div>
          <div className="basis-1/12 flex justify-center items-center gap-5">
            <button
              className="text-3xl"
              onClick={paragraphIndexDecrease}
            >
              👈
            </button>
            <button
              className="text-3xl"
              onClick={sentenceIndexDecrease}
            >
              ⇐
            </button>
            <button
              className="text-3xl"
              onClick={wordIndexDecrease}
            >
              ←
            </button>
            <button
              className="text-3xl"
              onClick={wordIndexIncrease}
            >
              →
            </button>
            <button
              className="text-3xl"
              onClick={sentenceIndexIncrease}
            >
              ⇒
            </button>
            <button
              className="text-3xl"
              onClick={paragraphIndexIncrease}
            >
              👉
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

const wordMap = {
  advertising: {
    word: "advertising",
    meanings: [
      {
        meaning: "広告",
      },
      {
        meaning: "宣伝する",
      },
    ],
    examples: [
      {
        example: "an advertising agency",
      },
      {
        example: "an advertising man",
      },
    ],
    histories: [
      {
        datetime: "2024-09-03",
        duration: 3.2,
        result: false,
      },
      {
        datetime: "2024-09-04",
        duration: 2.8,
        result: true,
      },
    ],
  },
  market: {
    word: "market",
    meanings: [
      {
        meaning: "市場",
      },
      {
        meaning: "食料品店",
      },
    ],
    examples: [],
    histories: [
      {
        datetime: "2024-08-31",
        duration: 5,
        result: false,
      },
    ],
  },
};

const sample = `X’s advertising woes are about to get a whole lot worse. According to a new report from Kantar, details of which were published by Advanced Television. The market research firm found that 26 percent of marketers plan to cut their spending on X in the coming year, and that advertisers’ trust in X is “historically low.”
Kantar’s report, which is based on interviews with 18,000 consumers and 1,000 marketers from around the world, underscores just how far X’s advertising business has declined since Elon Musk took over the company. Over the last year and a half, the platform has seen numerous high-profile advertisers halt or slow down their spending amid concerns about hate speech and other toxic content.
Musk has also antagonized major advertisers, saying that brands worried about hate speech should “go fuck yourself.” he’s also accused advertisers of “blackmail,” and recently sued an industry group and several global companies for conducting an “illegal boycott” of the platform. Of note, Kantar found that only 4 percent of marketers believe X is safe for brands.
X didn’t immediately respond to a request for comment. The company told the Financial Times that “advertisers know that X now offers stronger brand safety, performance and analytics capabilities than ever before, while seeing all-time-high levels of usage.”
`;
