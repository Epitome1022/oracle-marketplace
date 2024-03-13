import React from 'react'
import { Box, ColorModeScript, useColorMode, useColorModeValue } from '@chakra-ui/react'
import theme from '../../styles/theme'
interface SectionProps {
  children: React.ReactNode
}

export const Section = (props: SectionProps): JSX.Element => {
  const bg = useColorModeValue('gray.100', 'orange.300')
  return (
    <>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <Box maxWidth="container.sm" p="8" mt="8" bg={bg} {...props}></Box>
    </>
  )
}