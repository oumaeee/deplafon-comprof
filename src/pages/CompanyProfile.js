import Box from "@mui/material/Box";
import React from "react";
import Home from "../component/company profile/Home";
import OptionStyle from "../component/company profile/OptionStyle";
import Portfolio from "../component/company profile/Portfolio";
import Services from "../component/company profile/Services";
import SmallCatalog from "../component/company profile/SmallCatalog";
const CompanyProfile = () => {
  return (
    <Box sx={{ width: "100%", height: "600vh" }}>
      <Home />
      <Services />
      <OptionStyle />
      <Portfolio />
      <SmallCatalog />
    </Box>
  );
};

export default CompanyProfile;
