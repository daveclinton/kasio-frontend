import * as React from "react";
import { Flex } from "@chakra-ui/layout";
import carouselOne from "../../assets/carousel.jpeg";
import carouselTwo from "../../assets/carousel1.jpg";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/button";

const HeroCarousel: React.FC = () => {
  const [step, setStep] = React.useState(0);
  const carouselData = [carouselOne, carouselTwo];
  console.log(step);
  return (
    <Flex
      w="100%"
      justify="center"
      m="auto"
      h="320px"
      backgroundImage={carouselData[step]}
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
          <IconButton
            onClick={() => step > 0 && setStep(step - 1)}
            variant="unstyled"
            aria-label=""
            icon={<ArrowBackIcon boxSize="30px" />}
          />
        </Flex>
        <Flex
          align="center"
          justify="center"
          bg="#fff"
          borderRadius="50%"
          h="50px"
          w="50px"
        >
          <IconButton
            onClick={() => step < carouselData.length - 1 && setStep(step + 1)}
            variant="unstyled"
            aria-label=""
            icon={<ArrowForwardIcon boxSize="30px" />}
          />
        </Flex>
      </Flex>
      <Flex m="50px 20px 20px 20px" justify="flex-end">
        <Button minW="160px">Shop Now</Button>
      </Flex>
    </Flex>
  );
};

export default HeroCarousel;
