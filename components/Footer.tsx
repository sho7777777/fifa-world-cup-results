import { Box } from "@chakra-ui/react"
import Link from "next/link"


export const Footer = () => {
  return (
    <Box bg="green.100" textAlign="center" zIndex={5} position="fixed" bottom="0" left="0" w="100%">
      <Link href={"#"}>Created by Sho</Link>
    </Box>
  )
}
