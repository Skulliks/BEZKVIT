import { useEffect } from "react";
import { useTitleContext } from "../context/TitleContext";
import { useDictContext } from "../context/DictContext";
import { Box, Typography } from "@mui/material";

export const Support = () => {
  const { setTitle } = useTitleContext();
  const { dict } = useDictContext();

  useEffect(() => {
    if (dict) setTitle(dict.support_title);
  }, [dict, setTitle]);

  if (!dict) return;

  return (
    <>
      <Typography>{dict.citate_text}</Typography>
      <Typography>{dict.citate_author}</Typography>
      <figure className="btnTwint">
        <input
          type="button"
          onClick={() =>
            window.open(
              "https://go.twint.ch/1/e/tw?tw=acq.z45lHa39SEOEv_WSrp_J7DSY-w9j8CGVp71HgWP62oWK6gO4lnG-B6_msjNaQCx4.",
              "_blank"
            )
          }
        ></input>
      </figure>
      <Box>
        {dict.description_support_paragraphe_list.map((item: string) => {
          return <Box key={item}>{item}</Box>;
        })}
      </Box>
    </>
  );
};

export default Support;
