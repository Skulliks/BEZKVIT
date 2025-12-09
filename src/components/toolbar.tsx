import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { LANG_STORAGE_KEY } from "../types";
import { useDictContext } from "../context/DictContext";
import btnSidebar from "../assets/btn_sidebar.png";

export const Toolbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang: setLangContext } = useDictContext();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const setLang = (lang: string) => {
    setLangContext(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  };

  return (
    <>
      <Box id="toolbar-items">
        <Link id="toolbar-title" to={{ pathname: "/" }}>
          BEZKVIT
        </Link>
        <Button
          id="toolbar-btn-langs"
          onClick={() => setLang(lang === "ua" ? "fr" : "ua")}
        >
          <span style={{ fontWeight: lang === "ua" ? 1000 : 300 }}>UA</span> /{" "}
          <span style={{ fontWeight: lang === "fr" ? 1000 : 300 }}>FR</span>
        </Button>
        <Button onClick={toggleDrawer} id="sidebarBtn">
          <img src={btnSidebar} alt="=" />
        </Button>
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
      </Box>
    </>
  );
};

export default Toolbar;
