import * as React from "react";
import { Flex, Heading, Link } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { ChevronDownIcon, Icon, HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { Input } from "@chakra-ui/input";
import { GiShoppingCart } from "react-icons/gi";
import { useMediaQuery } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 740px)");
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      minH="72px"
      color="white"
      bg="#231f20"
      mt="32px"
    >
      {isLargerThanMd ? (
        <Flex
          p="20px"
          w="100%"
          maxW="1240px"
          justify="space-between"
          gap="20px"
        >
          <Flex>
            <Heading fontSize="30px" fontStyle="italic">
              Kasio
            </Heading>
            <Menu>
              <MenuButton
                as={Button}
                bg="none"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                rightIcon={<ChevronDownIcon />}
              >
                Categories
              </MenuButton>

              <MenuList color="black">
                <MenuItem>Track Order</MenuItem>
                <MenuItem>Return Policy</MenuItem>
                <MenuItem>Live Chat</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Input
            maxW="50%"
            position="static"
            bg="#fff"
            placeholder="Search for products, shops and categories"
          />
          <Flex justify="space-between" gap="30px">
            <Flex justify="space-between" align="center" gap="10px">
              <Link whiteSpace="nowrap">Log In</Link>
              <Avatar boxSize="30px" />
            </Flex>
            <Flex justify="space-between" align="center" gap="10px">
              <Link>Cart</Link>
              <Icon as={GiShoppingCart} boxSize="30px" />
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          p="20px"
          w="100%"
          gap="20px"
          justify="space-between"
          flexDir="column"
        >
          <Flex w="100%" justify="space-between">
            <Flex justify="space-between" gap="20px" align="center">
              <HamburgerIcon />
              <Heading fontSize="20px" fontStyle="italic">
                Kasio
              </Heading>
            </Flex>
            <Flex justify="space-between" gap="40px" align="center">
              <Avatar boxSize="30px" />
              <Icon as={GiShoppingCart} boxSize="30px" />
            </Flex>
          </Flex>
          <Input
            position="static"
            bg="#fff"
            placeholder="Search for products, shops and categories"
          />
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
