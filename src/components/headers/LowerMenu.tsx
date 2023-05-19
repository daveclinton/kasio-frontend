import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import { categories } from "../../utils/ProductCategories";

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
      gap="10px"
    >
      {categories.map(({ name, icon }, menuData) => (
        <Flex align="center" key={menuData} gap="10px">
          <Icon as={icon} color="primaryYellow" boxSize="20px" />
          <Text>{name}</Text>
          <ChevronDownIcon ml="10px" />
        </Flex>
      ))}
    </Flex>
  );
};

export default LowerMenu;
