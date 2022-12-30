import React, { FC } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  groupName: string,
  showCountryFunc: () => void;
}

export const ButtonPart: FC<Props> = (props) => {

  const { groupName, showCountryFunc } = props;

  return (
    <Button colorScheme='teal' size='sm' onClick={showCountryFunc}>
      {groupName}
    </Button>
  )
}
