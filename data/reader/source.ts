import { WordMap } from "@/types/types";

export const wordMap: WordMap = {
  advertising: {
    word: "advertising",
    status: "in_progress",
    accuracyRate: 0.3,
    learningCount: 3,
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
    status: "memorizing",
    accuracyRate: 0.8,
    learningCount: 8,
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
  business: {
    word: "business",
    status: "unlearned",
    accuracyRate: 0,
    learningCount: 0,
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
};

export const sample = `X’s advertising woes are about to get a whole lot worse. According to a new report from Kantar, details of which were published by Advanced Television. The market research firm found that 26 percent of marketers plan to cut their spending on X in the coming year, and that advertisers’ trust in X is “historically low.”
Kantar’s report, which is based on interviews with 18,000 consumers and 1,000 marketers from around the world, underscores just how far X’s advertising business has declined since Elon Musk took over the company. Over the last year and a half, the platform has seen numerous high-profile advertisers halt or slow down their spending amid concerns about hate speech and other toxic content.
Musk has also antagonized major advertisers, saying that brands worried about hate speech should “go fuck yourself.” he’s also accused advertisers of “blackmail,” and recently sued an industry group and several global companies for conducting an “illegal boycott” of the platform. Of note, Kantar found that only 4 percent of marketers believe X is safe for brands.
X didn’t immediately respond to a request for comment. The company told the Financial Times that “advertisers know that X now offers stronger brand safety, performance and analytics capabilities than ever before, while seeing all-time-high levels of usage.”
`;
