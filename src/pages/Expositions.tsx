import { useTitleContext } from "../context/TitleContext";
import { useDictContext } from "../context/DictContext";
import { useEffect } from "react";
import type { ExpositionProps } from "../types";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const Expositions = () => {
  const { setTitle } = useTitleContext();
  const { dict } = useDictContext();

  useEffect(() => {
    if (dict) setTitle(dict.exposition_title);
  }, [dict, setTitle]);

  if (!dict) return;

  return (
    <Box className="content">
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
    </Box>
  );
};

export default Expositions;
