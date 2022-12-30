import { Country, Region } from '../type/countryType'
import { FC, useContext } from "react"
import { CountryData } from "../pages"
import { Accordion, Text } from "@chakra-ui/react"
import { AccordionPart } from "./AccordionPart"

type Props = {
  setCountry: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  groupName: string;
}

export const AccordionGroup: FC<Props> = (props) => {

  const { setCountry, groupName } = props;

  const countryData: Region = useContext(CountryData)
  // 地域別国データ
  const asianCountries: Country[] = countryData.asia;
  const africanCountries: Country[] = countryData.africa;
  const europianCountries: Country[] = countryData.europe;
  const oceanianCountries: Country[] = countryData.oceania;
  const southamericanCountries: Country[] = countryData.southamerica;
  const ncacCountries: Country[] = countryData.ncac

  return (
    <Accordion allowToggle w='100%'>
      <Text textAlign='center' mb='5'>{groupName}</Text>
      <AccordionPart result={asianCountries} setCountry={setCountry} />
      <AccordionPart result={africanCountries} setCountry={setCountry} />
      <AccordionPart result={europianCountries} setCountry={setCountry} />
      <AccordionPart result={oceanianCountries} setCountry={setCountry} />
      <AccordionPart result={southamericanCountries} setCountry={setCountry} />
      <AccordionPart result={ncacCountries} setCountry={setCountry} />
    </Accordion>
  )
}
