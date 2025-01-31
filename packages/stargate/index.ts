import { ChainId } from '@sushiswap/chain'
import { Currency, Token, USDC, USDC_ADDRESS, USDT, USDT_ADDRESS } from '@sushiswap/currency'

export const STARGATE_CHAIN_ID: Record<number, number> = {
  // MAINNETS
  [ChainId.ETHEREUM]: 1,
  [ChainId.BSC]: 2,
  [ChainId.AVALANCHE]: 6,
  [ChainId.POLYGON]: 9,
  [ChainId.ARBITRUM]: 10,
  [ChainId.OPTIMISM]: 11,
  [ChainId.FANTOM]: 12,
  // TESTNETS
  [ChainId.RINKEBY]: 10001,
  [ChainId.BSC_TESTNET]: 10002,
  [ChainId.AVALANCHE_TESTNET]: 10006,
  [ChainId.POLYGON_TESTNET]: 10009,
  [ChainId.ARBITRUM_RINKEBY_TESTNET]: 10010,
  [ChainId.OPTIMISM_KOVAN_TESTNET]: 10011,
  [ChainId.FANTOM_TESTNET]: 10012,
}

export const STARGATE_ROUTER_ADDRESS: Record<number, string> = {
  [ChainId.ETHEREUM]: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
  [ChainId.POLYGON]: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  [ChainId.AVALANCHE]: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  [ChainId.FANTOM]: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
  [ChainId.BSC]: '0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8',
  [ChainId.OPTIMISM]: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
  [ChainId.ARBITRUM]: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
  // Testnets
  [ChainId.RINKEBY]: '0x82A0F5F531F9ce0df1DF5619f74a0d3fA31FF561',
  [ChainId.BSC_TESTNET]: '0xbB0f1be1E9CE9cB27EA5b0c3a85B7cc3381d8176',
  [ChainId.AVALANCHE_TESTNET]: '0x13093E05Eb890dfA6DacecBdE51d24DabAb2Faa1',
  [ChainId.POLYGON_TESTNET]: '0x817436a076060D158204d955E5403b6Ed0A5fac0',
  [ChainId.FANTOM_TESTNET]: '0xa73b0a56B29aD790595763e71505FCa2c1abb77f',
}

export const STARGATE_USDC_ADDRESS: Record<number, string> = {
  [ChainId.ETHEREUM]: USDC_ADDRESS[ChainId.ETHEREUM],
  [ChainId.POLYGON]: USDC_ADDRESS[ChainId.POLYGON],
  // [ChainId.AVALANCHE]: USDC_ADDRESS[ChainId.AVALANCHE],
  [ChainId.AVALANCHE]: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  [ChainId.FANTOM]: USDC_ADDRESS[ChainId.FANTOM],
  [ChainId.BSC]: USDC_ADDRESS[ChainId.BSC],
  [ChainId.OPTIMISM]: USDC_ADDRESS[ChainId.OPTIMISM],
  [ChainId.ARBITRUM]: USDC_ADDRESS[ChainId.ARBITRUM],
  [ChainId.FANTOM]: USDC_ADDRESS[ChainId.FANTOM],
  // Testnets
  [ChainId.RINKEBY]: '0x1717A0D5C8705EE89A8aD6E808268D6A826C97A4',
  [ChainId.AVALANCHE_TESTNET]: '0x4A0D1092E9df255cf95D72834Ea9255132782318',
  [ChainId.ARBITRUM_RINKEBY_TESTNET]: '0x1EA8Fb2F671620767f41559b663b86B1365BBc3d',
  [ChainId.POLYGON_TESTNET]: '0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7',
  [ChainId.OPTIMISM_KOVAN_TESTNET]: '0x567f39d9e6d02078F357658f498F80eF087059aa',
  [ChainId.FANTOM_TESTNET]: '0x076488D244A73DA4Fa843f5A8Cd91F655CA81a1e',
}

export const STARGATE_USDC: Record<keyof typeof STARGATE_USDC_ADDRESS, Token> = {
  [ChainId.ETHEREUM]: USDC[ChainId.ETHEREUM],
  [ChainId.POLYGON]: USDC[ChainId.POLYGON],
  // [ChainId.AVALANCHE]: USDC[ChainId.AVALANCHE],
  [ChainId.AVALANCHE]: new Token({
    chainId: ChainId.AVALANCHE,
    address: STARGATE_USDC_ADDRESS[ChainId.AVALANCHE],
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [ChainId.FANTOM]: USDC[ChainId.FANTOM],
  [ChainId.BSC]: USDC[ChainId.BSC],
  [ChainId.OPTIMISM]: USDC[ChainId.OPTIMISM],
  [ChainId.ARBITRUM]: USDC[ChainId.ARBITRUM],
  // Testnets

  [ChainId.RINKEBY]: new Token({
    chainId: ChainId.RINKEBY,
    address: STARGATE_USDC_ADDRESS[ChainId.RINKEBY],
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [ChainId.AVALANCHE_TESTNET]: new Token({
    chainId: ChainId.AVALANCHE_TESTNET,
    address: STARGATE_USDC_ADDRESS[ChainId.AVALANCHE_TESTNET],
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [ChainId.ARBITRUM_RINKEBY_TESTNET]: new Token({
    chainId: ChainId.ARBITRUM_RINKEBY_TESTNET,
    address: STARGATE_USDC_ADDRESS[ChainId.ARBITRUM_RINKEBY_TESTNET],
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [ChainId.POLYGON_TESTNET]: new Token({
    chainId: ChainId.POLYGON_TESTNET,
    address: STARGATE_USDC_ADDRESS[ChainId.POLYGON_TESTNET],
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [ChainId.OPTIMISM_KOVAN_TESTNET]: new Token({
    chainId: ChainId.OPTIMISM_KOVAN_TESTNET,
    address: STARGATE_USDC_ADDRESS[ChainId.OPTIMISM_KOVAN_TESTNET],
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [ChainId.FANTOM_TESTNET]: new Token({
    chainId: ChainId.FANTOM_TESTNET,
    address: STARGATE_USDC_ADDRESS[ChainId.FANTOM_TESTNET],
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
}

export const STARGATE_USDT_ADDRESS: Record<number, string> = {
  [ChainId.ETHEREUM]: USDT_ADDRESS[ChainId.ETHEREUM],
  [ChainId.POLYGON]: USDT_ADDRESS[ChainId.POLYGON],
  [ChainId.AVALANCHE]: USDT_ADDRESS[ChainId.AVALANCHE],
  [ChainId.BSC]: USDT_ADDRESS[ChainId.BSC],
  [ChainId.ARBITRUM]: USDT_ADDRESS[ChainId.ARBITRUM],
  [ChainId.FANTOM]: USDT_ADDRESS[ChainId.FANTOM],
  [ChainId.BSC_TESTNET]: '0xF49E250aEB5abDf660d643583AdFd0be41464EfD',
}

export const STARGATE_USDT: Record<keyof typeof STARGATE_USDT_ADDRESS, Token> = {
  [ChainId.ETHEREUM]: USDT[ChainId.ETHEREUM],
  [ChainId.POLYGON]: USDT[ChainId.POLYGON],
  [ChainId.AVALANCHE]: USDT[ChainId.AVALANCHE],
  [ChainId.BSC]: USDT[ChainId.BSC],
  [ChainId.ARBITRUM]: USDT[ChainId.ARBITRUM],
  [ChainId.FANTOM]: USDT[ChainId.FANTOM],
}

export const STARGATE_BUSD_ADDRESS: Record<number, string> = {
  [ChainId.BSC]: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
}

export const STARGATE_BUSD: Record<keyof typeof STARGATE_BUSD_ADDRESS, Token> = {
  [ChainId.BSC]: new Token({
    chainId: ChainId.BSC,
    address: STARGATE_BUSD_ADDRESS[ChainId.BSC],
    decimals: 18,
    symbol: 'BUSD',
    name: 'BUSD Token',
  }),
}

export const STARGATE_BRIDGE_TOKENS: Record<number, Token[]> = {
  [ChainId.ETHEREUM]: [STARGATE_USDC[ChainId.ETHEREUM], STARGATE_USDT[ChainId.ETHEREUM]],
  [ChainId.POLYGON]: [STARGATE_USDC[ChainId.POLYGON], STARGATE_USDT[ChainId.POLYGON]],
  [ChainId.AVALANCHE]: [STARGATE_USDC[ChainId.AVALANCHE], STARGATE_USDT[ChainId.AVALANCHE]],
  [ChainId.FANTOM]: [STARGATE_USDC[ChainId.FANTOM]],
  [ChainId.BSC]: [STARGATE_USDT[ChainId.BSC], STARGATE_BUSD[ChainId.BSC]],
  [ChainId.OPTIMISM]: [STARGATE_USDC[ChainId.OPTIMISM]],
  [ChainId.ARBITRUM]: [STARGATE_USDC[ChainId.ARBITRUM], STARGATE_USDT[ChainId.ARBITRUM]],
}

export const STARGATE_BRIDGE_TOKEN_ADDRESSES: Record<number, string[]> = {
  [ChainId.ETHEREUM]: [STARGATE_USDC_ADDRESS[ChainId.ETHEREUM], STARGATE_USDT_ADDRESS[ChainId.ETHEREUM]],
  [ChainId.POLYGON]: [STARGATE_USDC_ADDRESS[ChainId.POLYGON], STARGATE_USDT_ADDRESS[ChainId.POLYGON]],
  [ChainId.AVALANCHE]: [STARGATE_USDC_ADDRESS[ChainId.AVALANCHE], STARGATE_USDT_ADDRESS[ChainId.AVALANCHE]],
  [ChainId.FANTOM]: [STARGATE_USDC_ADDRESS[ChainId.FANTOM]],
  [ChainId.BSC]: [STARGATE_USDT_ADDRESS[ChainId.BSC], STARGATE_BUSD_ADDRESS[ChainId.BSC]],
  [ChainId.OPTIMISM]: [STARGATE_USDC_ADDRESS[ChainId.OPTIMISM]],
  [ChainId.ARBITRUM]: [STARGATE_USDC_ADDRESS[ChainId.ARBITRUM], STARGATE_USDT_ADDRESS[ChainId.ARBITRUM]],
}

export const STARGATE_POOL_ID: Record<number, Record<string, number>> = {
  [ChainId.OPTIMISM]: {
    [STARGATE_USDC_ADDRESS[ChainId.OPTIMISM]]: 1,
  },
  [ChainId.BSC]: {
    [STARGATE_USDT_ADDRESS[ChainId.BSC]]: 2,
    [STARGATE_BUSD_ADDRESS[ChainId.BSC]]: 5,
  },
  [ChainId.POLYGON]: {
    [STARGATE_USDC_ADDRESS[ChainId.POLYGON]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.POLYGON]]: 2,
  },
  [ChainId.AVALANCHE]: {
    [STARGATE_USDC_ADDRESS[ChainId.AVALANCHE]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.AVALANCHE]]: 2,
  },
  [ChainId.ARBITRUM]: {
    [USDC_ADDRESS[ChainId.ARBITRUM]]: 1,
    [USDT_ADDRESS[ChainId.ARBITRUM]]: 2,
  },
  [ChainId.FANTOM]: {
    [STARGATE_USDC_ADDRESS[ChainId.FANTOM]]: 1,
  },
}

export const STARGATE_BLOCK_CONFIRMATIONS = {
  [ChainId.ETHEREUM]: 15,
  [ChainId.BSC]: 20,
  [ChainId.AVALANCHE]: 12,
  [ChainId.POLYGON]: 512,
  [ChainId.ARBITRUM]: 20,
  [ChainId.OPTIMISM]: 20,
  [ChainId.FANTOM]: 5,
}

export const STARGATE_CONFIRMATION_SECONDS: Record<keyof typeof STARGATE_BLOCK_CONFIRMATIONS, number> = {
  [ChainId.ETHEREUM]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.ETHEREUM] * 14,
  [ChainId.BSC]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.BSC] * 3,
  [ChainId.AVALANCHE]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.AVALANCHE] * 3,
  [ChainId.POLYGON]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.POLYGON] * 3,
  [ChainId.ARBITRUM]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.ARBITRUM] * 15,
  [ChainId.OPTIMISM]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.OPTIMISM] * 13,
  [ChainId.FANTOM]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.FANTOM] * 2,
}

export function isStargateBridgeToken(currency: Currency) {
  return STARGATE_BRIDGE_TOKEN_ADDRESSES[currency.chainId].includes(currency.wrapped.address)
}

export * from './fee'
