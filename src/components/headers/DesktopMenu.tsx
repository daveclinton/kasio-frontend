import * as React from "react";
import { Drawer, DrawerContent, DrawerBody } from "@chakra-ui/modal";
import { Divider, Flex, Link } from "@chakra-ui/layout";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IconButton } from "@chakra-ui/button";

type DesktopMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      size="md"
      placement="left"
      isFullHeight={false}
      onClose={onClose}
      isOpen={isOpen}
      variant="secondary"
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
        <DrawerBody></DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DesktopMenu;
