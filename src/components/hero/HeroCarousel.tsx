import * as React from "react";
import { Flex } from "@chakra-ui/layout";
import carouselOne from "../../assets/carousel.jpeg";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

const HeroCarousel: React.FC = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      m="auto"
      h="320px"
      backgroundImage={carouselOne}
      flexDir="column"
    >
      <Flex p="20px" align="center" justify="space-between" w="100%">
        <Flex
          align="center"
          justify="center"
          bg="#fff"
          borderRadius="50%"
          h="50px"
          w="50px"
        >
          <ArrowBackIcon boxSize="30px" />
        </Flex>
        <Flex
          align="center"
          justify="center"
          bg="#fff"
          borderRadius="50%"
          h="50px"
          w="50px"
        >
          <ArrowForwardIcon boxSize="30px" />
        </Flex>
      </Flex>
      <Flex m="20px" justify="flex-end">
        <Button minW="160px">Shop Now</Button>
      </Flex>
    </Flex>
  );
};

export default HeroCarousel;
