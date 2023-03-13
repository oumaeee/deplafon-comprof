import React from "react";
import "../assets/stylesheet/portfolio.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import IconButton from "@mui/material/IconButton";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
const portfolioItems = [
  "home",
  "celling",
  "wall",
  "floor",
  "town",
  "house",
  "desk",
  "table",
  "chair",
];
const Portfolio = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "portfolio-slider",
    centerPadding: "0px",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };
  return (
    <Box bgcolor="grey.300">
      <Container disableGutters>
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          spacing={3}
          py={5}
        >
          <Typography
            component="h2"
            variant="body1"
            color="text.secondary"
            textAlign="center"
          >
            Product
          </Typography>
          <Typography
            component="h3"
            sx={{ typography: { sm: "h5", xs: "h6" } }}
            textAlign="center"
          >
            Plafon yang Telah Kami Buat
          </Typography>
          <Slider {...sliderSettings}>
            {portfolioItems.map((item, i) => {
              return (
                <Box
                  key={i}
                  component="img"
                  src={`https://source.unsplash.com/random/1600x900/?${item}`}
                  display="block"
                  sx={{ cursor: "pointer" }}
                />
              );
            })}
          </Slider>
        </Stack>
      </Container>
    </Box>
  );
};

export default Portfolio;
