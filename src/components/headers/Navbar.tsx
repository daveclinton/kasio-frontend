import * as React from "react";
import { Flex, Heading, Link } from "@chakra-ui/layout";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { Input } from "@chakra-ui/input";
import { GiShoppingCart } from "react-icons/gi";
import { useDisclosure, useMediaQuery, Icon } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar: React.FC = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 740px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Flex gap="20px">
            <Heading fontSize="30px" fontStyle="italic">
              Kasio
            </Heading>
            <DesktopMenu />
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
        <>
          <Flex
            p="20px"
            w="100%"
            gap="20px"
            justify="space-between"
            flexDir="column"
          >
            <Flex w="100%" justify="space-between">
              <Flex justify="space-between" gap="20px" align="center">
                <IconButton
                  variant="unstyled"
                  aria-label="Search database"
                  onClick={onOpen}
                  icon={
                    isOpen ? (
                      <CloseIcon color="primaryYellow" boxSize="30px" />
                    ) : (
                      <HamburgerIcon color="primaryYellow" boxSize="40px" />
                    )
                  }
                />

                <Heading fontSize="20px">Kasio</Heading>
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
          <MobileMenu isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </Flex>
  );
};

export default Navbar;
