import Layout from "@/components/Template/Layout/Layout";
import axios from "axios";
import { atom, Provider, useAtom, useSetAtom } from "jotai";
import { Suspense } from "react";

type PostData = {
  by: string;
  descendants?: number;
  id: number;
  kids?: number[];
  parent: number;
  score?: number;
  text?: string;
  time: number;
  title?: string;
  type: "comment" | "story";
  url?: string;
};

const postId = atom(9001);
const postData = atom(async (get) => {
  const id = get(postId);
  const response = await axios.get<PostData>(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  // const response = await fetch(
  //   `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  // );
  // const data: PostData = await response.json();
  const data: PostData = await response.data;
  // return axios
  //   .get<PostData>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  //   .then((response) => response.data);

  return data;
});

function Id() {
  const [id] = useAtom(postId);
  return id;
}

function Next() {
  const setPostId = useSetAtom(postId);
  return (
    <button onClick={() => setPostId((id) => id + 1)}>
      <div>→</div>
    </button>
  );
}

function PostTitle() {
  const [{ by, text, time, title, url }] = useAtom(postData);

  return (
    <>
      <h2>{by}</h2>
      <h6>{new Date(time * 1000).toLocaleDateString("en-US")}</h6>
      {title && <h4>{title}</h4>}
      {url && <a href={url}>{url}</a>}
      {/* {text && <div>{Parser(text)}</div>} */}
      {text && <div>{text}</div>}
    </>
  );
}

function TestData() {
  const [data] = useAtom(postData);

  return <>{data && <p>{data.text[0]}</p>}</>;
}

export default function Home() {
  return (
    <>
      <Id />
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          {/* <PostTitle /> */}
          <TestData />
        </Suspense>
      </div>
      <Next />
      {/* <Layout>
        <div>aaa</div>
      </Layout> */}
    </>
  );
}
