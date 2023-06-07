import * as React from "react";
import { Drawer, DrawerContent, DrawerBody } from "@chakra-ui/modal";
import { MinusIcon, AddIcon, Icon } from "@chakra-ui/icons";
import { Divider, Flex, Link } from "@chakra-ui/layout";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IconButton } from "@chakra-ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { categories } from "../../utils/ProductCategories";
import { NavLink } from "react-router-dom";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  return (
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
            {categories.map(({ name, icon, subcategories }, accordionData) => (
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
                        <Icon as={icon} color="primaryYellow" boxSize="20px" />
                        <Link
                          as={NavLink}
                          href="/category"
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
                      <AccordionPanel display="flex" ml="20px" flexDir="column">
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
                      <AccordionPanel display="flex" justifyContent="center">
                        Items Out Of Stock
                      </AccordionPanel>
                    )}
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
