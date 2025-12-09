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
    <Box id="contentExpositions">
      {dict.expositions.map((exposition: ExpositionProps) => {
        return (
          <Link
            to={{ pathname: `/exposition/${exposition.id}` }}
            key={exposition.title}
            style={{
              display: "block",
            }}
          >
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}exp_previews/${
                  exposition.previewName
                }`}
                alt=""
              />
              <figcaption>
                <strong className="strong">{exposition.date}</strong>
                {exposition.title}
              </figcaption>
            </figure>
          </Link>
        );
      })}
    </Box>
  );
};

export default Expositions;
