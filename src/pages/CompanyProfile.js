import Box from "@mui/material/Box";
import React from "react";
import Home from "../component/Home";
import OptionStyle from "../component/OptionStyle";
import Services from "../component/Services";

const CompanyProfile = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Home />
      <Services />
      <OptionStyle />
    </Box>
  );
};

export default CompanyProfile;
