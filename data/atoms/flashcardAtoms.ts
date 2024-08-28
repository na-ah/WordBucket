import { atom, useAtom } from "jotai";
import axios from "axios";
import { Dashboard, Word } from "@/types/types";
import camelcaseKeys from "camelcase-keys";
import { queryByBoxName } from "../dashboard/query";

export const isLoadingAtom = atom(false);

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

export const fetchDashboard = async () => {
  try {
    const response = await axios.get<Dashboard>(
      process.env.NEXT_PUBLIC_LOCAL_HOST + "/dashboard"
    );
    console.log(response.data);

    return camelcaseKeys(response.data);
  } catch (error) {
    console.error("Error fetching words: ", error);
  }
};

export const wordsPoolAtom = atom<Word>(
  fetchWords(`${queryByBoxName["mediumAccuracyRate"]}`)
);

export const currentDeckIndexAtom = atom(0);
export const batchSizeAtom = atom(10);

export const currentDeckAtom = atom(async (get) => {
  const wordsPool = await get(wordsPoolAtom);
  const batchSize = get(batchSizeAtom);
  const currentDeckIndex = get(currentDeckIndexAtom);

  return wordsPool.slice(
    batchSize * currentDeckIndex,
    batchSize * (currentDeckIndex + 1)
  );
});
