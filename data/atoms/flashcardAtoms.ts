import { atom } from "jotai";
import axios from "axios";
import { Dashboard, Word } from "@/types/types";
import camelcaseKeys from "camelcase-keys";
import { queryByBoxName } from "../dashboard/query";

// flashcard用単語取得
export const fetchWords = async (newQuery: string) => {
  try {
    const response = await axios.get<{ words: Word[] }>(
      process.env.NEXT_PUBLIC_LOCAL_HOST + (newQuery || "")
    );
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words: ", error);
  }
};

// dashboard用単語取得
export const fetchDashboard = async () => {
  try {
    const response = await axios.get<Dashboard>(
      process.env.NEXT_PUBLIC_LOCAL_HOST + "/dashboard"
    );
    return camelcaseKeys(response.data);
  } catch (error) {
    console.error("Error fetching words: ", error);
  }
};

// 取得した単語一覧のプール
export const queryAtom = atom(queryByBoxName["inProgress"]);
export const wordsPoolAtom = atom(async (get) => {
  const query = get(queryAtom);
  const response = await axios.get<{ words: Word[] }>(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST}${query}`
  );
  const data: Word[] = await response.data.words;
  return data;
});

// プールからflashcardで使用するデッキを切り出す
// 現在のデッキのインデックス
export const currentDeckIndexAtom = atom(0);

// 1デッキあたりののカード枚数
export const batchSizeAtom = atom(10);

// 現在のデッキのカードリスト
export const currentDeckAtom = atom(async (get) => {
  const wordsPool = await get(wordsPoolAtom);
  const batchSize = get(batchSizeAtom);
  const currentDeckIndex = get(currentDeckIndexAtom);

  return wordsPool.slice(
    batchSize * currentDeckIndex,
    batchSize * (currentDeckIndex + 1)
  );
});

// flashcardの結果画面を表示するかどうかのフラグ
export const isResultShownAtom = atom(false);
