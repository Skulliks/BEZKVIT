import { useParams } from "react-router-dom";
import { useTitleContext } from "../context/TitleContext";
import { useEffect, useMemo } from "react";
import { useDictContext } from "../context/DictContext";
import type { ExpositionProps } from "../types";
import NotFound from "./NotFound";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";

export const Exposition = () => {
  const { expositionId } = useParams();
  const { setIsVisible } = useTitleContext();
  const { dict } = useDictContext();

  const allImages = import.meta.glob("/src/assets/expositions/exp_*/*.jpg", {
    eager: true,
  });

  const expositionImages = useMemo(() => {
    return Object.entries(allImages)
      .filter(([key]) => key.includes(`exp_${expositionId}`))
      .map(([_, module]) => (module as any).default)
      .sort((a, b) => {
        const numA = parseInt(a.split("/").pop()?.split(".")[0] || "0");
        const numB = parseInt(b.split("/").pop()?.split(".")[0] || "0");
        return numA - numB;
      });
  }, [expositionId]);

  console.log(expositionImages);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  useEffect(() => {
    setIsVisible(false);

    return () => {
      setIsVisible(true);
    };
  }, []);

  if (!dict) return;

  const currentExposition: ExpositionProps = dict.expositions.find(
    (exposition: ExpositionProps) => exposition.id === Number(expositionId)
  );

  if (currentExposition === undefined) return <NotFound />;

  return (
    <>
      <Carousel arrows responsive={responsive}>
        {expositionImages.map((src, idx) => {
          return (
            <Box key={idx}>
              <img src={src} alt={`exposition_${idx + 1}`} />
            </Box>
          );
        })}
      </Carousel>

      <Typography>{currentExposition.title}</Typography>
      <Typography>{currentExposition.date}</Typography>
      <Typography>{currentExposition.genre}</Typography>
      <Typography>{currentExposition.place}</Typography>
      <Typography>{currentExposition.text}</Typography>
      <ul>
        {currentExposition.list.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
      {currentExposition.srcVideo === "" ? null : (
        <iframe
          src={currentExposition.srcVideo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};
