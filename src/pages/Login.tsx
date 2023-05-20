import * as React from "react";
import { Flex, Box, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Login: React.FC = () => {
  return (
    <Flex w="100%" justify="center" align="center" mt="32px">
      <Box>
        <Heading fontSize="18px" fontWeight={700}>
          Have an Account?
        </Heading>
        <Button
          color="primaryYellow"
          bg="#fff"
          minW="243px"
          fontSize="16px"
          h="60px"
          borderRadius="4px"
          borderColor="primaryYellow"
          borderWidth="2px"
        >
          LOGIN
          <ChevronRightIcon boxSize="25px" />
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
