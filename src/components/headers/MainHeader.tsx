import * as React from "react";
import { Flex, Text, Link } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { ChevronDownIcon, PhoneIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";

const MainHeader: React.FC = () => {
  return (
    <>
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
          maxW={{ base: "100%", md: "704px", lg: "1240px" }}
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
              <Text whiteSpace="nowrap">Customer Care</Text>
              <Menu placement="top" computePositionOnMount={true}>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<ChevronDownIcon />}
                  variant="unstyled"
                />
                <MenuList color="black">
                  <MenuItem>Track Order</MenuItem>
                  <MenuItem>Return Policy</MenuItem>
                  <MenuItem>Live Chat</MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            <Flex
              align="center"
              gap="5px"
              display={{ base: "none", sm: "flex" }}
            >
              <PhoneIcon />
              <Text>0720000185</Text>
            </Flex>
          </Flex>
          <Link _hover={{ textDecor: "none", color: "#f68b1e" }}>
            Sell with Kasio
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default MainHeader;
