import { createContext, useContext, useState } from "react";
import { AvailableLangs } from "../types/users";

type ContextType = {
  lang: AvailableLangs;
  changeLang: (lang: AvailableLangs) => void;
};

const LangContext = createContext<ContextType | undefined>(undefined);

type LangContextProviderProps = {
  children: React.ReactNode;
};

export const LangContextProvider = ({ children }: LangContextProviderProps) => {
  const [lang, setLang] = useState<AvailableLangs>("tr-TR");

  const changeLang = (selectedLang: AvailableLangs) => setLang(selectedLang);

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);

  if (context === undefined) {
    throw new Error("useLang hook must be call inside LangContextProvider.");
  }

  return context;
};
