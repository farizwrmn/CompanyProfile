"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "We deliver great foods at all cost!",
      text: "Here, everyone gathers for best ambients and warm hospitality. Served warm yet exceptional foods around the menu",
      image:
        "https://images.unsplash.com/photo-1546072533-72256bac6a51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0ZG9vciUyMGNhZmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Cozy Scheme Interior",
      text: "A Place for the cool kids to hangout and show their passion off.",
      image:
        "https://images.unsplash.com/photo-1524193982970-5273c9c11049?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Celebrate Holiday with Theme",
      text: "Everyone gathers here when its Holiday because we always have Holiday Discounts.. Stay Tuned!.",
      image:
        "https://images.unsplash.com/photo-1710880694444-970aaf7e7f97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"700px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"1xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="box.lg" height="600px" position="relative">
              <Stack
                spacing={0}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="53%"
                transform="translate(0, -50%)"
                bgGradient={"linear(to-b, whiteAlpha.800, transparent)"}
                borderRadius={"20"}
                p={10}
              >
                <Heading
                  fontSize={"6xl"}
                  fontWeight={"1000"}
                  color={"Teal"}
                  textAlign={"center"}
                  bgGradient={"linear(to-t, whiteAlpha.800, transparent)"}
                  borderRadius={"20"}
                  p={5}
                >
                  {card.title}
                </Heading>
                <Text
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  fontWeight={"300"}
                  color="darkblue"
                  textAlign={"justify"}
                  bgGradient={"linear(to-b, whiteAlpha.800, transparent)"}
                  p={5}
                  borderRadius={"md"}
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
