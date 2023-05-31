import * as React from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Stack, Heading, Flex, Divider, Text } from "@chakra-ui/layout";
import { categories } from "../../utils/ProductCategories";

const ProductCard: React.FC = () => {
  return (
    <Flex gap="15px" flexWrap="wrap">
      {categories.map(
        (category) =>
          category.subcategories &&
          category.subcategories.map(
            (subcategory) =>
              subcategory.products &&
              subcategory.products.map((product) => (
                <Card key={`${subcategory.name}-${product.name}`} maxW="250px">
                  <CardBody>
                    <Image
                      src={product.image}
                      alt={product.name}
                      borderRadius="lg"
                    />
                    <Stack mt="3" spacing="3">
                      <Heading size="md">{product.name}</Heading>
                      <Text color="blue.600" fontSize="2xl">
                        ${product.price}
                      </Text>
                    </Stack>
                    <Text>{product.shop}</Text>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="primary">Buy now</Button>
                      <Button variant="secondary" _hover={{ bg: "none" }}>
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))
          )
      )}
    </Flex>
  );
};

export default ProductCard;
