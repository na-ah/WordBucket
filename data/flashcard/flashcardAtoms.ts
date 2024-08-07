import { atom } from "jotai";
import { wordsPoolAtom } from "../shared/words";

export const currentDeckIndexAtom = atom(0);
export const batchSizeAtom = atom(10);

export const currentDeckAtom = atom((get) => {
  const wordsPool = get(wordsPoolAtom);
  const batchSize = get(batchSizeAtom);
  const currentDeckIndex = get(currentDeckIndexAtom);

  return wordsPool.slice(
    batchSize * currentDeckIndex,
    batchSize * (currentDeckIndex + 1)
  );
});
