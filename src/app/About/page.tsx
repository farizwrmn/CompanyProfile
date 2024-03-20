"use client";

import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Card,
  CardBody,
  Heading,
  Divider,
  Image,
} from "@chakra-ui/react";
import Navbar from "../home/navbar";
import logo from "../img/cup.png";
import SmallWithSocial from "../home/footer";

export default function WithLargeQuote() {
  return (
    <>
      <Navbar brandName="Warkop Militan" imageSrcPath={logo} />
      <Stack
        bg={useColorModeValue("gray.50", "gray.800")}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={"center"}
        direction={"column"}
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign={"center"}
          maxW={"3xl"}
          fontWeight={1000}
        >
          Company History <hr />
        </Text>
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          textAlign={"center"}
          maxW={"3xl"}
        >
          Warkop Militan served as a leading cafe which provided cultural
          gentrification the first time it opened 5 years ago. The owner, Mr.
          Elmer Mizza, succeeded the management of the cafe after his father,
          who established the presence of the cafe in the local market. The cafe
          is currently employing 10 employees. The cafe location can seat up to
          40 customers in its 50 meters location.
        </Text>
        <Divider />
        <hr />
        <Text fontWeight={1000} fontSize={"2xl"} id="Teams">
          Meet your (coffee) makers
          <hr />
        </Text>
        <Box display="flex" flexWrap="wrap" w="85%">
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1599000117646-493e27e0e609?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhcmlzdGF8ZW58MHx8MHx8fDA%3D"
                alt="Dan Broom"
              />
              <Stack mt="6" spacing="3" textAlign="center">
                <Heading size="md">Dan Broom</Heading>
                <Text>
                  Our valuable head bar at our Cafe, incredible work rate and
                  awesome management.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhcmlzdGF8ZW58MHx8MHx8fDA%3D"
                alt="Claire Bossum"
              />
              <Stack mt="6" spacing="3" textAlign="center">
                <Heading size="md">Claire Bossum</Heading>
                <Text>
                  Our most playful barista, she had completed the task of most
                  great barista ever achieve.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmlzdGF8ZW58MHx8MHx8fDA%3D"
                alt="Franz Kehler"
              />
              <Stack mt="6" spacing="3" textAlign="center">
                <Heading size="md">Franz Kehler</Heading>
                <Text>
                  Lovely guy who determined in doing his job, always cheered
                  other employee which makes him the best waiters in our Cafe.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1599549192669-6baac5d32432?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhcmlzdGF8ZW58MHx8MHx8fDA%3D"
                alt="Fredrick Bohler"
              />
              <Stack mt="6" spacing="3" textAlign="center">
                <Heading size="md">Fredrick Bohler</Heading>
                <Text>
                  If there is a word for "Most focused Man on earth" I will give
                  that to this guy, he's awesome time management and precision
                  says it all.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1517701928392-16651ac1e944?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJhcmlzdGF8ZW58MHx8MHx8fDA%3D"
                alt="Justin Harrison"
              />
              <Stack mt="6" spacing="3" textAlign="center">
                <Heading size="md">Justin Harrison</Heading>
                <Text>
                  Our employee of the month, Justin make his work like its his
                  playground always know the detail in everything. Although food
                  is his main objective but his workrate in covering other
                  employee is exceptional.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1517701848373-805868efd0ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJhcmlzdGF8ZW58MHx8MHx8fDA%3D"
                alt="Herera Hawk"
              />
              <Stack mt="6" spacing="3" textAlign="center">
                <Heading size="md">Herera Hawk</Heading>
                <Text>
                  Our new Barista from Starling, with experience above the roof
                  his specialty brings joy to our customers. Great sense of
                  Humor and competent in Cashier Machine.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Box>
        <br />
        <Divider />
        <Text
          fontSize={"xl"}
          textAlign={"center"}
          maxW={"2xl"}
          bg="white"
          p={10}
          borderRadius={10}
          border="outset"
        >
          "Aside from the dining experience, our Cafe is known for offering
          extra services. For instance, we provide our customers with a card,
          one for the comments and the other for customer details. We keep a
          customer database, with customers receiving sporadic deals at
          different locations, including birthday deals."
        </Text>
        <Box textAlign={"center"}>
          <Avatar
            src={
              "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybWFsJTIwbWVufGVufDB8fDB8fHww"
            }
            mb={2}
          />

          <Text fontWeight={600}>Jon Bovi</Text>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.400", "gray.400")}
          >
            Company CEO
          </Text>
        </Box>
      </Stack>

      <SmallWithSocial />
    </>
  );
}
