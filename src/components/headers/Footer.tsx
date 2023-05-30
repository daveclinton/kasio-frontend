import * as React from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { ChevronRightIcon, Icon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <Box
      position="relative"
      width="100%"
      bg="#0A142F"
      color="white"
      h="490px"
      left={0}
      bottom={0}
    >
      <Flex w="100%%" pt="100px" flexDirection="column">
        <Flex m="auto" gap="100px" borderBottom="2px solid #fff">
          <Box>
            <Heading mb="40px">KASIO</Heading>
            <Text mb="15px">+254 720 000 185</Text>
            <Text mb="15px">kasio@market.com</Text>
          </Box>
          <Box>
            <Heading mb="40px" fontSize="18px">
              Quick Links
            </Heading>
            <Link mb="15px">Sell with Kasio</Link>
            <Text mb="15px">
              <Link>Track your Order</Link>
            </Text>
          </Box>
          <Box>
            <Text mb="15px">+254 720 000 185</Text>
            <Text mb="15px">kasio@market.com</Text>
          </Box>
          <Box>
            <Heading fontSize="18px">Subscribe</Heading>
            <InputGroup mt="20px" size="sm">
              <Input placeholder="Get Product Updates" />
              <InputRightAddon
                bg="primaryYellow"
                children={
                  <IconButton
                    variant="unstyled"
                    aria-label="Search database"
                    icon={<ChevronRightIcon />}
                  />
                }
              />
            </InputGroup>
          </Box>
        </Flex>
        <Flex justify="space-between" gap="170px" pt="50px" m="auto">
          <Flex justify="space-between" gap="30px">
            <Icon as={CiLinkedin} boxSize="30px" />
            <Icon as={MdOutlineFacebook} boxSize="30px" />
            <Icon as={BsInstagram} boxSize="30px" />
          </Flex>
          <Text>Made by David Clinton</Text>
          <Text>@2023 Kasio. All rights reserved</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
