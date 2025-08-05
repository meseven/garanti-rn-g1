import { create } from "zustand";
import { AvailableLangs } from "../types/users";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Store = {
  lang: AvailableLangs;
  setLang: (lang: AvailableLangs) => void;
};

export const useLangStore = create<Store>()(
  persist(
    (set) => ({
      lang: "tr-TR",
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "lang-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
