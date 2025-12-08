import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Layout from "./layouts/index.tsx";
import { DictProvider } from "./context/DictContext.ts";
import { TitleProvider } from "./context/TitleContext.ts";
import { useState } from "react";
import { LANG_STORAGE_KEY } from "./types/index.ts";

export default function App() {
  const queryClient = new QueryClient();
  const [lang, setLang] = useState(
    localStorage.getItem(LANG_STORAGE_KEY) ?? "ua"
  );
  const [title, setTitle] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DictProvider value={{ lang, setLang }}>
          <TitleProvider value={{ title, setTitle, isVisible, setIsVisible }}>
            <Layout />
          </TitleProvider>
        </DictProvider>
      </QueryClientProvider>
    </>
  );
}
