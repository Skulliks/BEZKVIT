import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { LANG_STORAGE_KEY } from "../types";
import { useDictContext } from "../context/DictContext";

export const Toolbar = () => {
  const [open, setOpen] = useState(false);
  const { setLang: setLangContext } = useDictContext();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const setLang = (lang: string) => {
    setLangContext(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  };

  return (
    <>
      <Link to={{ pathname: "/" }}>BEZKVIT</Link>
      <Box>
        <Button onClick={() => setLang("ua")}>UA</Button>/
        <Button onClick={() => setLang("fr")}>FR</Button>
      </Box>
      <Button onClick={toggleDrawer} id="sidebarBtn">
        =
      </Button>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Toolbar;
