import * as React from "react";
import { Flex, Text, Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { ChevronDownIcon, PhoneIcon } from "@chakra-ui/icons";

const MainHeader: React.FC = () => {
  const [isCustomerMenu, setIsCustomerMenu] = React.useState(false);
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
          maxW={{ base: "100%", md: "704px", lg: "936px" }}
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
              <Box>
                <IconButton
                  variant="unstyled"
                  aria-label="Search database"
                  icon={<ChevronDownIcon />}
                  onClick={() => {
                    setIsCustomerMenu(!isCustomerMenu);
                  }}
                />

                {isCustomerMenu && (
                  <Box
                    pos="fixed"
                    bg="#fff"
                    borderRadius="4px"
                    boxShadow="0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"
                    zIndex={1000}
                    minW="112px"
                    maxW="240px"
                    minH="64px"
                  >
                    <Box m="20px">
                      <Text m="20px 0px 20px 0px">Track Order</Text>
                      <Text>Return Policy</Text>
                      <Text m="20px 0px 20px 0px">LIve Chat</Text>
                    </Box>
                  </Box>
                )}
              </Box>
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
          <Text>Sell with Kasio</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default MainHeader;
