import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex, Heading } from "@chakra-ui/layout";

const Dashboard = () => {
  return (
    <Flex>
      <Flex
        w="100%"
        gap="20px"
        justify="center"
        align="center"
        flexDir="column"
      >
        <Flex
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          w="50%"
          h="329px"
          bgImage="url('https://skygarden.azureedge.net/media/original_images/Site-Home-page-7.jpg')"
        >
          <Box>
            <Heading>Helo World</Heading>
          </Box>
        </Flex>
        <Flex
          w="50%"
          gap="20px"
          boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)"
          p="20px"
        >
          <Button variant="secondary">Computing Essentials</Button>
          <Button variant="secondary">Office</Button>
          <Divider orientation="vertical" borderWidth="3px" />
        </Flex>
      </Flex>

      <Flex>Hello WOrld</Flex>
    </Flex>
  );
};

export default Dashboard;
