import React from "react";
import { Box, Heading, Text, Flex, Button, Image } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <Box>
      <Navigation />
      <Box h="80vh" backgroundImage="url('https://example.com/new-hero.jpg')" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" display="flex" alignItems="center" justifyContent="center" textAlign="center">
        <Box p={6} bg="rgba(255,255,255,0.8)" borderRadius="lg">
          <Heading as="h1" size="2xl" color="brand.900">
            Welcome to Sunny Hills Community
          </Heading>
          <Text fontSize="xl" color="brand.700" mt={4}>
            Discover our world-class amenities and vibrant lifestyle.
          </Text>
          <Button colorScheme="orange" size="lg" mt={8}>
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
