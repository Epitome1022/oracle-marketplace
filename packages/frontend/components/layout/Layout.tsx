import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Text,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  AbsoluteCenter,
  Spacer
} from '@chakra-ui/react'
import { useEthers, useNotifications } from '@usedapp/core'
import blockies from 'blockies-ts'
import NextLink from 'next/link'
import TagManager from 'react-gtm-module'
import React, { useEffect } from 'react'
import { getErrorMessage } from '../../lib/utils'
import { Balance } from '../Balance'
import { ConnectWallet } from '../ConnectWallet'
import { Head, MetaProps } from './Head'
import { Error } from '../Error'

// Extends `window` to add `ethereum`.
declare global {
  interface Window {
    ethereum: any
  }
}

/**
 * Constants & Helpers
 */

// Title text for the various transaction notifications.
const TRANSACTION_TYPE_TITLES = {
  transactionStarted: 'Started',
  transactionSucceed: 'Completed',
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

// Takes a long hash string and truncates it.
function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...')
}

/**
 * Prop Types
 */
interface LayoutProps {
  children: React.ReactNode
  customMeta?: MetaProps
}

/**
 * Component
 */
export const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const { account, deactivate, error } = useEthers()
  const { notifications } = useNotifications()

  useEffect(() => {
    if (GTM_ID) {
      TagManager.initialize({ gtmId: GTM_ID })
    }
  }, [])

  let blockieImageSrc
  if (typeof window !== 'undefined') {
    blockieImageSrc = blockies.create({ seed: account }).toDataURL()
  }

  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <Box maxWidth="full" boxShadow='2xl' mb={8} pl={8} pr={8}>
          <HStack>
            <Image src='./images/cubes.gif' w={32} h={20}></Image>
            {/* <SimpleGrid
              columns={[1, 1, 1, 2]}
              alignItems="center"
              justifyContent="space-between"
            > */}
              <Flex py={[4, null, null, 0]}>
                
                <NextLink href="/" passHref>
                  <Link px="4" py="1" _hover={{ color: 'blue.500' }}>
                    Home
                  </Link>
                  
                </NextLink>
                <NextLink href="/feeds" passHref>
                  <Link px="4" py="1" _hover={{ color: 'blue.500' }}>
                    Blockchain Data Feeds
                  </Link>
                </NextLink>
                {/* <NextLink href="/vrf" passHref>
                  <Link px="4" py="1" _hover={{ color: 'blue.500' }}>
                    Randomness
                  </Link>
                </NextLink> */}
                <NextLink href="/external-api" passHref>
                  <Link px="4" py="1" _hover={{ color: 'blue.500' }}>
                    Third Party APIs
                  </Link>
                </NextLink>
                <NextLink href="/documentation" passHref>
                  <Link px="4" py="1" _hover={{ color: 'blue.500' }}>
                    Docs
                  </Link>
                </NextLink>
                {/* <NextLink href="/automation" passHref>
                  <Link px="4" py="1" _hover={{ color: 'blue.500' }}>
                    Automation
                  </Link>
                </NextLink> */}
              </Flex>
              <Spacer></Spacer>
              {account ? (
                <Flex
                  order={[-1, null, null, 2]}
                  alignItems={'center'}
                  justifyContent={['flex-start', null, null, 'flex-end']}
                >
                  <Balance />
                  <Image ml="4" src={blockieImageSrc} alt="blockie" />
                  <Menu placement="bottom-end">
                    <MenuButton as={Button} ml="4">
                      {truncateHash(account)}
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => {
                          deactivate()
                        }}
                      >
                        Disconnect
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              ) : (
                <ConnectWallet />
              )}
            {/* </SimpleGrid> */}
          </HStack>
        </Box>
      </header>
      <main>
        <Container maxWidth="container.xl" minH={500}>
          {error && <Error message={getErrorMessage(error)} />}
          {children}
          {notifications.map((notification) => {
            if (notification.type === 'walletConnected') {
              return null
            }
            return (
              <Alert
                key={notification.id}
                status="success"
                position="fixed"
                bottom="8"
                right="8"
                width="400px"
              >
                <AlertIcon />
                <Box>
                  <AlertTitle>
                    {notification.transactionName}{' '}
                    {TRANSACTION_TYPE_TITLES[notification.type]}
                  </AlertTitle>
                  {'transaction' in notification && (
                    <AlertDescription overflow="hidden">
                      Transaction Hash:
                      {truncateHash(notification.transaction.hash, 61)}
                    </AlertDescription>
                  )}
                </Box>
              </Alert>
            )
          })}
        </Container>
      </main>
      <footer>
        <Container mt="8" py="8" maxWidth="container.xl">
          <Link href="https://github.com/epitome1022/oracle-marketplace" isExternal>
            <HStack>
              <Image src="images/github.svg" width="20px" />
              <Text>GitHub Repo</Text>
              <Spacer></Spacer>
              <Text>copyright@2024 communeai.org All rights reserved.</Text>
            </HStack>
          </Link>
        </Container>
      </footer>
    </>
  )
}
