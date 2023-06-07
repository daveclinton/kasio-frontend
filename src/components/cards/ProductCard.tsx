import * as React from "react";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Flex, Link, Heading } from "@chakra-ui/layout";
import { categories } from "../../utils/ProductCategories";
import { NavLink, useNavigate } from "react-router-dom";

const ProductCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Flex gap="10px" mt="20px" flexWrap="wrap">
      {categories.map(
        ({ subcategories }) =>
          subcategories &&
          subcategories.map(
            ({ products }) =>
              products &&
              products.map(({ name, image, price, shop }) => (
                <Flex
                  flexDir="column"
                  justify="space-between"
                  key={name}
                  w={{ base: "130px", md: "150px", lg: "220px" }}
                  boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)"
                  borderRadius="8px"
                  ml="25px"
                  p={{ base: "20px", md: "auto" }}
                  mb="25px"
                  onClick={() => navigate("/category")}
                  cursor="pointer"
                >
                  <Image src={image} alt={name} maxH="160px" />
                  <Flex fontWeight={700} textTransform="capitalize">
                    {name}
                  </Flex>
                  <Flex
                    w="100%"
                    mt="20px"
                    gap="20px"
                    flexWrap="wrap"
                    justify="space-between"
                    align="center"
                  >
                    <Heading
                      fontWeight={700}
                      textTransform="capitalize"
                      fontSize="16px"
                      color="#313133"
                    >
                      Ksh {price}
                    </Heading>
                    <Link
                      as={NavLink}
                      fontWeight={700}
                      textTransform="capitalize"
                      textAlign="center"
                    >
                      {shop}
                    </Link>
                  </Flex>

                  <Button variant="primary">Buy Now</Button>
                </Flex>
              ))
          )
      )}
    </Flex>
  );
};

export default ProductCard;
