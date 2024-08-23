import { atom } from "jotai";
import { fetchWords } from "./fetchWords";

export const wordsPoolAtom = atom(async (get) => {
  return await fetchWords();
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
