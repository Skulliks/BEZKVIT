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
  imgName: string;
}

export const FAQ = () => {
  const { setTitle } = useTitleContext();
  const { dict } = useDictContext();
  const imgPath = `${import.meta.env.BASE_URL}members`;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
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
      <div id="about-title">{dict.about_title_content}</div>
      <Carousel
        containerClass="about-box-carousel"
        itemClass="about-carousel-item"
        className="about-carousel"
        responsive={responsive}
      >
        {dict.persons.map((person: PersonProps) => {
          const imgName = `${person.imgName}`;
          return (
            <Box key={person.name} className="about-box-member">
              <figure>
                <img src={`${imgPath}/${imgName}`} alt={imgName} />
                <figcaption>
                  <span>{person.role}</span>
                  <span className="strong">{person.name}</span>
                </figcaption>
              </figure>
            </Box>
          );
        })}
      </Carousel>
      <Box id="about-info">
        {dict.about_sections.map((section: AboutSectionProps) => {
          return (
            <Box key={section.title} className="about-box-info">
              <span className="about-section-title">{section.title}</span>
              {section.description_list.map((pd, idx) => {
                return (
                  <span key={`${pd}-${idx}`} className="about-pd">
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
