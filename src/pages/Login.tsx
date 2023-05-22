import * as React from "react";
import { Flex, Heading, Text, Box, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setUser } from "../store/auth/actions";

interface IFormInput {
  emailAddress: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [emailError, setEmailError] = React.useState<string>("");

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
        setEmailError(
          "Your email address is not verified. Please check your inbox and click on the verification link to complete the verification process"
        );
      }
    } catch (error) {
      setEmailError("Invalid email or password");
    }
  };
  return (
    <Flex
      as="form"
      justify="center"
      align="center"
      flexDir="column"
      onSubmit={handleSubmit(onSubmit)}
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
      <Flex mt="24px" w="320px" gap="40px" flexDir="column">
        <Box>
          <Text fontSize="14px" fontWeight={400}>
            Email
          </Text>
          <Input mt="15px" {...register("emailAddress")} />
          {emailError && (
            <Text
              color="red"
              fontSize="14px"
              textAlign="center"
              fontWeight={400}
            >
              {emailError}
            </Text>
          )}
        </Box>
        <Box>
          <Flex fontSize="14px" fontWeight={400} justify="space-between">
            <Text>Password</Text>
            <Link variant="secondary">Forgot password?</Link>
          </Flex>
          <Input mt="15px" {...register("password")} />
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
  );
};

export default Login;
