import { Button, IconButton } from "@chakra-ui/button";
import { Divider, Flex } from "@chakra-ui/layout";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Dashboard = () => {
  return (
    <Flex w="100%">
      <Flex
        w="100%"
        justify="center"
        gap="20px"
        align="center"
        flexDir="column"
      >
        <Flex
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          w="80%"
          h="329px"
          flexDir="column"
          justify="center"
          bgImage="url('https://skygarden.azureedge.net/media/original_images/Site-Home-page-7.jpg')"
        >
          <Flex w="100%" p="15% 10px" justify="space-between">
            <IconButton
              aria-label="left-arrow"
              variant="outline"
              color="primaryYellow"
              borderRadius="50%"
              zIndex={2}
              // onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt size="40px" />
            </IconButton>
            <IconButton
              aria-label="right-arrow"
              variant="outline"
              color="primaryYellow"
              borderRadius="50%"
              zIndex={2}
              // onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt size="40px" />
            </IconButton>
          </Flex>
        </Flex>
        <Flex
          w="80%"
          gap="20px"
          boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)"
          p="20px"
        >
          <Button variant="secondary">Computing Essentials</Button>
          <Button variant="secondary">Office</Button>
          <Divider orientation="vertical" borderWidth="3px" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
