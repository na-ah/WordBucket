import { useEffect, useMemo, useState } from "react";

export default function useIndex(sourceArticle: string) {
  const [currentMode, setCurrentMode] = useState<
    "word" | "sentence" | "paragraph"
  >("word");
  const [currentWord, setCurrentWord] = useState("");
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const wordIndexDecrease = () => {
    setCurrentMode("word");
    if (currentMode !== "word") {
      setWordIndex(0);
      return;
    }
    setWordIndex((prev) => {
      const isFirstWord = prev === 0;
      const isFirstSentence = sentenceIndex === 0;
      const isFirstParagraph = paragraphIndex === 0;

      if (!isFirstWord) {
        return prev - 1;
      }
      if (isFirstWord && !isFirstSentence) {
        setSentenceIndex((prev) => prev - 1);
        return article[paragraphIndex][sentenceIndex - 1].length - 1;
      }
      if (isFirstWord && isFirstSentence && !isFirstParagraph) {
        const previousParagraphLastSentenceIndex =
          article[paragraphIndex - 1].length - 1;
        setParagraphIndex((prev) => prev - 1);
        setSentenceIndex(previousParagraphLastSentenceIndex);
        return (
          article[paragraphIndex - 1][previousParagraphLastSentenceIndex]
            .length - 1
        );
      }
      if (isFirstWord && isFirstSentence && isFirstParagraph) {
        return 0;
      }
      return prev;
    });
  };

  const wordIndexIncrease = () => {
    setCurrentMode("word");
    if (currentMode !== "word") {
      setWordIndex(0);
      return;
    }
    setWordIndex((prev) => {
      const isLastWord =
        prev === article[paragraphIndex][sentenceIndex].length - 1;
      const isLastSentence =
        sentenceIndex === article[paragraphIndex].length - 1;
      const isLastParagraph = paragraphIndex === article.length - 1;

      if (!isLastWord) {
        return prev + 1;
      }
      if (isLastWord && !isLastSentence) {
        setSentenceIndex((prev) => prev + 1);
        return 0;
      }
      if (isLastWord && isLastSentence && !isLastParagraph) {
        setParagraphIndex((prev) => prev + 1);
        setSentenceIndex(0);
        return 0;
      }
      return prev;
    });
  };

  const sentenceIndexDecrease = () => {
    setCurrentMode("sentence");
    if (currentMode !== "sentence") {
      setSentenceIndex((prev) => prev);
      return;
    }
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
    if (currentMode !== "sentence") {
      setSentenceIndex((prev) => prev);
      return;
    }
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
    setCurrentMode("paragraph");
    if (currentMode !== "paragraph") {
      setParagraphIndex((prev) => prev);
      return;
    }
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
    setCurrentMode("paragraph");
    if (currentMode !== "paragraph") {
      setParagraphIndex((prev) => prev);
      return;
    }
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
          .map((sentence) => sentence.split(" ").map((word) => [word]))
      );
  }, [sourceArticle]);

  useEffect(() => {
    setCurrentWord(
      article[paragraphIndex][sentenceIndex][wordIndex].toString()
    );
  }, [paragraphIndex, sentenceIndex, wordIndex, article]);

  return {
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
  };
}
