import { Outlet } from "react-router-dom";
import Toolbar from "../components/toolbar";
import { Box, Typography } from "@mui/material";
import { useTitleContext } from "../context/TitleContext";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Layout() {
  useScrollToTop();
  const { title, isVisible } = useTitleContext();

  return (
    <>
      <Box id="toolbar">
        <Toolbar />
      </Box>
      {isVisible ? (
        <Typography
          className="pageTitle"
          sx={{ fontFamily: "uni_heavy", fontSize: "4rem" }}
        >
          {title}
        </Typography>
      ) : null}
      <Outlet />
    </>
  );
}
