import * as React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Divider, Input, Link } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setUser } from "../store/auth/actions";

interface IFormInput {
  emailAdress: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [emailError, setEmailError] = React.useState<string>("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { emailAdress, password } = data;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailAdress,
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
    <Flex w="100%" justify="center" gap="30px" align="center" mt="32px">
      <Flex
        flexDir="column"
        gap="20px"
        maxW="700px"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading fontSize="18px" fontWeight={700}>
          Welcome back!
        </Heading>
        <Input placeholder="Email Address" {...register("emailAdress")} />
        <Input placeholder="Password" {...register("password")} />
        <Button
          mt="20px"
          color="primaryYellow"
          bg="#fff"
          minW="243px"
          fontSize="16px"
          type="submit"
          h="60px"
          borderRadius="4px"
          borderColor="primaryYellow"
          borderWidth="2px"
        >
          LOGIN
          <ChevronRightIcon boxSize="25px" />
        </Button>
        {emailError && <Text color="red">{emailError}</Text>}
      </Flex>

      <Divider orientation="vertical" w="10px" color="red" />
      <Box>
        <Heading fontSize="18px" fontWeight={700}>
          New to Kasio?
        </Heading>
        <Link href="/signup">
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
            CREATE ACCOUNT
            <ChevronRightIcon boxSize="25px" />
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
