import { useTitleContext } from "../context/TitleContext";
import { useDictContext } from "../context/DictContext";
import { useEffect } from "react";
import type { ExpositionProps } from "../types";
import { Link } from "react-router-dom";

export const Expositions = () => {
  const { setTitle } = useTitleContext();
  const { dict } = useDictContext();

  useEffect(() => {
    if (dict) setTitle(dict.exposition_title);
  }, [dict, setTitle]);

  if (!dict) return;

  return (
    <>
      {dict.expositions.map((exposition: ExpositionProps) => {
        return (
          <Link
            to={{ pathname: `/exposition/${exposition.id}` }}
            key={exposition.title}
            style={{
              display: "block",
            }}
          >
            {exposition.date}
            {exposition.title}
          </Link>
        );
      })}
    </>
  );
};

export default Expositions;
