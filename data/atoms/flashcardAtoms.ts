import { atom } from "jotai";
import axios from "axios";
import { Word } from "@/types/types";

export const queryAtom = atom(
  "/words/search?created_at_to=2024-08-20&created_at_from=2024-08-01&learning_count_min=1&learning_count_max=5&correct_rate_min=0.1&average_duration_min=5&average_duration_max=5.1&status=completed&correct_rate_max=0.74"
);

export const isLoadingAtom = atom(false);

export const wordsPoolAtom = atom(async (get) => {
  const query = get(queryAtom);
  const response = await axios.get<{ words: Word[] }>(
    process.env.NEXT_PUBLIC_LOCAL_HOST + query
  );
  return response.data.words;
});

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
