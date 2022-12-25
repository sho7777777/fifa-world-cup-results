import {
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';

export const AccordionPart = (props: any) => {
  const { asia3, SetAsia } = props;
  // const asia3 = props.result

  console.log("props", props)
  console.log("props.result", props.result)
  console.log("props.SetAsia", props.SetAsia)
  // console.log("props[SetAsia]", props)
  // console.log("props.result", props.result)
  console.log("asia3-AccordionPart", asia3)

  return (
    // <div>
    //   <p>aaa</p>
    // </div>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {props.result[0].country}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <SimpleGrid columns={{ base: 3, sm: 3, md: 4 }} spacing={1}>
          {/* {asia3.map((result: any, index: any) => ( */}
          {props.result.map((result: any, index: any) => (
            <Box key={result.id} fontSize={{ base: '35px', md: '60px', lg: '65px' }}>
              <button key={result.id} onClick={props.SetCountry} value={index}>
                {/* <button key={result.id} value={index}> */}
                {result.flag}
              </button>
            </Box>
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  )
}
