import React from "react";
import MainHeader from "../components/headers/MainHeader";
import Navbar from "../components/headers/Navbar";
import ProductHero from "../components/hero/ProductHero";
import { Box } from "@chakra-ui/layout";

const Landing: React.FC = () => {
  return (
    <Box w="100%">
      <MainHeader />
      <Navbar />
      <Box mt="30px">
        <ProductHero />
      </Box>
    </Box>
  );
};

export default Landing;
