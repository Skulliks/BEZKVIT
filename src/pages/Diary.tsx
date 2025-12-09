import { useEffect } from "react";
import { useDictContext } from "../context/DictContext";
import { useTitleContext } from "../context/TitleContext";
import { Box } from "@mui/material";

interface EventProps {
  month: string;
  day: number;
  title: string;
}

export const Diary = () => {
  const { setTitle } = useTitleContext();
  const { dict } = useDictContext();

  useEffect(() => {
    if (dict) setTitle(dict.diary_title);
  }, [dict, setTitle]);

  if (!dict) return;

  return (
    <Box className="content">
      {dict.events.map((event: EventProps) => {
        return (
          <Box key={event.title}>
            {event.month}
            {event.day}
            {event.title}
          </Box>
        );
      })}
    </Box>
  );
};

export default Diary;
