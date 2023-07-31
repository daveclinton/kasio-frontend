import * as React from "react";
import { Box, Center, Text, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { TbTruckDelivery } from "react-icons/tb";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const NavigationBar: React.FC = () => {
  return (
    <Box>
      <Center color="#fff" w="100%" bg="darkGrey" gap="20px" p="10px">
        <Text>Get Awesome Deals at KASIO</Text>
        <Button
          p="0.52m 2em"
          bg="transparent"
          borderWidth="3px"
          borderRadius="0.25rem"
          borderColor="primaryYellow"
          _hover={{ bg: "transparent" }}
        >
          SHOP NOW!
        </Button>
      </Center>
      <Center w="100%">
        <Center p="10px" maxW="80%" w="100%" justifyContent="space-between">
          <Flex visibility={{ base: "hidden", lg: "visible" }} align="center">
            <Icon as={TbTruckDelivery} color="primaryYellow" />
            <Text fontSize="13px">
              FREE Delivery in Migori On Orders Ksh.5,000+
            </Text>
          </Flex>
          <Flex align="center" fontSize="14px" fontWeight={400} gap="20px">
            <Flex display={{ base: "none", lg: "flex" }} gap="20px">
              <Text>My Account</Text>
              <Text>Cart</Text>
              <Text>Login</Text>
            </Flex>
            <Flex gap="20px">
              <Icon as={BsInstagram} color="primaryYellow" />
              <Icon as={BsFacebook} color="primaryYellow" />
              <Icon as={BsTwitter} color="primaryYellow" />
            </Flex>
          </Flex>
        </Center>
      </Center>
    </Box>
  );
};

export default NavigationBar;
