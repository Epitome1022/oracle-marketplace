import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import '@typechain/hardhat'
import 'hardhat-deploy'
import 'dotenv/config'
import { task } from 'hardhat/config'
import './tasks/withdraw-link'
import './tasks/accounts'
import './tasks/fund-link'
import { HardhatUserConfig } from 'hardhat/types'
import 'solidity-coverage'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (_args, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(await account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL || 'https://goerli.infura.io/v3/a27749044b104f099370a5b6c5ea2914'

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL || 'https://sepolia.infura.io/v3/a27749044b104f099370a5b6c5ea2914'

const MUMBAI_RPC_URL =
  process.env.MUMBAI_RPC_URL || 'https://polygon-mumbai.infura.io/v3/a27749044b104f099370a5b6c5ea2914'

const MNEMONIC = process.env.MNEMONIC || 'your mnemonic'
const ETHERSCAN_API_KEY =
  process.env.ETHERSCAN_API_KEY || 'KBJB6EM7K4YK1HZ9MXTUB3T6XADADC8FGX'
const PRIVATE_KEY = process.env.PRIVATE_KEY || '0xea72f1a3c53fce4690a6484cc4f6bf66fbe3088fd2590e7c97e177a0f8933e8a'


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      chainId: 31337,
      url: 'http://127.0.0.1:8545/',
    },
    goerli: {
      chainId: 5,
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      // accounts: {
      //   mnemonic: MNEMONIC,
      // },
      saveDeployments: true,
    },
    sepolia: {
      chainId: 11155111,
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      // accounts: {
      //   mnemonic: MNEMONIC,
      // },
      saveDeployments: true,
    },
    mumbai: {
      chainId: 80001,
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
    }

  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // apiKey: ETHERSCAN_API_KEY,
    apiKey: {
      polygonMumbai: 'P444IBQ8EJDNMDUH4QWANXT8K5USG9RX2S'
    }
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1,
    },
  },
  typechain: {
    outDir: '../types/typechain',
  },
  solidity: {
    compilers: [
      {
        version: '0.8.20'
      },
      {
        version: '0.8.6',
      },
      {
        version: '0.8.4',
      },
      {
        version: '0.8.3',
      },
      {
        version: '0.6.6',
      },
    ],
  },
  mocha: {
    timeout: 100000,
  },
}

export default config
