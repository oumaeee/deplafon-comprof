import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
// import gambar from "../assets/image/img65.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
const carouselItems = ["plafon", "vinyl", "interior", "wall"];
const Home = () => {
  return (
    <Box
      position="relative"
      width="inherit"
      maxHeight="100vh"
      sx={{
        height: { md: "100vh", sm: "80vh" },
        maxHeight: "1000px",
      }}
    >
      <Container
        sx={{
          maxHeight: "inherit",
          width: "inherit",
          height: "inherit",
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          zIndex: "2",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { sm: "40%", xs: "100%" },
            height: { sm: "100%" },
            textAlign: { sm: "start", xs: "center" },
            alignItems: { sm: "start", xs: "center" },
            pb: { md: 0, xs: 5 },
            pt: { md: 0, md: 5, xs: 3 },
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={2}
          zIndex={3}
        >
          <Paper
            bgcolor="common.white"
            sx={{
              p: { sm: 1, xs: 3 },
              pl: { sm: 0 },
              width: "max-content",
              boxShadow: { sm: 0, xs: 2 },
            }}
          >
            <Typography
              sx={{ typography: { lg: "h3", md: "h4", xs: "h5" } }}
              component="h1"
            >
              Solusi Plafon yang{" "}
              <span style={{ color: "#1519EA" }}>Inovatif</span>
              <br /> untuk{" "}
              <span style={{ color: "#1519EA" }}>Rumah Impian</span> Anda.
            </Typography>
          </Paper>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ width: { sm: "80%", xs: "100%" } }}
          >
            De Plafon adalah supplier produk seperti Plafon PVC, Wallboard, dan
            Vinyl yang berkualitas tinggi dan ramah lingkungan.
          </Typography>
          <Button variant="contained">ORDER NOW</Button>
        </Box>
        <Box
          position="relative"
          sx={{
            width: { sm: "60%", xs: "100%" },
            display: { xs: "flex" },
            justifyContent: { xs: "center" },
            alignItems: { xs: "center" },
            mt: { xs: "56px", md: 0 },
            mb: { xs: 3, md: 0 },
            pt: { xs: 3, md: 0 },
          }}
        >
          <Carousel
            sx={{
              width: { sm: "100%", xs: "80%" },
              position: { sm: "absolute" },
              top: { sm: "50%" },
              left: { sm: "-10%" },
              transform: {
                sm: "translateY(-50%)",
              },
              zIndex: 2,
            }}
          >
            {carouselItems.map((item, i) => {
              return (
                <Paper key={i} sx={{ overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={`https://source.unsplash.com/random/1600x900/?${item}`}
                    width="100%"
                    display="block"
                  />
                </Paper>
              );
            })}
          </Carousel>
          <Paper
            sx={{
              width: { sm: "40%", xs: "30%" },
              overflow: "hidden",
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(70%)",
            }}
          >
            <Box
              component="img"
              src="https://source.unsplash.com/random/1600x900"
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
        bgcolor="grey.300"
        sx={{
          width: { sm: "60%", xs: "100%" },
          height: {
            sm: "100%",
            // xs: "calc(56px + 32px + 30px + 16px + 32px + 80vw * 2 / 3)",
            xs: "calc(166px +  80vw * 2 / 3)",
          },
        }}
      />
    </Box>
  );
};

export default Home;
