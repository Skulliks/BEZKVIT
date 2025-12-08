import { createContext, useContext } from "react";
import { useFetchDict } from "../hooks/useServices";

interface DictContextProps {
  lang: string;
  setLang: (lang: string) => void;
}

const DictContext = createContext<DictContextProps | null>(null);

export const DictProvider = DictContext.Provider;

export const useDictContext = () => {
  const data = useContext(DictContext);

  if (!data)
    throw new Error("Can not 'useDictContext' outside of the 'AppProvider'");

  const { data: dict } = useFetchDict();

  return {
    lang: data.lang,
    setLang: data.setLang,
    dict: dict?.data[data.lang],
  };
};
