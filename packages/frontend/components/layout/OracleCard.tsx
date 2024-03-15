import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
interface OracleCardProps {
  children: React.ReactNode
}

export const OracleCard = (props: OracleCardProps): JSX.Element => {
  const bg = useColorModeValue('gray.100', 'yellow.900')
  return (
    <>
      <Box 
            boxShadow='dark-lg' borderWidth='1px' borderRadius='lg' maxWidth="container.sm" p="8" mt="8" bg={bg} {...props}></Box>
    </>
  )
}
