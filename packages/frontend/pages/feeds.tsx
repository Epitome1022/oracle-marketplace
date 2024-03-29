import React from 'react'
import { Code, Heading, HStack, Link, Text, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { OracleCard } from '../components/layout'
import { SelectFeed, PriceFeed, ProofOfReserve } from '../components/feeds'

function Feeds(): JSX.Element {
  return (
    <>
      <Heading as="h1" mb="4">
        Blockchain Data Feeds
      </Heading>
      <Text fontSize="xl">
        Retrieve the latest prices and data points of assets in your smart
        contracts.
      </Text>
      <SimpleGrid columns={3} spacing={10}>
        <OracleCard>
          <PriceFeed />
          <Text my="4">
            Consuming price feed by address via <Code>AggregatorV3Interface</Code>
            .
          </Text>
          <HStack>
            <Link
              href=""
              isExternal
            >
              Usage <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              href=""
              isExternal
            >
              Contract Addresses <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
        </OracleCard>
        <OracleCard>
          <SelectFeed />
          <Text my="4">
            Feed Registry is an on-chain mapping of assets to feeds. It enables
            you to query Chainlink data feeds from asset addresses directly,
            without needing to know the feed contract addresses.
          </Text>
          <Link href="" isExternal>
            Usage <ExternalLinkIcon mx="2px" />
          </Link>
        </OracleCard>
        <OracleCard>
          <ProofOfReserve />
          <Text my="4">
            Proof of Reserve enables the reliable and timely monitoring of reserve
            assets using automated audits based on cryptographic truth.
          </Text>
          <Link href="" isExternal>
            Usage <ExternalLinkIcon mx="2px" />
          </Link>
        </OracleCard>
      </SimpleGrid>
      
    </>
  )
}

export default Feeds
