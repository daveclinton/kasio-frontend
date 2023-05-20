import * as React from "react";
import { Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { IconButton, Button } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { Input } from "@chakra-ui/input";
import { GiShoppingCart } from "react-icons/gi";
import { useDisclosure, useMediaQuery, Icon } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { auth } from "../../../firebase";
import { setUser } from "../../store/auth/actions";

const Navbar: React.FC = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 740px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktopMenu, setIsDesktopMenu] = React.useState(false);
  const { user }: { user: any } = useAppSelector(
    ({ authReducer }) => authReducer
  );
  const dispatch = useAppDispatch();

  const displayName = user?.displayName;

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        localStorage.setItem("authUser", JSON.stringify(user));
      } else {
        // User is signed out
        localStorage.removeItem("authUser");
      }
    });

    return () => unsubscribe();
  }, []);

  React.useEffect(() => {
    const storedUser = localStorage.getItem("authUser");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(setUser(parsedUser));
    }
  }, [dispatch]);

  return (
    <Flex
      w="100%"
      pos="fixed"
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
            <Heading fontSize="30px">Kasio</Heading>
            <Button
              cursor="pointer"
              onMouseOver={() => setIsDesktopMenu(true)}
              bg="none"
              border="2px solid #e07e1b"
              _hover={{ bg: "none" }}
              _active={{ bg: "none" }}
              rightIcon={<ChevronDownIcon />}
            >
              Categories
            </Button>
            <DesktopMenu
              isOpen={isDesktopMenu}
              onClose={() => setIsDesktopMenu(false)}
            />
          </Flex>
          <Input
            maxW="50%"
            position="static"
            bg="#fff"
            placeholder="Search for products, shops and categories"
          />
          <Flex justify="space-between" gap="30px">
            <Flex justify="space-between" align="center" gap="10px">
              {user ? (
                <Text>{`Welcome ${user?.displayName}`}</Text>
              ) : (
                <Link href="/login" whiteSpace="nowrap">
                  Log In
                </Link>
              )}

              <Avatar boxSize="30px" name={user ? displayName : ""} />
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
