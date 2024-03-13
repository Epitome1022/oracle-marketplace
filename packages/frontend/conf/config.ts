import {
  ChainId,
  Config,
  Sepolia,
  Goerli,
  Mainnet,
  Hardhat,
} from '@usedapp/core'
import deployedContracts from '../contracts/hardhat_contracts.json'

const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY

const config: Config = {
  readOnlyChainId: ChainId.Sepolia,
  readOnlyUrls: {
    // [ChainId.Goerli]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
    // [ChainId.Sepolia]: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
    // [ChainId.Mainnet]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    [ChainId.Hardhat]: 'http://127.0.0.1:8545',
  },
  networks: [Sepolia, Goerli, Hardhat],
  multicallAddresses: {
    [ChainId.Hardhat]:
      deployedContracts[ChainId.Hardhat][0].contracts.CommuneMulticall.address,
    // [ChainId.Mainnet]: Mainnet.multicallAddress,
  },
}

export const WbtcPorAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'

export const FeedRegistryAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'

export const LinkTokenAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'

export enum Denominations {
  ETH = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  BTC = '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  USD = '0x0000000000000000000000000000000000000348',
}

export const OpenSeaUrl = 'https://testnets.opensea.io'

export default config
