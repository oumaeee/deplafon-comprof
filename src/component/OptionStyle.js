import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Stack from "@mui/system/Stack";
import { elegant, modern, stylish } from "../assets/image/option style";
const OptionStyle = () => {
  return (
    <Box>
      <Container>
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          textAlign="center"
          spacing={3}
          py={5}
        >
          <Typography component="h2" variant="body1" color="text.secondary">
            Yang Mana Pilihan Anda?
          </Typography>
          <Typography
            component="h3"
            sx={{ typography: { sm: "h5", xs: "h6" } }}
          >
            Plafon dengan Gaya Minimalist yang{" "}
            <b style={{ color: "#1519EA" }}>Elegant,</b> Plafon Mewah{" "}
            <b style={{ color: "#1519EA" }}>Modern </b> yang menakjubkan atau
            Plafon dengan gaya yang{" "}
            <b style={{ color: "#1519EA" }}>Stylish? </b>
          </Typography>
          <Box position="relative">
            <Box
              width="35%"
              textAlign="center"
              position="absolute"
              top={0}
              left={0}
            >
              <Box
                component="img"
                alt="Modern Plafon Image"
                src={modern}
                width="100%"
                display="block"
                borderRadius={1}
                border={5}
                borderColor="common.white"
                boxShadow={2}
              />
              <Typography variant="body1" color="text.secondary" mt={1}>
                Modern
              </Typography>
            </Box>
            <Box
              width="35%"
              textAlign="center"
              position="absolute"
              top={16}
              left="50%"
              zIndex={2}
              sx={{ transform: "translateX(-50%)" }}
            >
              <Box
                component="img"
                alt="Modern Plafon Image"
                src={stylish}
                width="100%"
                display="block"
                borderRadius={1}
                border={5}
                borderColor="common.white"
                boxShadow={2}
              />
              <Typography variant="body1" color="text.secondary" mt={1}>
                Stylish
              </Typography>
            </Box>
            <Box
              width="35%"
              textAlign="center"
              position="absolute"
              top={0}
              right={0}
            >
              <Box
                component="img"
                alt="Modern Plafon Image"
                src={elegant}
                width="100%"
                display="block"
                borderRadius={1}
                border={5}
                borderColor="common.white"
                boxShadow={2}
              />
              <Typography variant="body1" color="text.secondary" mt={1}>
                Elegant
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default OptionStyle;
