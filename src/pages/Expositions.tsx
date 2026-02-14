import { useTitleContext } from "../context/TitleContext";
import { useDictContext } from "../context/DictContext";
import { useEffect, useState } from "react";
import type { ExpositionProps } from "../types";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Affiche from "../assets/affiche.jpg";

export const Expositions = () => {
  const { setTitle } = useTitleContext();
  const { dict } = useDictContext();
  const [expositions, setExpositions] = useState<ExpositionProps[]>();

  useEffect(() => {
    if (dict) setTitle(dict.exposition_title);
  }, [dict, setTitle]);

  useEffect(() => {
    if (dict)
      setExpositions(
        dict.expositions.sort(
          (a: ExpositionProps, b: ExpositionProps) => b.id - a.id,
        ),
      );
  }, [dict]);

  if (!dict || !expositions) return;

  return (
    <>
      {dict.next_exposition_title && (
        <Box id="next-exposition-box">
          <h1>{dict.next_exposition_title}</h1>
          <figure>
            <img src={Affiche} alt="Affiche" />
          </figure>
        </Box>
      )}
      <h1 className="title_our_exp">{dict.exp_title}</h1>
      <Box id="contentExpositions">
        {expositions.map((exposition) => {
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
    </>
  );
};

export default Expositions;
