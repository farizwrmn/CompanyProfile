"use client";

import Link from "next/link";
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

interface Props {
  children: React.ReactNode;
}

interface NavbarProps {
  brandName: string;
  imageSrcPath: string | StaticImageData;
}

const Links = ["About Us", "Products", "Teams"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={3}
      py={3}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.300", "gray.700"),
      }}
      href={
        ((Links[0] = <Link href="/About">About us</Link>),
        (Links[1] = <Link href="/Products">Products</Link>),
        (Links[2] = <Link href="/About#Teams">Teams</Link>))
      }
    >
      {children}
    </Box>
  );
};

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
              <Link href="/">
                <Image src={imageSrcPath} width="34" height="10" alt="Logo" />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
