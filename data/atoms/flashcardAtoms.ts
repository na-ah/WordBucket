import { atom, useAtom } from "jotai";
import axios from "axios";
import { Dashboard, Word } from "@/types/types";
import camelcaseKeys from "camelcase-keys";

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

export const getWords = async (query: string) => {
  try {
    const words = await fetchWords(query);
    return words;
  } catch (error) {
    console.error("Error fetching words: ", error);
  }
};

export const poolAtom = atom<Word[]>([]);

export const wordsPoolAtom = atom([]);

// export const wordsPoolAtom = atom(async (get) => {
//   try {
//     const query = get(queryAtom);
//     const response = await axios.get<{ words: Word[] }>(
//       process.env.NEXT_PUBLIC_LOCAL_HOST + (query || "")
//     );

//     return response.data.words;
//   } catch (error) {
//     console.error("Error fetchin words:", error);
//     throw error;
//   }
// });

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
