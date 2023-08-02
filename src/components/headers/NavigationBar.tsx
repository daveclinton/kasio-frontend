import * as React from "react";
import { Box, Center, Text, Flex, HStack, Link } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Icon } from "@chakra-ui/icon";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { TbTruckDelivery } from "react-icons/tb";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { GrFavorite } from "react-icons/gr";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import Logo from "../../assets/KASIO.svg";
import { HamburgerIcon } from "@chakra-ui/icons";

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
      <Center display={{ base: "none", lg: "flex" }} w="100%">
        <Center
          p={{ base: "20px", lg: "10px" }}
          maxW={{ md: "70%" }}
          w="100%"
          justifyContent="space-between"
        >
          <Flex visibility={{ base: "hidden", lg: "visible" }} align="center">
            <Icon as={TbTruckDelivery} color="primaryYellow" />
            <Text fontSize="13px">
              FREE Delivery in Migori On Orders Ksh.5,000+
            </Text>
          </Flex>
          <Flex align="center" fontSize="14px" fontWeight={400} gap="20px">
            <Flex gap="20px">
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
      <Center h="80px" w="100%">
        <Center
          p={{ base: "0px", lg: "10px" }}
          maxW={{ base: "90%", lg: "70%" }}
          w="100%"
          justifyContent="space-between"
        >
          <Flex cursor="pointer" align="center">
            <IconButton
              display={{ base: "block", lg: "none" }}
              aria-label="Click Categories"
              icon={<HamburgerIcon boxSize="30px" color="primaryYellow" />}
            />
            <Image
              mr="10px"
              src={Logo}
              boxSize={{ base: "120px", md: "100px" }}
            />
          </Flex>
          <Flex
            visibility={{ base: "hidden", lg: "visible" }}
            w="50%"
            align="center"
          >
            <InputGroup>
              <Input
                border="2px solid"
                borderColor="primaryYellow"
                color="darkGrey"
                placeholder="Search all items"
                _hover={{ border: "2px solid", borderColor: "primaryYellow" }}
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <InputRightElement borderRightRadius="10px" bg="primaryYellow">
                <Icon as={BiSearch} color="white" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex align="center" fontSize="14px" fontWeight={400} gap="20px">
            <Flex align="center" gap="20px">
              <Icon as={RxAvatar} boxSize="50px" />
              <Box>
                <Text>Welcome</Text>
                <Text
                  color="#282d3b"
                  fontWeight={700}
                  fontSize={["12px", "16px"]}
                  whiteSpace="nowrap"
                >
                  My Account
                </Text>
              </Box>
              <Icon as={GrFavorite} boxSize="30px" />
              <Icon as={BiShoppingBag} boxSize="30px" />
            </Flex>
          </Flex>
        </Center>
      </Center>
      <Center display={{ base: "flex", lg: "none" }} w="100%">
        <Center w="90%">
          <InputGroup>
            <Input
              border="2px solid"
              borderColor="primaryYellow"
              color="darkGrey"
              placeholder="Search all items"
              _hover={{ border: "2px solid", borderColor: "primaryYellow" }}
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
            <InputRightElement borderRightRadius="10px" bg="primaryYellow">
              <Icon as={BiSearch} color="white" />
            </InputRightElement>
          </InputGroup>
        </Center>
      </Center>
      <Center display={{ base: "none", lg: "flex" }} h="80px" w="100%">
        <Center
          p={{ base: "0px", lg: "10px" }}
          maxW={{ base: "90%", lg: "70%" }}
          w="100%"
          justifyContent="flex-start"
        >
          <Button
            leftIcon={<HamburgerIcon />}
            bg="primaryYellow"
            color="white"
            variant="solid"
            _hover={{ bg: "primaryYellow", color: "white" }}
          >
            ALL CATEGORIES
          </Button>
          <HStack ml="30px" spacing="24px">
            <Link>Home</Link>
            <Link>Shop</Link>
            <Link>About</Link>
          </HStack>
        </Center>
      </Center>
    </Box>
  );
};

export default NavigationBar;
