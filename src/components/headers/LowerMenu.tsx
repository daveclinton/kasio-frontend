import * as React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import { categories } from "../../utils/ProductCategories";
import { Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/menu";

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
      {categories.map(({ name, icon, subcategories }, menuData) => (
        <Flex align="center" key={menuData} gap="10px">
          <Icon as={icon} color="primaryYellow" boxSize="20px" />
          <Menu closeOnSelect={true}>
            <MenuButton
              variant="unstyled"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {name}
            </MenuButton>
            {subcategories ? (
              <MenuList display="flex" flexDir="column" p="10px 30px 30px 30px">
                {subcategories.map((category, categoryData) => (
                  <MenuItem
                    as="a"
                    color="black"
                    mt="10px"
                    cursor="pointer"
                    _hover={{
                      bg: "none",
                      textDecoration: "none",
                      color: "primaryYellow",
                    }}
                    _active={{
                      bg: "none",
                      textDecoration: "none",
                      color: "primaryYellow",
                    }}
                    key={categoryData}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </MenuList>
            ) : (
              <MenuList display="flex" flexDir="column" p="30px">
                <Text color="#000000">Out of stock</Text>
              </MenuList>
            )}
          </Menu>
        </Flex>
      ))}
    </Flex>
  );
};

export default LowerMenu;
