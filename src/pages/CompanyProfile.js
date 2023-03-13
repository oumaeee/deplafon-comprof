import Box from "@mui/material/Box";
import React from "react";
import Home from "../component/Home";
import OptionStyle from "../component/OptionStyle";
import Portfolio from "../component/Portfolio";
import Services from "../component/Services";
const CompanyProfile = () => {
  return (
    <Box sx={{ width: "100%", height: "600vh" }}>
      <Home />
      <Services />
      <OptionStyle />
      <Portfolio />
      <div>a</div>
    </Box>
  );
};

export default CompanyProfile;
