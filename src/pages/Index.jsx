import React, { useState } from "react";
import { Box, Heading, Text, Flex, Button, Input, Textarea, Image, Grid, GridItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaGolfBall, FaSwimmingPool, FaCalendar, FaComments } from "react-icons/fa";

const Index = () => {
  const [communityName, setCommunityName] = useState("Sunny Hills Community");
  const [theme, setTheme] = useState("light");
  const [modules, setModules] = useState(["golf", "pool", "events", "messages"]);
  const { isOpen: isNewsOpen, onOpen: onNewsOpen, onClose: onNewsClose } = useDisclosure();
  const { isOpen: isEventsOpen, onOpen: onEventsOpen, onClose: onEventsClose } = useDisclosure();
  const { isOpen: isRoomsOpen, onOpen: onRoomsOpen, onClose: onRoomsClose } = useDisclosure();
  const { isOpen: isMessagesOpen, onOpen: onMessagesOpen, onClose: onMessagesClose } = useDisclosure();
  const { isOpen: isDirectoryOpen, onOpen: onDirectoryOpen, onClose: onDirectoryClose } = useDisclosure();

  return (
    <Box bg={theme === "light" ? "gray.100" : "gray.800"} minH="100vh" color={theme === "light" ? "gray.800" : "white"}>
      <Flex align="center" justify="space-between" p={4} bg={theme === "light" ? "white" : "gray.700"} boxShadow="md">
        <Heading size="xl">{communityName}</Heading>
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark" : "Light"} Mode</Button>
      </Flex>

      <Grid templateColumns="repeat(2, 1fr)" gap={8} p={8}>
        {modules.includes("golf") && (
          <GridItem>
            <Flex direction="column" align="center" p={6} bg={theme === "light" ? "white" : "gray.700"} borderRadius="md" boxShadow="md">
              <FaGolfBall size={48} />
              <Heading size="lg" mt={4}>
                Golf Course
              </Heading>
              <Text mt={2}>Book your tee times and view course information.</Text>
              <Button mt={4} colorScheme="green">
                Book Tee Time
              </Button>
            </Flex>
          </GridItem>
        )}

        {modules.includes("pool") && (
          <GridItem>
            <Flex direction="column" align="center" p={6} bg={theme === "light" ? "white" : "gray.700"} borderRadius="md" boxShadow="md">
              <FaSwimmingPool size={48} />
              <Heading size="lg" mt={4}>
                Swimming Pool
              </Heading>
              <Text mt={2}>View pool hours and rules.</Text>
              <Button mt={4} colorScheme="blue">
                View Pool Info
              </Button>
            </Flex>
          </GridItem>
        )}

        {modules.includes("events") && (
          <GridItem>
            <Flex direction="column" align="center" p={6} bg={theme === "light" ? "white" : "gray.700"} borderRadius="md" boxShadow="md" cursor="pointer" onClick={onEventsOpen}>
              <FaCalendar size={48} />
              <Heading size="lg" mt={4}>
                Events
              </Heading>
              <Text mt={2}>See upcoming community events.</Text>
            </Flex>
          </GridItem>
        )}

        {modules.includes("messages") && (
          <GridItem>
            <Flex direction="column" align="center" p={6} bg={theme === "light" ? "white" : "gray.700"} borderRadius="md" boxShadow="md" cursor="pointer" onClick={onMessagesOpen}>
              <FaComments size={48} />
              <Heading size="lg" mt={4}>
                Messages
              </Heading>
              <Text mt={2}>Message other residents and view the message board.</Text>
            </Flex>
          </GridItem>
        )}
      </Grid>

      <Flex justify="center" mt={8}>
        <Button mr={4} onClick={onNewsOpen}>
          News Feed
        </Button>
        <Button mr={4} onClick={onRoomsOpen}>
          Rent Rooms
        </Button>
        <Button onClick={onDirectoryOpen}>Resident Directory</Button>
      </Flex>

      <Modal isOpen={isNewsOpen} onClose={onNewsClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>News Feed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>Stay up to date with the latest community news and announcements.</Text>
            {/* Add news feed content */}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onNewsClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isEventsOpen} onClose={onEventsClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upcoming Events</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>Check out the upcoming events in our community.</Text>
            {/* Add events calendar or list */}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onEventsClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isRoomsOpen} onClose={onRoomsClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rent Common Area Rooms</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>Rent out common area rooms for your private events.</Text>
            {/* Add room rental form or availability calendar */}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onRoomsClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isMessagesOpen} onClose={onMessagesClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Messages</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>Message other residents and view the community message board.</Text>
            {/* Add messaging component or message board */}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onMessagesClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isDirectoryOpen} onClose={onDirectoryClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resident Directory</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>View the directory of all residents in the community.</Text>
            {/* Add resident directory */}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onDirectoryClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
