import { Outlet } from "react-router-dom";
import Toolbar from "../components/toolbar";
import { Typography } from "@mui/material";
import { useTitleContext } from "../context/TitleContext";

export default function Layout() {
  const { title, isVisible } = useTitleContext();

  return (
    <>
      <Toolbar />
      {isVisible ? (
        <Typography
          sx={{
            backgroundColor: "red",
            padding: "10px",
          }}
        >
          {title}
        </Typography>
      ) : null}
      <Outlet />
    </>
  );
}
