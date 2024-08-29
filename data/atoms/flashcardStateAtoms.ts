import { atom } from "jotai";

export const isFrontAtom = atom(true);
export const currentWordIndexAtom = atom(0);
export const timeLimitAtom = atom(5 * 200);
