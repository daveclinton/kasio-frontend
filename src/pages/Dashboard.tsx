import * as React from "react";
import { useAppSelector } from "../store/hooks";
import { Box } from "@chakra-ui/react";

const Dashboard: React.FC = () => {
  const { user } = useAppSelector(({ authReducer }) => authReducer);

  return <Box>Hello</Box>;
};

export default Dashboard;
