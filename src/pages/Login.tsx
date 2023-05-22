import * as React from "react";
import { Flex, Heading, Text, Box, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setUser } from "../store/auth/actions";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface IFormInput {
  emailAddress: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = React.useState<string>("");
  const [isVisible, setVisible] = React.useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { emailAddress, password } = data;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      const user = userCredential.user;
      if (user.emailVerified) {
        navigate("/");
        dispatch(setUser(user));
      } else {
        setIsValid(
          "Your email address is not verified. Please check your inbox and click on the verification link to complete the verification process"
        );
      }
    } catch (error) {
      setIsValid("Invalid email or password");
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
        <Heading fontSize="20px">Welcome to Kasio</Heading>
        <Text
          fontSize="16px"
          textAlign="center"
          color="#4a4a4a"
          mt="8px"
          fontWeight={400}
          maxW="320px"
        >
          Type your e-mail and password to log in to your Kasio Account
        </Text>
        <Flex
          mt="24px"
          w="320px"
          gap={{ base: "20px", lg: "40px" }}
          flexDir="column"
        >
          <Box>
            <Text fontSize="14px" fontWeight={400}>
              Email
            </Text>
            <Input
              mt={{ base: "5px", lg: "15px" }}
              {...register("emailAddress")}
              borderColor={isValid ? "red" : undefined}
              bg="none"
              _focusVisible={{ borderColor: "primaryYellow" }}
            />
            {isValid && (
              <Text
                color="red"
                fontSize="14px"
                textAlign="center"
                fontWeight={400}
              >
                {isValid}
              </Text>
            )}
          </Box>
          <Box>
            <Flex fontSize="14px" fontWeight={400} justify="space-between">
              <Text>Password</Text>
              <Link href="/reset-password" variant="secondary">
                Forgot password?
              </Link>
            </Flex>
            <InputGroup mt={{ base: "5px", lg: "15px" }}>
              <Input
                {...register("password")}
                borderColor={isValid ? "red" : undefined}
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
          </Box>
          <Button type="submit" variant="primary" w="100%">
            Login
          </Button>
          <Text fontSize="14px" fontWeight={400} textAlign="center">
            Don’t have account?{" "}
            <Link href="/signup" variant="secondary">
              Create new account
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
