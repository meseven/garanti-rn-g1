import { createContext, useContext, useState } from "react";
import { Theme } from "../types/theme";

type ContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ContextType | undefined>(undefined);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme hook must be call inside ThemeContextProvider.");
  }

  return context;
};
