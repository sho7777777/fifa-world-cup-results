import {
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  result: any;
  setCountry: (e: any) => void;
}

export const AccordionPart: FC<Props> = (props) => {

  const { result, setCountry } = props

  return (
    // <div>
    //   <p>aaa</p>
    // </div>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {result[0].region}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <SimpleGrid columns={{ base: 3, sm: 3, md: 4 }} spacing={1}>
          {result.map((result: any, index: any) => (
            <Box key={result.id} fontSize={{ base: '35px', md: '60px', lg: '65px' }}>
              <button key={result.id} onClick={setCountry} value={String(index) + ":" + result.region}>
                {result.flag}
              </button>
            </Box>
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  )
}
