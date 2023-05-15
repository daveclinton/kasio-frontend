import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ChevronDownIcon, PhoneIcon } from "@chakra-ui/icons";

const MainHeader: React.FC = () => {
  return (
    <Flex
      bg="#0e0e0e"
      top={0}
      pos="fixed"
      color="#d7d7d7"
      w="100%"
      alignItems="center"
      fontSize="12px"
      h="32px"
      justify="center"
    >
      <Flex
        maxW="1000px"
        w="100%"
        p="20px"
        flexWrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex
          alignItems="center"
          w="50%"
          gap="40px"
          justifyContent="flex-start"
        >
          <Flex align="center" gap="5px">
            <Text>Customer Care</Text>
            <ChevronDownIcon />
          </Flex>
          <Flex align="center" gap="5px">
            <PhoneIcon />
            <Text>0720000185</Text>
          </Flex>
        </Flex>
        <Text>Sell with Kasio</Text>
      </Flex>
    </Flex>
  );
};

export default MainHeader;
