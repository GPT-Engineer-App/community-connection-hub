import React from "react";
import { Box, Heading, Text, Flex, Button, Image } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <Box>
      <Navigation />
      <Box h="80vh" backgroundImage="url('https://example.com/hero.jpg')" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" display="flex" alignItems="center" justifyContent="center" textAlign="center">
        <Box>
          <Heading as="h1" size="2xl" color="white" textShadow="0 0 10px rgba(0,0,0,0.5)">
            Welcome to Sunny Hills Community
          </Heading>
          <Text fontSize="xl" color="white" mt={4} textShadow="0 0 10px rgba(0,0,0,0.5)">
            Discover our world-class amenities and vibrant lifestyle.
          </Text>
          <Button colorScheme="blue" size="lg" mt={8}>
            Explore Our Community
          </Button>
        </Box>
      </Box>

      <Flex justify="center" mt={8}>
        <Button mr={4} as="a" href="/news">
          News Feed
        </Button>
        <Button mr={4} as="a" href="/rooms">
          Rent Rooms
        </Button>
        <Button as="a" href="/directory">
          Resident Directory
        </Button>
      </Flex>
    </Box>
  );

  
};

export default Index;
