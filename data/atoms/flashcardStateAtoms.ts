import { atom } from "jotai";
import { currentDeckAtom } from "./flashcardAtoms";
import { Word } from "@/types/types";

export const isFrontAtom = atom(true);
export const currentWordIndexAtom = atom(0);

export const currentWordAtom = atom(async (get) => {
  const currentDeck = await get(currentDeckAtom);
  const currentWordIndex = get(currentWordIndexAtom);

  return currentDeck[currentWordIndex];
});
export const timeLimitAtom = atom(5 * 1000);

export const answeredDeckIdAtom = atom<number[]>([]);
export const answeredDeckDataAtom = atom<Word[]>([]);
