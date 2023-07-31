import * as React from "react";
import { Box, Center, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const NavigationBar: React.FC = () => {
  return (
    <Box>
      <Center color="#fff" w="100%" bg="darkGrey" gap="20px" p="10px">
        <Text>Get Awesome Deals at KASIO</Text>
        <Button
          p="0.52m 2em"
          bg="transparent"
          borderWidth="3px"
          borderRadius="0.25rem"
          borderColor="primaryYellow"
          _hover={{ bg: "transparent" }}
        >
          SHOP NOW!
        </Button>
      </Center>
    </Box>
  );
};

export default NavigationBar;
