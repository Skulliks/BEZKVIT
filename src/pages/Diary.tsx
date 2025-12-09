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
    <Box id="contentDiary">
      {dict.events.map((event: EventProps) => {
        return (
          <Box key={event.title} className="diary-one-box">
            <span className="diary-month">{event.month}</span>
            <span className="diary-day">{event.day}</span>
            <span className="diary-title">{event.title}</span>
          </Box>
        );
      })}
    </Box>
  );
};

export default Diary;
