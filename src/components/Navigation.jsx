import React from "react";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex align="center" maxW="container.lg" mx="auto">
        <Box>
          <Link to="/">
            <Button variant="link" colorScheme="blue">
              Sunny Hills Community
            </Button>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link to="/golf">
            <Button variant="link" mr={4}>
              Golf
            </Button>
          </Link>
          <Link to="/pool">
            <Button variant="link" mr={4}>
              Pool
            </Button>
          </Link>
          <Link to="/events">
            <Button variant="link" mr={4}>
              Events
            </Button>
          </Link>
          <Link to="/messages">
            <Button variant="link">Messages</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navigation;
