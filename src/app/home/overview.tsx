"use client";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Link,
  Divider,
} from "@chakra-ui/react";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"3xl"} mt={-20} mb={-20}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={"green.400"}
          >
            Why us?
            <br />
            <Text as={"span"} color={"blue.400"}>
              @ Warkop Militan
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={"2xl"}>
            Our mission is to offer a unique and memorable gourmet dining
            experience through a family oriented and intimate atmosphere. We
            also work towards Providing the best Customer Service to all of our
            customers, making sure that everybody leaves with a healthy stomach
            and healthy hearts. It is also the goal of the company to expand
            further to different locations, as more and more customers are
            recognizing our restaurant brand.
            <br />
            <br />
            As a Cafe Bistro specializes in serving freshly baked pastries, as
            well as delectable desserts. Among the highly patronized offers in
            Cafe Bistro includes homemade pastas, salads, breakfast, as well as
            other gourmet main courses such as the famous gnocchi dish.
          </Text>
          <Stack
            direction={"row"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              textDecoration={"none"}
            >
              <Link href="/#book">Book Place</Link>
            </Button>
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
                textDecoration: "none",
              }}
            >
              <Link href="/About">Learn more About us</Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Divider />
    </>
  );
}
