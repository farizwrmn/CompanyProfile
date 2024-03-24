"use client";

import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import Navbar from "../home/navbar";
import logo from "../img/cup.png";
import SmallWithSocial from "../home/footer";
import IndexPage from "./team1";

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
        <Text fontWeight={900} fontSize={"2xl"} id="Teams" textAlign={"center"}>
          Meet your (coffee) makers
          <hr />
        </Text>
        <IndexPage />
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
