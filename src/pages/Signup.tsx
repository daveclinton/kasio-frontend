import * as React from "react";
import { Flex, Box, Heading, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Divider, Input } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
interface IFormInput {
  firstName: string;
  lastName: string;
  emailAdress: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
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
      <Flex
        as="form"
        flexDir="column"
        gap="20px"
        maxW="700px"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading fontSize="18px" fontWeight={700}>
          Create an Account
        </Heading>

        <Input placeholder="FirstName" {...register("firstName")} />
        <Input placeholder="LastName" {...register("lastName")} />
        <Input placeholder="Email Address" {...register("emailAdress")} />
        <Input placeholder="Choose Password" {...register("password")} />
        <Input placeholder="Confirm Password" {...register("password")} />
        <Button
          mt="20px"
          color="primaryYellow"
          bg="#fff"
          minW="243px"
          type="submit"
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
