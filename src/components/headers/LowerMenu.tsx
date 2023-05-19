import * as React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import { categories } from "../../utils/ProductCategories";
import { Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/menu";

const LowerMenu: React.FC = () => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      w="100%"
      justify="center"
      align="center"
      minH="72px"
      color="white"
      bg="#231f20"
      gap="20px"
    >
      {categories.map(({ name, icon }, menuData) => (
        <Flex align="center" key={menuData} gap="10px">
          <Icon as={icon} color="primaryYellow" boxSize="20px" />
          <Menu>
            <MenuButton
              variant="unstyled"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {name}
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ))}
    </Flex>
  );
};

export default LowerMenu;
