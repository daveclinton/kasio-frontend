import * as React from "react";
import { Flex, Box, Heading, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Divider, Input } from "@chakra-ui/react";

const SignUp: React.FC = () => {
  return (
    <Flex w="100%" justify="center" gap="30px" align="center" mt="32px">
      <Box>
        <Heading fontSize="18px" fontWeight={700}>
          Have an Account?
        </Heading>
        <Link href="/login">
          <Button
            mt="20px"
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
        </Link>
      </Box>
      <Divider orientation="vertical" w="10px" color="red" />
      <Flex flexDir="column" gap="20px" maxW="700px">
        <Heading fontSize="18px" fontWeight={700}>
          Create an Account
        </Heading>
        <Input placeholder="FirstName" />
        <Input placeholder="LastName" />
        <Input placeholder="Email Address" />
        <Input placeholder="Choose Password" />
        <Input placeholder="Confirm Password" />
        <Button
          mt="20px"
          color="primaryYellow"
          bg="#fff"
          minW="243px"
          fontSize="16px"
          h="60px"
          borderRadius="4px"
          borderColor="primaryYellow"
          borderWidth="2px"
        >
          CREATE ACCOUNT & CONTINUE
          <ChevronRightIcon boxSize="25px" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignUp;
