import React from "react";
import MainHeader from "../components/headers/MainHeader";
import Navbar from "../components/headers/Navbar";
import { Box } from "@chakra-ui/layout";

const Landing: React.FC = () => {
  return (
    <Box w="100%">
      <MainHeader />
      <Navbar />
    </Box>
  );
};

export default Landing;
