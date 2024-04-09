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
            <Flex direction="column" align="center" p={6} bg={theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(64, 64, 64, 0.8)"} borderRadius="md" boxShadow="lg" borderWidth={1} borderColor={theme === "light" ? "gray.200" : "gray.600"}>
              <Image src="https://example.com/golf.jpg" alt="Golf" objectFit="cover" w="100%" h={48} borderRadius="md" />
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
            <Flex direction="column" align="center" p={6} bg={theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(64, 64, 64, 0.8)"} borderRadius="md" boxShadow="lg" borderWidth={1} borderColor={theme === "light" ? "gray.200" : "gray.600"}>
              <Image src="https://example.com/pool.jpg" alt="Swimming Pool" objectFit="cover" w="100%" h={48} borderRadius="md" />
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
            <Flex direction="column" align="center" p={6} bg={theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(64, 64, 64, 0.8)"} borderRadius="md" boxShadow="lg" borderWidth={1} borderColor={theme === "light" ? "gray.200" : "gray.600"} cursor="pointer" onClick={onEventsOpen}>
              <Image src="https://example.com/events.jpg" alt="Events" objectFit="cover" w="100%" h={48} borderRadius="md" />
              <Heading size="lg" mt={4}>
                Events
              </Heading>
              <Text mt={2}>See upcoming community events.</Text>
            </Flex>
          </GridItem>
        )}

        {modules.includes("messages") && (
          <GridItem>
            <Flex direction="column" align="center" p={6} bg={theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(64, 64, 64, 0.8)"} borderRadius="md" boxShadow="lg" borderWidth={1} borderColor={theme === "light" ? "gray.200" : "gray.600"} cursor="pointer" onClick={onMessagesOpen}>
              <Image src="https://example.com/messages.jpg" alt="Messages" objectFit="cover" w="100%" h={48} borderRadius="md" />
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
            <Box p={4}>
              <Heading size="md" mb={2}>
                Community Picnic on June 15th
              </Heading>
              <Text fontSize="sm">Join us for a community picnic at the park on June 15th at 12pm. Bring your own food and drinks, and let's enjoy a day of fun and games together!</Text>
            </Box>
            <Box p={4}>
              <Heading size="md" mb={2}>
                New Gym Equipment Installed
              </Heading>
              <Text fontSize="sm">We've just installed new state-of-the-art gym equipment in the fitness center. Come check it out and get your workout on!</Text>
            </Box>
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
            <Box p={4}>
              <Heading size="md" mb={2}>
                Yoga in the Park - Every Saturday 9am
              </Heading>
              <Text fontSize="sm">Join us for a relaxing yoga session every Saturday morning at 9am in the community park. All levels welcome!</Text>
            </Box>
            <Box p={4}>
              <Heading size="md" mb={2}>
                Community Garage Sale - July 10th
              </Heading>
              <Text fontSize="sm">Clean out your closets and make some extra cash at the community garage sale on July 10th from 8am to 2pm. Register to reserve your spot!</Text>
            </Box>
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
            <Box p={4}>
              <Heading size="md" mb={2}>
                Clubhouse Room Rental
              </Heading>
              <Text fontSize="sm">The clubhouse room is available for rent for your private events. Check availability and submit a rental request below.</Text>
              {}
            </Box>
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
            <Box p={4}>
              <Heading size="md" mb={2}>
                New Message from John Doe
              </Heading>
              <Text fontSize="sm">Hey everyone, I'm looking for recommendations for a good plumber. Anyone have someone they'd suggest? Thanks!</Text>
            </Box>
            <Box p={4}>
              <Heading size="md" mb={2}>
                Neighborhood Watch Meeting Notes
              </Heading>
              <Text fontSize="sm">Thanks to everyone who attended the neighborhood watch meeting last night. Here are the key points we discussed...</Text>
            </Box>
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
            <Box p={4}>
              <Heading size="md" mb={2}>
                Resident Directory
              </Heading>
              <Text fontSize="sm">
                John Doe - 123 Main St - 555-1234 - johndoe@email.com
                <br />
                Jane Smith - 456 Oak Ave - 555-5678 - janesmith@email.com
                <br />
                Bob Johnson - 789 Elm Rd - 555-9012 - bobjohnson@email.com
              </Text>
            </Box>
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
