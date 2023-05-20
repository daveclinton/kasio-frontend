import * as React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/headers/MainHeader";
import Navbar from "./components/headers/Navbar";
import LowerMenu from "./components/headers/LowerMenu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  return (
    <Flex align="center" justify="center">
      <Box w="100%">
        <MainHeader />
        <Navbar />
        <LowerMenu />
        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Signup />} />
          </Route>
        </Routes>
      </Box>
    </Flex>
  );
};

export default App;
