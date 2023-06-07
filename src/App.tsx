import * as React from "react";
import { Flex } from "@chakra-ui/layout";
import { Routes, Route, useLocation, redirect } from "react-router-dom";
import MainHeader from "./components/headers/MainHeader";
import Navbar from "./components/headers/Navbar";
import LowerMenu from "./components/headers/LowerMenu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Box } from "@chakra-ui/react";
import CheckEmail from "./pages/CheckEmail";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/headers/Footer";
import Categories from "./pages/Categories";

const App: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  if (pathname === "/") {
    redirect("/home");
  }

  return (
    <Flex align="center" justify="center" w="100%">
      <Flex w="100%" flexDir="column">
        <MainHeader />
        <Navbar />
        <LowerMenu />
        <Box mt="210px">
          <Routes>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/check-email" element={<CheckEmail />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/category" element={<Categories />} />
          </Routes>
        </Box>
        {pathname === "/home" && <Footer />}
      </Flex>
    </Flex>
  );
};

export default App;
