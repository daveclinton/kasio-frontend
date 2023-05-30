import * as React from "react";
import { Button, IconButton } from "@chakra-ui/button";
import { Divider, Flex, Text } from "@chakra-ui/layout";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Image } from "@chakra-ui/react";
import { categories } from "../utils/ProductCategories";

const Dashboard = () => {
  const [step, setStep] = React.useState(0);
  const cardImage = [
    "https://skygarden.azureedge.net/media/original_images/Site-Home-page-7.jpg",
    "https://skygarden.azureedge.net/media/original_images/Site-Home-page-1.jpg",
    "https://skygarden.azureedge.net/media/original_images/Site-Home-page-6.jpg",
    "https://skygarden.azureedge.net/media/original_images/Site-Home-page-4_pHunkNV.jpg",
  ];
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % cardImage.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [cardImage.length]);
  return (
    <Flex w="100%">
      <Flex
        w="100%"
        justify="center"
        gap="20px"
        align="center"
        flexDir="column"
      >
        <Flex
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          w="80%"
          h="329px"
          flexDir="column"
          justify="center"
          backgroundImage={`url(${cardImage[step]})`}
          animation="slide 0.5s ease-in-out forwards"
          transition="background-image 0.5s ease-in-out"
        >
          <Flex w="100%" p="15% 10px" justify="space-between">
            <IconButton
              aria-label="left-arrow"
              variant="outline"
              isDisabled={step === 0}
              color="primaryYellow"
              borderRadius="50%"
              zIndex={2}
              onClick={() => {
                step > 0 && setStep(step - 1);
              }}
            >
              <BiLeftArrowAlt size="40px" />
            </IconButton>

            <IconButton
              aria-label="right-arrow"
              variant="outline"
              color="primaryYellow"
              isDisabled={step === cardImage.length - 1}
              borderRadius="50%"
              zIndex={2}
              onClick={() => {
                setStep(step + 1);
              }}
            >
              <BiRightArrowAlt size="40px" />
            </IconButton>
          </Flex>
        </Flex>
        <Flex
          w="80%"
          boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)"
          p="20px"
          justify="space-between"
        >
          <Flex display={{ base: "none", md: "flex" }} gap="20px">
            <Button variant="secondary">Computing Essentials</Button>
            <Button variant="secondary">Office</Button>
            <Divider orientation="vertical" borderWidth="3px" />
          </Flex>
          <Button w={{ base: "100%", md: "auto" }} flex="end" variant="primary">
            See Deals
          </Button>
        </Flex>
        <Flex w="80%" justify="center" flexWrap="wrap">
          {categories.map(({ name, image }, data) => (
            <Flex
              flexDir="column"
              justify="space-between"
              key={data}
              w={{ base: "130px", md: "150px", lg: "220px" }}
              boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)"
              borderRadius="8px"
              ml="25px"
              p={{ base: "20px", md: "auto" }}
              mb="25px"
              cursor="pointer"
            >
              <Image src={image} maxH="160px" />
              <Text
                fontWeight={700}
                textTransform="capitalize"
                textAlign="center"
              >
                {name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
