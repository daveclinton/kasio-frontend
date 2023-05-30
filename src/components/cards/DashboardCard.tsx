import * as React from "react";
import { categories } from "../../utils/ProductCategories";
import { Flex, Image, Text } from "@chakra-ui/react";

const DashboardCard: React.FC = () => {
  return (
    <Flex w="80%" justify="center" flexWrap="wrap">
      {categories.map(({ name, image }, data) => (
        <Flex
          flexDir="column"
          justify="space-between"
          key={data}
          w={{ base: "130px", md: "150px", lg: "220px" }}
          boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)"
          borderRadius="8px"
          ml="25px"
          p={{ base: "20px", md: "auto" }}
          mb="25px"
          cursor="pointer"
        >
          <Image src={image} maxH="160px" />
          <Text fontWeight={700} textTransform="capitalize" textAlign="center">
            {name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default DashboardCard;
