import { Outlet } from "react-router-dom";
import Toolbar from "../components/toolbar";
import { Box, Typography } from "@mui/material";
import { useTitleContext } from "../context/TitleContext";

export default function Layout() {
  const { title, isVisible } = useTitleContext();

  return (
    <>
      <Box id="toolbar">
        <Toolbar />
      </Box>
      {isVisible ? (
        <Typography className="pageTitle">{title}</Typography>
      ) : null}
      <Outlet />
    </>
  );
}
