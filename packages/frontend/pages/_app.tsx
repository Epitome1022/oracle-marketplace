import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider } from '@usedapp/core'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import config from '../conf/config'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <DAppProvider config={config}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </DAppProvider>
  )
}

export default MyApp
