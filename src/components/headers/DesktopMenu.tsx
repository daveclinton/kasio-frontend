import * as React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

const DesktopMenu: React.FC = () => {
  return (
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
  );
};

export default DesktopMenu;
