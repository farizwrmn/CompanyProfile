"use client";

import { Link as ChakraLink } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface NavbarProps {
  brandName: string;
  imageSrcPath: string | StaticImageData;
}

const Links = [
  {
    title: "About Us",
    url: "/About",
  },
  {
    title: "Products",
    url: "/Products",
  },
  {
    title: "Teams",
    url: "/About#Teams",
  },
];

function NavLink({ title, url }: { title: string; url: string }) {
  return (
    <div>
      <ChakraLink
        href={url}
        px={3}
        py={3}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("teal.300", "gray.700"),
        }}
      >
        {title}
      </ChakraLink>
    </div>
  );
}

export default function Simple({ brandName, imageSrcPath }: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("ivory", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={1030} alignItems={"right"}>
            <Box ml={14}>
              <ChakraLink href="/">
                <Image src={imageSrcPath} width="34" height="10" alt="Logo" />
              </ChakraLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink title={link.title} url={link.url} />
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={10} textAlign={"center"}>
              {Links.map((link) => (
                <NavLink title={link.title} url={link.url} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
