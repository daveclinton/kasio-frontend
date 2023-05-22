import * as React from "react";
import { Flex, Box, Heading, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
}

const nameRegex = /^[A-Za-z-' ]{2,}$/;

const schema = yup
  .object({
    firstName: yup
      .string()
      .required("Required")
      .matches(
        nameRegex,
        "Must be longer than one letter (and no special characters!)"
      ),
    lastName: yup
      .string()
      .required("Required")
      .matches(
        nameRegex,
        "Must be longer than one letter (and no special characters!)"
      ),
    emailAddress: yup
      .string()
      .required("Required")
      .email("That does not look like a valid email"),
    password: yup
      .string()
      .required("Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
      ),
  })
  .required();

const SignUp: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const [isVisible, setVisible] = React.useState(false);
  const [userExists, setExistUser] = React.useState<string>("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { emailAddress, password, firstName } = data;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: firstName });
      navigate("/check-email");
      await sendEmailVerification(user);
    } catch (error) {
      setExistUser("Email already in use");
    }
  };
  return (
    <Flex
      mt="32px"
      as="form"
      justify="center"
      align="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Flex
        flexDir="column"
        boxShadow={{ lg: "0px 2px 20px rgba(0, 0, 0, 0.05)" }}
        align="center"
        w={{ lg: "450px" }}
        p={{ lg: "20px" }}
      >
        <Heading textAlign="center" fontSize="20px">
          Join Us!
        </Heading>
        <Text
          fontSize="16px"
          textAlign="center"
          color="#4a4a4a"
          mt="8px"
          fontWeight={400}
          maxW="320px"
        >
          Type details below to create an account with Kasio
        </Text>
        <Flex mt="24px" w="320px" gap="20px" flexDir="column">
          {userExists && <Text color="red">{userExists}</Text>}
          <Box>
            <Flex justify="space-between">
              <Text textAlign="start" fontSize="14px" fontWeight={400}>
                First Name
              </Text>
              <Text mr="78px" fontSize="14px" fontWeight={400}>
                Last Name
              </Text>
            </Flex>
            <Flex gap="20px" justify={"space-between"}>
              <Box>
                <Input
                  mt={{ base: "5px", lg: "15px" }}
                  {...register("firstName")}
                  bg="none"
                  _focusVisible={{ borderColor: "primaryYellow" }}
                />
                <Text fontSize="10px" color="red">
                  {errors.firstName?.message}
                </Text>
              </Box>
              <Box>
                {" "}
                <Input
                  mt={{ base: "5px", lg: "15px" }}
                  {...register("lastName")}
                  bg="none"
                  _focusVisible={{ borderColor: "primaryYellow" }}
                />
                <Text fontSize="10px" color="red">
                  {errors.lastName?.message}
                </Text>
              </Box>
            </Flex>
            <Text mt="10px" fontSize="14px" fontWeight={400}>
              Email Address
            </Text>
            <Input
              mt={{ base: "5px", lg: "15px" }}
              {...register("emailAddress")}
              bg="none"
              _focusVisible={{ borderColor: "primaryYellow" }}
            />
            <Text fontSize="10px" color="red">
              {errors.emailAddress?.message}
            </Text>
          </Box>
          <Box>
            <Text fontSize="14px" fontWeight={400}>
              Password
            </Text>
            <InputGroup mt={{ base: "5px", lg: "15px" }}>
              <Input
                {...register("password")}
                bg="none"
                _focusVisible={{ borderColor: "primaryYellow" }}
                type={isVisible ? "text" : "password"}
              />

              <InputRightElement width="4.5rem">
                <IconButton
                  aria-label="show/hide"
                  variant="unstyled"
                  _focusVisible={{ boxShadow: "none" }}
                  h="1.75rem"
                  size="sm"
                  onClick={() => setVisible(!isVisible)}
                >
                  {isVisible ? <ViewOffIcon /> : <ViewIcon />}
                </IconButton>
              </InputRightElement>
            </InputGroup>
            <Text fontSize="10px" color="red">
              {errors.password?.message}
            </Text>
          </Box>
          <Button type="submit" variant="primary" w="100%">
            Create Account
          </Button>
          <Text fontSize="14px" fontWeight={400} textAlign="center">
            Have an account?{" "}
            <Link href="/login" variant="secondary">
              Proceed to Login
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;
