import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Button, Slide, useDisclosure } from "@chakra-ui/react";

function Tea() {
  const { isOpen, onToggle } = useDisclosure();
  const property = {
    imageUrl:
      "https://images.unsplash.com/photo-1565206586177-43866e8be5a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZmZlZSUyMHBhY2thZ2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Rear view of modern home with pool",
    acid: "1/5",
    flavour: "5/5",
    title: "Honey Comb Tea",
    formattedPrice: "$50.00",
    reviewCount: 87,
    rating: 5,
  };

  return (
    <>
      <Box display="inline-flex" flexWrap="wrap">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="0"
              >
                {property.acid} Acid &bull; {property.flavour} Flavour
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              textAlign={"left"}
            >
              {property.title}
            </Box>

            <Box textAlign={"left"}>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / Pcs
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
            <Box ml={270}>
              <Button onClick={onToggle} rounded={"full"}>
                Detail
              </Button>
              <Slide direction="bottom" in={isOpen} style={{ zIndex: 100 }}>
                <Box
                  p="50px"
                  color="white"
                  mt="1"
                  bg="teal.500"
                  rounded="md"
                  shadow="md"
                >
                  <Box>
                    <Button
                      alignContent={"center"}
                      onClick={onToggle}
                      rounded={"full"}
                    >
                      X
                    </Button>
                  </Box>
                  <Image
                    src={property.imageUrl}
                    alt={property.imageAlt}
                    rounded={"md"}
                  />
                </Box>
              </Slide>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Tea;
