import * as React from "react";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router-dom";

const CheckEmail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex mt="50px" as="form" justify="center" align="center">
      <Flex
        flexDir="column"
        boxShadow={{ lg: "0px 2px 20px rgba(0, 0, 0, 0.05)" }}
        align="center"
        w={{ lg: "450px" }}
        p="20px"
        gap="20px"
      >
        <Heading fontSize="30px">Check Email!</Heading>
        <Text fontSize="18px" textAlign="center">
          Your account creation is almost complete. Activate your account by
          checking your email now.
        </Text>
        <Text fontSize="18px" textAlign="center">
          Once you've activated your account, visit our login page to access
          your personalized dashboard and explore our wide range of products and
          services.
        </Text>
        <Button onClick={() => navigate("/login")} variant="primary">
          Proceed to Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default CheckEmail;
