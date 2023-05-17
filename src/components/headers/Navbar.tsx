import * as React from "react";
import { Flex, Heading, Link, Divider } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import {
  ChevronDownIcon,
  HamburgerIcon,
  CloseIcon,
  MinusIcon,
  AddIcon,
} from "@chakra-ui/icons";
import { Drawer, DrawerContent, DrawerBody } from "@chakra-ui/modal";
import { Button, IconButton } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { Input } from "@chakra-ui/input";
import { GiShoppingCart } from "react-icons/gi";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { BsPrinterFill, BsFillUsbDriveFill } from "react-icons/bs";
import { GiVideoCamera } from "react-icons/gi";
import { RiFridgeFill } from "react-icons/ri";
import { GoTelescope } from "react-icons/go";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useDisclosure, useMediaQuery, Icon } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/accordion";

const Navbar: React.FC = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 740px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const categories = [
    {
      name: "Computing",
      icon: RiComputerLine,
      link: "/computing",
      subcategories: [
        {
          name: "Desktops",
          link: "/computing/desktop",
        },
        {
          name: "Monitors",
          link: "/computing/laptops",
        },
        {
          name: "Laptops",
          link: "/computing/laptops",
        },
        {
          name: "Servers",
          link: "/computing/laptops",
        },
        {
          name: "Computer Accesories",
          link: "/computing/laptops",
        },
        {
          name: "Point of Scale",
          link: "/computing/laptops",
        },
        {
          name: "Software",
          link: "/computing/laptops",
        },
        {
          name: "Projectors",
          link: "/computing/laptops",
        },
        {
          name: "Projector Screens",
          link: "/computing/laptops",
        },
        {
          name: "Laptop Batteries",
          link: "/computing/laptops",
        },
        {
          name: "Laptop Charger / Adapter",
          link: "/computing/laptops",
        },
      ],
    },
    {
      name: "Networking",
      icon: TbCloudComputing,
      link: "/networking",
      subcategories: [
        {
          name: "Routers",
          link: "/computing/desktop",
        },
        {
          name: "Switches",
          link: "/computing/desktop",
        },
        {
          name: "Access Points",
          link: "/computing/desktop",
        },
        {
          name: "Repeaters",
          link: "/computing/desktop",
        },
        {
          name: "Rack Cabinets",
          link: "/computing/desktop",
        },
        {
          name: "Networking Accesories",
          link: "/computing/desktop",
        },
        {
          name: "Networking Peripherals",
          link: "/computing/desktop",
        },
      ],
    },
    {
      name: "Printers & Office",
      icon: BsPrinterFill,
      link: "/networking",
    },
    {
      name: "Camera & Surveillance",
      icon: GiVideoCamera,
      link: "/networking",
    },
    {
      name: "Home Appliances",
      icon: RiFridgeFill,
      link: "/networking",
    },
    {
      name: "Storage",
      icon: BsFillUsbDriveFill,
      link: "/networking",
    },
    {
      name: "Power",
      icon: AiOutlinePoweroff,
      link: "/networking",
    },
    {
      name: "Telecom",
      icon: GoTelescope,
      link: "/networking",
    },
  ];

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
            <Menu>
              <MenuButton
                as={Button}
                bg="none"
                border="2px solid #e07e1b"
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
          <Drawer
            size="md"
            placement="left"
            isFullHeight={false}
            onClose={onClose}
            isOpen={isOpen}
            variant="primary"
          >
            <DrawerContent>
              <Flex
                h="96px"
                justify="space-evenly"
                align="center"
                borderBottomWidth="2px"
              >
                <Flex justify="center" align="center" flexDir="column">
                  <IconButton
                    boxSize="40px"
                    variant="unstyled"
                    cursor="pointer"
                    aria-label=""
                    as={TbDiscount2}
                  />
                  <Link _hover={{ textDecor: "none", color: "primaryYellow" }}>
                    Deals & Promos
                  </Link>
                </Flex>
                <Divider orientation="vertical" w="2px" />
                <Flex justify="center" align="center" flexDir="column">
                  <IconButton
                    boxSize="40px"
                    variant="unstyled"
                    cursor="pointer"
                    aria-label=""
                    as={MdOutlineShoppingCart}
                  />
                  <Link _hover={{ textDecor: "none", color: "primaryYellow" }}>
                    Open a Shop?
                  </Link>
                </Flex>
              </Flex>
              <DrawerBody>
                <Accordion allowToggle>
                  {categories.map(
                    ({ name, icon, subcategories }, accordionData) => (
                      <AccordionItem key={accordionData} border="none">
                        {({ isExpanded }) => (
                          <>
                            <AccordionButton>
                              <Flex
                                as="span"
                                align="center"
                                gap="20px"
                                flex="1"
                                textAlign="left"
                              >
                                <Icon
                                  as={icon}
                                  color="primaryYellow"
                                  boxSize="20px"
                                />
                                <Link
                                  _hover={{
                                    textDecoration: "none",
                                    color: "primaryYellow",
                                  }}
                                  _active={{
                                    textDecoration: "none",
                                    color: "primaryYellow",
                                  }}
                                >
                                  {name}
                                </Link>
                              </Flex>
                              {isExpanded ? (
                                <MinusIcon fontSize="12px" />
                              ) : (
                                <AddIcon fontSize="12px" />
                              )}
                            </AccordionButton>
                            {subcategories ? (
                              <AccordionPanel
                                display="flex"
                                ml="20px"
                                flexDir="column"
                              >
                                {subcategories.map((subcategory, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    ml={8}
                                    py={1}
                                    _hover={{
                                      textDecoration: "none",
                                      color: "primaryYellow",
                                    }}
                                    _active={{
                                      textDecoration: "none",
                                      color: "primaryYellow",
                                    }}
                                    href={subcategory.link}
                                  >
                                    {subcategory.name}
                                  </Link>
                                ))}
                              </AccordionPanel>
                            ) : (
                              <AccordionPanel
                                display="flex"
                                justifyContent="center"
                              >
                                Items Out Of Stock
                              </AccordionPanel>
                            )}
                          </>
                        )}
                      </AccordionItem>
                    )
                  )}
                </Accordion>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
