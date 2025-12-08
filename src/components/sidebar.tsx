import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { useDictContext } from "../context/DictContext";

interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
}

export const Sidebar = ({ open, toggleDrawer }: SidebarProps) => {
  const { dict } = useDictContext();

  if (!dict) return;

  return (
    <>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        anchor="right"
        id="sidebar"
        PaperProps={{
          sx: {},
        }}
      >
        <Link to={{ pathname: "expositions" }} onClick={toggleDrawer}>
          {dict.main_title}
        </Link>
        <Link to={{ pathname: "support" }} onClick={toggleDrawer}>
          {dict.support_title}
        </Link>
        <Link to={{ pathname: "faq" }} onClick={toggleDrawer}>
          {dict.about_title}
        </Link>
        <Link to={{ pathname: "diary" }} onClick={toggleDrawer}>
          {dict.diary_title}
        </Link>
      </Drawer>
    </>
  );
};

export default Sidebar;
