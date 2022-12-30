import {
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Country } from '../type/countryType';

type Props = {
  result: Country[];
  setCountry: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const AccordionPart: FC<Props> = (props) => {

  const { result, setCountry } = props
  const region: string = result[0].region

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {region}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <SimpleGrid columns={{ base: 3, sm: 3, md: 4 }} spacing={1}>
          {result.map((result: Country, index: number) => (
            <Box key={result.id} fontSize={{ base: '35px', md: '60px', lg: '65px' }}>
              <button onClick={setCountry} value={String(index) + ":" + result.region}>
                {result.flag}
              </button>
            </Box>
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  )
}
