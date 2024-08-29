import { atom } from "jotai";
import { currentDeckAtom } from "./flashcardAtoms";

export const isFrontAtom = atom(true);
export const currentWordIndexAtom = atom(0);

export const currentWordAtom = atom(async (get) => {
  const currentDeck = await get(currentDeckAtom);
  const currentWordIndex = get(currentWordIndexAtom);

  return currentDeck[currentWordIndex];
});
export const timeLimitAtom = atom(5 * 1000);
