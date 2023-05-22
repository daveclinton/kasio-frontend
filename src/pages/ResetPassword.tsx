import * as React from "react";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { SubmitHandler, useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { Input } from "@chakra-ui/react";

interface IFormInput {
  emailAddress: string;
}

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IFormInput>();
  const [resetError, setResetError] = React.useState<string>("");
  const [setSuccess, setSuccessMessage] = React.useState<string>("");
  const [countdown, setCountdown] = React.useState<number>(0);
  const [canResend, setCanResend] = React.useState<boolean>(true);
  const startCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      setCanResend(true);
    }, (countdown + 1) * 1000);

    navigate("/reset-password");
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { emailAddress } = data;
      await sendPasswordResetEmail(auth, emailAddress);
      setSuccessMessage("Password reset email sent successfully");
      setCanResend(false);
      setCountdown(60);
      startCountdown();
    } catch (error) {
      setResetError("Password reset error, Please retry");
    }
  };

  return (
    <Flex
      mt="50px"
      as="form"
      justify="center"
      onSubmit={handleSubmit(onSubmit)}
      align="center"
    >
      <Flex
        flexDir="column"
        boxShadow={{ lg: "0px 2px 20px rgba(0, 0, 0, 0.05)" }}
        align="center"
        w={{ lg: "450px" }}
        p={{ base: "20px", lg: "40px" }}
        gap="20px"
      >
        <Heading fontSize="30px">
          {setSuccess
            ? "Check Email"
            : resetError
            ? "Press Button to retry"
            : "Password Reset"}
        </Heading>
        {setSuccess ? (
          <Text textAlign="center">{setSuccess}</Text>
        ) : resetError ? (
          <Text textAlign="center">{resetError}</Text>
        ) : (
          <Text textAlign="center">
            Enter you Email and you will receive instructions for reseting
            password in your Email Inbox
          </Text>
        )}
        <Input
          mt={{ base: "5px", lg: "15px" }}
          {...register("emailAddress")}
          bg="none"
          _focusVisible={{ borderColor: "primaryYellow" }}
        />
        <Button type="submit" variant="primary" disabled={!canResend} w="100%">
          {canResend ? "Send" : `Resend (${countdown})`}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ResetPassword;
