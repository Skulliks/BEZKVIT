import { createContext, useContext } from "react";

interface TitleContextProps {
  title: string;
  setTitle: (title: string) => void;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const TitleContext = createContext<TitleContextProps | null>(null);

export const TitleProvider = TitleContext.Provider;

export const useTitleContext = () => {
  const data = useContext(TitleContext);

  if (!data)
    throw new Error("Can not 'useTitleContext' outside of the 'AppProvider'");

  return data;
};
