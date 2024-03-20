import { Divider, Image } from "@chakra-ui/react";
import { Box, Badge, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Latte() {
  const property = {
    imageUrl:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZmZlZSUyMHBhY2thZ2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Rear view of modern home with pool",
    acid: "0/5",
    flavour: "4/5",
    title: "Red Sugar Latte",
    formattedPrice: "$12.00",
    reviewCount: 197,
    rating: 4,
  };

  return (
    <>
      <Box display="inline-flex" flexWrap="wrap">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          m={10}
        >
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
            >
              {property.title}
            </Box>

            <Box>
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
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Latte;
