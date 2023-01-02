import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box
      bg="green.100"
      textAlign="center"
      zIndex={5}
      position="fixed"
      bottom="0"
      left="0"
      w="100%"
    >
      <span>
        Created By
        <Text color="blue.400" _hover={{ color: "blue.600" }} display="inline">
          <Link
            href="https://github.com/sho7777777"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Sho
          </Link>
        </Text>
      </span>
    </Box>
  );
};
