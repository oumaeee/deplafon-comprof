import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
// import gambar from "../assets/image/img65.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
const carouselItems = [1, 2, 3, 5];
const Home = () => {
  return (
    <Box position="relative" width="inherit" maxHeight="100vh" height="100vh">
      <Container
        sx={{
          maxHeight: "inherit",
          width: "inherit",
          height: "inherit",
          display: "flex",
          zIndex: "2",
          position: "relative",
        }}
      >
        <Box
          width="40%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          gap={2}
          sx={{ zIndex: 3 }}
        >
          <Box bgcolor="common.white" p={1} pl={0} width="max-content">
            <Typography variant="h3" component="h1">
              Solusi Plafon yang{" "}
              <span style={{ color: "#1519EA" }}>Inovatif</span>
              <br /> untuk{" "}
              <span style={{ color: "#1519EA" }}>Rumah Impian</span> Anda.
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" maxWidth="80%">
            Amet diam eirmod takimata labore et kasd, sit magna duo dolor sit
            lorem diam lorem, diam stet ipsum at nonumy sit diam at. Dolor est
            lorem dolore sit ipsum consetetur.
          </Typography>
          <Button variant="contained">ORDER NOW</Button>
        </Box>
        <Box
          sx={{
            width: "60%",
            position: "relative",
          }}
        >
          <Carousel
            sx={{
              width: "90%",
              position: "absolute",
              top: "50%",
              left: "-10%",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          >
            {carouselItems.map((item, i) => {
              return (
                <Paper key={i} sx={{ overflow: "hidden" }}>
                  <Box
                    component="img"
                    src="https://source.unsplash.com/1600x900/"
                    width="100%"
                    display="block"
                  />
                </Paper>
              );
            })}
          </Carousel>
          <Paper
            sx={{
              width: "50%",
              overflow: "hidden",
              position: "absolute",
              right: 0,
              bottom: "10%",
            }}
          >
            <Box
              component="img"
              src="https://source.unsplash.com/1600x900/"
              width="100%"
              display="block"
            />
          </Paper>
        </Box>
      </Container>
      <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        width="60%"
        bgcolor="grey.300"
      />
    </Box>
  );
};

export default Home;
