import { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "../types/theme";
import { getData, storeData } from "../helpers/async-storage";

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

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await getData<Theme>("theme", "light");
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.log("Theme yüklenirken hata:", error);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    storeData("theme", theme);
  }, [theme]);

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
