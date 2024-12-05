import { atom } from "jotai";
// 当前页面下滑高度
export const pageScrollLocationAtom = atom(0);
//当前页面状态(上滑|下滑)
export const pageScrollDirectionAtom = atom<"up" | "down" | null>(null);
