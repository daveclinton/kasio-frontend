import * as React from "react";
import HeroCarousel from "./HeroCarousel";
import { Flex, Box } from "@chakra-ui/layout";

const ProductHero: React.FC = () => {
  return (
    <Flex m="auto" maxW="1240px" w="100%" h="100%">
      <HeroCarousel />
      <Box>Hello</Box>
    </Flex>
  );
};

export default ProductHero;
