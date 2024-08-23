import axios from "axios";
import { useEffect, useState } from "react";

export default function Word() {
  const [words, setWords] = useState([]);
  const [meanings, setMeanings] = useState([]);
  useEffect(() => {
    axios
      .get((process.env.NEXT_PUBLIC_LOCAL_HOST + "/words") as string)
      .then((res) => {
        console.log(res.data);
        setWords(res.data.words);
        setMeanings(res.data.meanings);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div>test</div>
      <br />
      {words.map((item, i) => (
        <p key={i}>{item.word}</p>
      ))}
      {meanings.map((item, i) => (
        <p key={i}>{item.meaning}</p>
      ))}
    </>
  );
}
