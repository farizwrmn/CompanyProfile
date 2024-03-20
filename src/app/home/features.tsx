"use client";

import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack mt={"-10"}>
      <Flex
        w={410}
        h={10}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"white.400"}
        mb={10}
      >
        {icon}
      </Flex>
      <Text fontWeight={800}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={10} textAlign="center">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={75}>
        <Feature
          icon={<Icon as={FcAssistant} w={150} h={100} />}
          title={"Standby 24 Hours"}
          text={
            "Our worker working tirelessly to assist you with every needs you have so you don't have to worry about getting hungry at midnight or anytime at all"
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={150} h={100} />}
          title={"Cheaper Price"}
          text={
            "With the growing fast paced market, we managed to have a networking with kind farmers who willingly put their life-time efforts in order to have a bright business ahead of our time"
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={150} h={100} />}
          title={"Instant Delivery"}
          text={
            "We have ourselves 4 e-commerce platform to help us deliver our exceptional foods and beverages to you so you don't get to be hungry wherever you are"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
