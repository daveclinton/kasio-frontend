import * as React from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Stack, Heading, Flex, Divider, Text } from "@chakra-ui/layout";
import { categories } from "../../utils/ProductCategories";

const ProductCard: React.FC = () => {
  return (
    <Flex gap="10px" mt="20px" flexWrap="wrap">
      {categories.map(
        ({ subcategories }) =>
          subcategories &&
          subcategories.map(
            ({ products }) =>
              products &&
              products.map(({ name, image, price, shop }) => (
                <Card cursor="pointer" key={`${name}-${name}`} maxW="200px">
                  <CardBody>
                    <Image src={image} alt={name} borderRadius="lg" />
                    <Stack mt="3" spacing="3">
                      <Heading size="md">{name}</Heading>
                      <Text color="blue.600" fontSize="2xl">
                        KSH{price}
                      </Text>
                    </Stack>
                    <Text>{shop}</Text>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button w="100%" variant="primary">
                      Buy now
                    </Button>
                  </CardFooter>
                </Card>
              ))
          )
      )}
    </Flex>
  );
};

export default ProductCard;
