import {
  currentDeckAtom,
  getWords,
  wordsPoolAtom,
} from "@/data/atoms/flashcardAtoms";
import { useAtom } from "jotai";
import { Suspense, useEffect } from "react";

export default function Test() {
  const [wordsPool, setWordsPool] = useAtom(wordsPoolAtom);
  const [currentDeck] = useAtom(currentDeckAtom);

  function testFunc() {
    getWords(
      "/words/search?created_at_to=2024-08-20&created_at_from=2024-08-01&learning_count_min=1&learning_count_max=8&correct_rate_min=0.1&average_duration_min=5&average_duration_max=5.1&status=completed&correct_rate_max=0.79"
    ).then((words) => setWordsPool(words));
  }

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <div>{wordsPool.length}</div>
        <div>
          {wordsPool.map((word) => (
            <p key={word.id}>{word.word}</p>
          ))}
        </div>
        <button onClick={testFunc}>buttonnnn</button>
        <button onClick={() => setTest("this is tes")}>testtt</button>
        <div>currentDeck:</div>
        <div>
          {currentDeck.map((deck) => (
            <p>{deck.word}</p>
          ))}
        </div>
      </Suspense>
    </>
  );
}
