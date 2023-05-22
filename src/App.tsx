import * as React from "react";
import { Flex } from "@chakra-ui/layout";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/headers/MainHeader";
import Navbar from "./components/headers/Navbar";
import LowerMenu from "./components/headers/LowerMenu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Box } from "@chakra-ui/react";
import CheckEmail from "./pages/CheckEmail";

const App: React.FC = () => {
  return (
    <Flex align="center" justify="center" w="100%">
      <Flex w="100%" flexDir="column">
        <MainHeader />
        <Navbar />
        <LowerMenu />
        <Box mt="210px">
          <Routes>
            <Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/check-email" element={<CheckEmail />} />
            </Route>
          </Routes>
        </Box>
      </Flex>
    </Flex>
  );
};

export default App;
