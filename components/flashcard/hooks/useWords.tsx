import { useMemo, useState } from "react";

export default function useWords(
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    {
      question: "dog",
      answer: "犬",
      image: "/dog.png",
      example: [
        "The dog barked loudly at the mailman passing by the house.",
        "She adopted a stray dog and gave it a loving home.",
        "The dog chased its tail in circles, making everyone laugh.",
      ],
      history: [
        {
          date: "2024/08/05 20:20",
          result: "incorrect",
          time: 6.81,
        },
        {
          date: "2024/08/06 20:06",
          result: "correct",
          time: 3.26,
        },
        {
          date: "2024/08/06 20:08",
          result: "correct",
          time: 4.81,
        },
      ],
    },
    {
      question: "apple",
      answer: "りんご",
      image: "/apple.png",
      example: [
        "She picked a ripe apple from the tree and took a bite.",
        "He sliced the apple and added it to his salad for extra crunch.",
        "he teacher placed an apple on her desk as a gift from a student.",
      ],
      history: [
        {
          date: "2024/08/05 20:19",
          result: "correct",
          time: 2.11,
        },
        {
          date: "2024/08/06 20:20",
          result: "correct",
          time: 1.26,
        },
        {
          date: "2024/08/06 20:30",
          result: "incorrect",
          time: 7.33,
        },
      ],
    },
    {
      question: "human",
      answer: "人間",
      image: "/human.png",
      example: [
        "The scientist studied the behavior of human cells under the microscope.",
        "Compassion is one of the most beautiful traits of the human spirit.",
        "Every human has the right to freedom and equality.",
      ],
      history: [
        {
          date: "2024/08/05 20:19",
          result: "incorrect",
          time: 1.31,
        },
        {
          date: "2024/08/06 20:23",
          result: "incorrect",
          time: 2.26,
        },
        {
          date: "2024/08/06 20:30",
          result: "correct",
          time: 1.19,
        },
      ],
    },
  ];
  const currentWord = useMemo(() => {
    return words[currentWordIndex];
  }, [currentWordIndex]);

  function nextWord() {
    setCurrentWordIndex((prevIndex) =>
      prevIndex === words.length - 1 ? prevIndex : prevIndex + 1
    );
  }

  const total = words.length;
  const completed = currentWordIndex + 1;

  function markCorrect() {
    nextWord();
    setIsFront(true);
  }

  function markIncorrect() {
    nextWord();
    setIsFront(true);
  }

  return {
    currentWordIndex,
    setCurrentWordIndex,
    words,
    currentWord,
    nextWord,
    total,
    completed,
    markCorrect,
    markIncorrect,
  };
}
