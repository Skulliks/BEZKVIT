import { useEffect } from "react";
import { useTitleContext } from "../context/TitleContext";
import { useDictContext } from "../context/DictContext";
import { Box } from "@mui/material";

export const Support = () => {
  const { setTitle } = useTitleContext();
  const { dict } = useDictContext();

  useEffect(() => {
    if (dict) setTitle(dict.support_title);
  }, [dict, setTitle]);

  if (!dict) return;

  return (
    <Box id="contentSuppport">
      <figure className="btnTwint">
        <figcaption>
          <span id="citate_text">{dict.citate_text}</span>
          <span id="citate_author">{dict.citate_author}</span>
        </figcaption>
        <input
          type="button"
          onClick={() =>
            window.open(
              "https://go.twint.ch/1/e/tw?tw=acq.z45lHa39SEOEv_WSrp_J7DSY-w9j8CGVp71HgWP62oWK6gO4lnG-B6_msjNaQCx4.",
              "_blank"
            )
          }
          value={dict["twint-btn-text"]}
        ></input>
      </figure>
      <Box className="support-description">
        {dict.description_support_paragraphe_list.map((item: string) => {
          return <Box key={item}>{item}</Box>;
        })}
      </Box>
    </Box>
  );
};

export default Support;
