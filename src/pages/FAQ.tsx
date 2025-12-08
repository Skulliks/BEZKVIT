import { useEffect } from "react";
import { useDictContext } from "../context/DictContext";
import { useTitleContext } from "../context/TitleContext";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface AboutSectionProps {
  title: string;
  description_list: [string];
}

interface PersonProps {
  name: string;
  role: string;
}

export const FAQ = () => {
  const { setTitle } = useTitleContext();
  const { dict } = useDictContext();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  useEffect(() => {
    if (dict) setTitle(dict.about_title);
  }, [dict, setTitle]);

  if (!dict) return;

  return (
    <>
      {dict.about_title_content}
      <Carousel responsive={responsive}>
        {dict.persons.map((person: PersonProps) => {
          return (
            <Box key={person.name}>
              {person.name}
              {person.role}
            </Box>
          );
        })}
      </Carousel>
      <Box>
        {dict.about_sections.map((section: AboutSectionProps) => {
          return (
            <Box key={section.title}>
              {section.title}
              {section.description_list.map((pd) => {
                return (
                  <span
                    key={section.description_list.findIndex((el) => el === pd)}
                  >
                    {pd}
                  </span>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default FAQ;
