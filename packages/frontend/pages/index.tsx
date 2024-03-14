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
      <SimpleGrid columns={2} spacing={10}>
        <OracleCard>
          <Heading as="h2" size="md" mb="2">
            Blockchain Data Feeds
          </Heading>
          <Text mb="4">
            Retrieve the latest prices and data points of assets in your smart contracts.
          </Text>
          <NextLink href="/feeds" passHref>
            <Link>
              Go to List <ArrowForwardIcon />
            </Link>
          </NextLink>
        </OracleCard>
        {/* <OracleCard>
          <Heading as="h2" size="md" mb="2">
            Randomness (VRF)
          </Heading>
          <Text mb="4">
            Use VRF (Verifiable Random Function) to consume randomness in your
            smart contracts.
          </Text>
          <NextLink href="/vrf" passHref>
            <Link>
              Go to List <ArrowForwardIcon />
            </Link>
          </NextLink>
        </OracleCard> */}
        <OracleCard>
          <Heading as="h2" size="md" mb="2">
            Third Party APIs
          </Heading>
          <Text mb="4">
            Request &amp; Receive data from any third party APIs in your smart contracts.
          </Text>
          <NextLink href="/external-api" passHref>
            <Link>
              Go to List <ArrowForwardIcon />
            </Link>
          </NextLink>
        </OracleCard>
        {/* <OracleCard>
          <Heading as="h2" size="md" mb="2">
            Automation
          </Heading>
          <Text mb="4">
            Reliably execute smart contract functions using a variety of triggers.
          </Text>
          <NextLink href="/automation" passHref>
            <Link>
              Go to List <ArrowForwardIcon />
            </Link>
          </NextLink>
        </OracleCard> */}
      </SimpleGrid>
      
    </>
  )
}

export default HomeIndex
