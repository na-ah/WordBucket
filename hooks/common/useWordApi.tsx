import { Example, Meaning, Word } from "@/types/types";
import axios from "axios";

export default function useWordApi() {
  const addNewMeaningApi = (
    newMeaning: string,
    word: Word,
    setWord: (newWord: Word) => void
  ) => {
    if (newMeaning != "") {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${word.id}/meanings?meaning=${newMeaning}`
        )
        .then((res) => {
          const newWord = { ...word, meanings: res.data.word.meanings };
          setWord(newWord);
        })
        .catch((e) => console.log(e));
    }
  };
  const addNewExampleApi = (
    newExample: string,
    word: Word,
    setWord: (newWord: Word) => void
  ) => {
    if (newExample != "") {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${word.id}/examples?example=${newExample}`
        )
        .then((res) => {
          const newWord = { ...word, examples: res.data.word.examples };
          setWord(newWord);
        })
        .catch((e) => console.log(e));
    }
  };
  const editMeaningApi = (
    newMeaning: string,
    word: Word,
    meaning: Meaning,
    setWord: (newWord: Word) => void
  ) => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${word.id}/meanings/${meaning.id}?meaning=${newMeaning}`
      )
      .then((res) => {
        const newWord = { ...word, meanings: res.data.word.meanings };
        setWord(newWord);
      })
      .catch((e) => console.log(e));
  };
  const editExampleApi = (
    newExample: string,
    word: Word,
    example: Example,
    setWord: (newWord: Word) => void
  ) => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${word.id}/examples/${example.id}?example=${newExample}`
      )
      .then((res) => {
        const newWord = { ...word, examples: res.data.word.examples };
        setWord(newWord);
      })
      .catch((e) => console.log(e));
  };
  return {
    addNewMeaningApi,
    editMeaningApi,
    addNewExampleApi,
    editExampleApi,
  };
}
