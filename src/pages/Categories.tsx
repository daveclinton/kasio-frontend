import * as React from "react";
import { Box, Heading, Flex, Stack, Text } from "@chakra-ui/layout";
import { Radio } from "@chakra-ui/radio";
import BreadCrumb from "../components/BreadCrumb";

const Categories: React.FC = () => {
  return (
    <Box mt="-30px">
      <Box pl="5%" pt="10px" h="50px" bg="#fafafa">
        <BreadCrumb />
      </Box>
      <Heading
        textAlign={{ base: "center", lg: "justify" }}
        fontSize="35px"
        fontWeight={700}
        pl={{ base: "auto", lg: "5%" }}
      >
        Printers & Scanners
      </Heading>
      <Flex justify="center" align="center" mt="30px" w="90%">
        <Flex gap="20%">
          <Box>
            <Stack>
              <Radio size="md" name="1" colorScheme="yellow">
                Products{4405}
              </Radio>
              <Radio size="md" name="1" colorScheme="yellow">
                Shops{100}
              </Radio>
            </Stack>
          </Box>
          <Flex align="center" flexDir="column">
            <Text textAlign="left">
              A wide range of high quality printers and scanners that include
              Epson, Canon Pixma, HP, Kyocera among others for your home, office
              or business. Delivery is in Nairobi and all over Kenya.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Categories;
