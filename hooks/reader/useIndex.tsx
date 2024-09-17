import { useEffect, useMemo, useState } from "react";

export default function useIndex(sourceArticle: string) {
  const [currentMode, setCurrentMode] = useState<
    "word" | "sentence" | "paragraph"
  >("sentence");
  const [currentWord, setCurrentWord] = useState("");
  const [currentSentence, setCurrentSentence] = useState("");
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const sentenceIndexDecrease = () => {
    setCurrentMode("sentence");
    setSentenceIndex((prev) => {
      const isFirstSentence = prev === 0;
      const isFirstParagraph = paragraphIndex === 0;

      if (!isFirstSentence) {
        return prev - 1;
      }
      if (isFirstSentence && !isFirstParagraph) {
        setParagraphIndex((prev) => prev - 1);
        return article[paragraphIndex - 1].length - 1;
      }
      if (isFirstSentence && isFirstParagraph) {
        return 0;
      }
      return prev;
    });
    setWordIndex(0);
  };

  const sentenceIndexIncrease = () => {
    setCurrentMode("sentence");
    setSentenceIndex((prev) => {
      const isLastSentence = prev === article[paragraphIndex].length - 1;
      const isLastParagraph = paragraphIndex === article.length - 1;
      if (!isLastSentence) {
        return prev + 1;
      }

      if (isLastSentence && !isLastParagraph) {
        setParagraphIndex((prev) => prev + 1);
        return 0;
      }

      if (isLastSentence && isLastParagraph) {
        return prev;
      }
      return prev;
    });
    setWordIndex(0);
  };

  const paragraphIndexDecrease = () => {
    setCurrentMode("sentence");
    setParagraphIndex((prev) => {
      const isFirstParagraph = prev === 0;
      if (!isFirstParagraph) {
        return prev - 1;
      }
      if (isFirstParagraph) {
        return 0;
      }
      return prev;
    });
    setSentenceIndex(0);
    setWordIndex(0);
  };

  const paragraphIndexIncrease = () => {
    setCurrentMode("sentence");
    setParagraphIndex((prev) => {
      const isLastParagraph = prev === article.length - 1;
      if (!isLastParagraph) {
        return prev + 1;
      }
      if (isLastParagraph) {
        return prev;
      }
      return prev;
    });
    setSentenceIndex(0);
    setWordIndex(0);
  };

  const article = useMemo(() => {
    return sourceArticle
      .split(/\n\s*/)
      .filter((p) => p.trim() !== "")
      .map((paragraph) =>
        paragraph
          .split(/(?<=[.!?])\s+(?=[A-Z“”"])/)
          .map((sentence) => sentence.split(" ").map((word) => word))
      );
  }, [sourceArticle]);

  const articleWords = useMemo(() => {
    return article
      .flat(3)
      .map((word) => word.replace(/^[^\w]+|[^\w]+$/g, "").toLowerCase());
  }, [article]);

  useEffect(() => {
    setCurrentWord(
      article[paragraphIndex][sentenceIndex][wordIndex]
        .toString()
        .replace(/^[^\w]+|[^\w]+$/g, "")
    );

    setCurrentSentence(article[paragraphIndex][sentenceIndex].join(" "));
  }, [paragraphIndex, sentenceIndex, wordIndex, article]);

  const handleClickWord = (
    word_i: number,
    sentence_i: number,
    paragraph_i: number
  ) => {
    if (
      currentMode === "word" &&
      wordIndex == word_i &&
      sentenceIndex === sentence_i &&
      paragraphIndex === paragraph_i
    ) {
      setCurrentMode("sentence");
    } else {
      setCurrentMode("word");
    }
    setWordIndex(word_i);
    setSentenceIndex(sentence_i);
    setParagraphIndex(paragraph_i);
  };

  const handleClickInformationClose = () => {
    setCurrentMode("sentence");
  };

  return {
    currentWord,
    currentSentence,
    article,
    articleWords,
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
  };
}
