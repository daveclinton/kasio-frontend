import { Flex } from "@chakra-ui/layout";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/headers/MainHeader";
import Navbar from "./components/headers/Navbar";
import LowerMenu from "./components/headers/LowerMenu";
import { Box } from "@chakra-ui/react";
import Login from "./pages/Login";

function App() {
  return (
    <Flex align="center" justify="center">
      <Box w="100%">
        <MainHeader />
        <Navbar />
        <LowerMenu />
        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
