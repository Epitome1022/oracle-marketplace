import NextLink from 'next/link'
import { Heading, Text, Link, HStack, Image } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { OracleCard } from '../components/layout'
import { SimpleGrid, Box } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../styles/theme'

function HomeIndex(): JSX.Element {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Heading as="h1" mb="4">
        CommuneAI Oracle Service
      </Heading>
      <Text fontSize="xl">
        Oracle Protocol for CommuneAI on EVM
      </Text>
      <Box borderRadius="lg" bg={'white'} mt={8} p={2}>
        <HStack>
          <Text fontSize='4xl' color={'black'}>CommuneAI Oracle Service Architecture</Text>
          <Image src={'./images/diagram.jpg'}></Image>
        </HStack>
      </Box>
    </>
  )
}

export default HomeIndex
