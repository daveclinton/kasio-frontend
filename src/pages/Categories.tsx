import * as React from "react";
import { Box, Heading, Flex, Stack, Text, Link } from "@chakra-ui/layout";
import { Radio } from "@chakra-ui/radio";
import { Checkbox } from "@chakra-ui/checkbox";
import BreadCrumb from "../components/BreadCrumb";
import { Button } from "@chakra-ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import { categories } from "../utils/ProductCategories";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import ProductCard from "../components/cards/ProductCard";

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
      <Flex
        justify="center"
        pl={{ lg: "5%", xl: "auto" }}
        align="center"
        mt="30px"
        w="90%"
      >
        <Flex gap="10%">
          <Box>
            <Stack>
              <Radio size="md" name="1" colorScheme="yellow">
                Products{4405}
              </Radio>
              <Radio size="md" name="1" colorScheme="yellow">
                Shops{100}
              </Radio>
            </Stack>
            <Box
              boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)"
              p="20px"
              mt="20px"
              bg="#f5e5d5"
              minW="250px"
            >
              <Heading fontSize="18px" color="#231f20" whiteSpace="nowrap">
                Quick filters
              </Heading>
              <Stack mt="20px" spacing={3}>
                <Checkbox defaultChecked>On Sale</Checkbox>
                <Checkbox defaultChecked>Verified Partner</Checkbox>
                <Checkbox defaultChecked>New Product</Checkbox>
                <Checkbox defaultChecked>Best Seller</Checkbox>
              </Stack>
            </Box>
            <Box
              boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)"
              p="20px"
              mt="20px"
              minW="250px"
            >
              <Accordion allowToggle>
                {categories.map(({ name, subcategories }, productData) => (
                  <AccordionItem
                    borderTop="none"
                    borderBottom="0.5px solid #231f20"
                    key={productData}
                  >
                    <AccordionButton>
                      <Text color="#231f20" as="span" flex="1" textAlign="left">
                        {name}
                      </Text>
                      <AccordionIcon />
                    </AccordionButton>
                    {subcategories?.map(({ name }, subCategoryData) => (
                      <AccordionPanel key={subCategoryData} pb={4}>
                        <Link whiteSpace="nowrap">{name}</Link>
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Box>
          <Flex align="center" flexDir="column">
            <Text textAlign="left">
              A wide range of high quality printers and scanners that include
              Epson, Canon Pixma, HP, Kyocera among others for your home, office
              or business. Delivery is in Nairobi and all over Kenya.
            </Text>
            <Flex mt="20px" align="center" w="100%" justify="space-between">
              <Text>Products</Text>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Sort By
                </MenuButton>
                <MenuList>
                  <MenuItem>Price high to low</MenuItem>
                  <MenuItem>Price low to high</MenuItem>
                  <MenuItem>Name Ascending</MenuItem>
                  <MenuItem>Name Descending</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <ProductCard />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Categories;
