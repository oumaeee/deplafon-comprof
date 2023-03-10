import SupportAgent from "@mui/icons-material/SupportAgent";
import Dashboard from "@mui/icons-material/Dashboard";
import Construction from "@mui/icons-material/Construction";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import React from "react";

const cardContents = [
  {
    Icon: SupportAgent,
    title: "Consultation",
    text: "Tim kami yang berpengalaman akan membantu Anda memilih jenis plafon terbaik untuk ruangan Anda.",
  },
  {
    Icon: Dashboard,
    title: "Plafon Options",
    text: "Kami menyediakan lebih dari 50 jenis plafon untuk Anda pilih sesuai kebutuhan.",
  },
  {
    Icon: Construction,
    title: "Installation ",
    text: "Tim instalasi profesional kami akan memasang plafon pilihan Anda dengan hasil yang berkualitas dan cepat.",
  },
];
const Services = () => {
  return (
    <Box position="relative" width="inherit">
      <Container>
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          textAlign="center"
          spacing={3}
          py={5}
        >
          <Typography component="h2" variant="h6" color="text.secondary">
            Services
          </Typography>
          <Typography component="h3" variant="h5">
            Layanan apa yang kami tawarkan?
          </Typography>
          <Stack
            direction="row"
            alignItems="stretch"
            justifyContent="space-between"
            flexDirection={{ sm: "row", xs: "column" }}
            sx={{ height: "auto", gap: 1, width: "100%  " }}
          >
            {cardContents.map(({ Icon, title, text }) => {
              return (
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexWrap: "column",
                    gap: { sm: 2, xs: 1 },
                    width: "100%",
                    p: { md: 3, sm: 2, xs: 3 },
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: { xs: "48px", sm: "64px" },
                      color: "primary.main",
                    }}
                  />
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                </Paper>
              );
            })}
          </Stack>
        </Stack>
      </Container>
      <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        bgcolor="grey.300"
        zIndex="-1"
      />
    </Box>
  );
};

export default Services;
