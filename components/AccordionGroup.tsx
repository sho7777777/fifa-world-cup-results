import { Region } from "../type/countryType";
import { FC, useContext } from "react";
import { CountryData } from "../pages";
import { Accordion, Text } from "@chakra-ui/react";
import { AccordionPart } from "./AccordionPart";

type Props = {
  setCountry: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  groupName: string;
};

export const AccordionGroup: FC<Props> = (props) => {
  const { setCountry, groupName } = props;
  const countryData: Region = useContext(CountryData);

  return (
    <Accordion allowToggle w="100%">
      <Text textAlign="center" mb="5">
        {groupName}
      </Text>
      <AccordionPart result={countryData.asia} setCountry={setCountry} />
      <AccordionPart result={countryData.africa} setCountry={setCountry} />
      <AccordionPart result={countryData.europe} setCountry={setCountry} />
      <AccordionPart result={countryData.oceania} setCountry={setCountry} />
      <AccordionPart
        result={countryData.southamerica}
        setCountry={setCountry}
      />
      <AccordionPart result={countryData.ncac} setCountry={setCountry} />
    </Accordion>
  );
};
