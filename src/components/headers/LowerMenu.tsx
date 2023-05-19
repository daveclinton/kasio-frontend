import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import { TbCloudComputing } from "react-icons/tb";

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
    >
      <Flex>
        <Icon as={TbCloudComputing} color="primaryYellow" boxSize="20px" />
        <Text>Computers</Text>
        <ChevronDownIcon ml="10px" />
      </Flex>
    </Flex>
  );
};

export default LowerMenu;
