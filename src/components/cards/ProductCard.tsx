import * as React from "react";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Flex, Text, Heading } from "@chakra-ui/layout";
import { categories } from "../../utils/ProductCategories";
import { useNavigate } from "react-router-dom";

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
                  key={`${name}-${name}`}
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
                  <Flex w="100%" flexWrap="wrap" justify="space-between">
                    <Heading
                      fontWeight={700}
                      textTransform="capitalize"
                      fontSize="18px"
                    >
                      Ksh {price}
                    </Heading>
                    <Text
                      fontWeight={700}
                      textTransform="capitalize"
                      textAlign="center"
                    >
                      {shop}
                    </Text>
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
