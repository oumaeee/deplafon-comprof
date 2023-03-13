import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import Button from "@mui/material/Button";

const plafonVariants = [
  "home",
  "celling",
  "wall",
  "floor",
  "town",
  "house",
  "desk",
  "table",
  "chair",
  "dog",
  "cat",
  "mouse",
  "anime",
  "genshin",
  "water",
  "fire",
  "home",
  "celling",
  "wall",
  "floor",
  "town",
  "house",
  "desk",
  "table",
  "chair",
  "dog",
  "cat",
  "mouse",
  "anime",
  "genshin",
  "water",
  "fire",
];
const SmallCatalog = () => {
  const sliderSettings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "ease",
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <Box>
      <Container>
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
            Catalog
          </Typography>
          <Typography
            component="h3"
            sx={{ typography: { sm: "h5", xs: "h6" } }}
            textAlign="center"
          >
            Beberapa varian plafon kami
          </Typography>
          <Slider {...sliderSettings}>
            {plafonVariants.map((item, i) => {
              return (
                <Box key={i}>
                  <Box
                    component="img"
                    src={`https://source.unsplash.com/random/400x400/?${item}`}
                    display="block"
                    sx={{
                      cursor: "pointer",
                      boxShadow: 2,
                      borderRadius: 2,
                      width: "95%",
                    }}
                  />
                </Box>
              );
            })}
          </Slider>
          <Button variant="text" sx={{ alignSelf: "center" }}>
            SEE MORE
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SmallCatalog;
