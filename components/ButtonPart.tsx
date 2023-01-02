import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  countryNo: string;
  groupName: string;
  showCountryFunc: (i: string) => void;
};

export const ButtonPart: FC<Props> = (props) => {
  const { countryNo, groupName, showCountryFunc } = props;

  const showCountry = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const i: string = (e.target as HTMLButtonElement).value;
    showCountryFunc(i);
  };

  return (
    <Button
      colorScheme="teal"
      size="sm"
      onClick={showCountry}
      value={countryNo}
    >
      {groupName}
    </Button>
  );
};
