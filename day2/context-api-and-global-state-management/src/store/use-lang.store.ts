import { create } from "zustand";
import { AvailableLangs } from "../types/users";

type Store = {
  lang: AvailableLangs;
  setLang: (lang: AvailableLangs) => void;
};

export const useLangStore = create<Store>()((set) => ({
  lang: "tr-TR",
  setLang: (lang) => set({ lang }),
}));
