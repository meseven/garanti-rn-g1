import { create } from "zustand";
import { AvailableLangs } from "../types/users";
import { Theme } from "../types/theme";

type Store = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useThemeStore = create<Store>()((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
