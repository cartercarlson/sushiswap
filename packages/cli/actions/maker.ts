import { ChainKey } from '@sushiswap/chain'
import { LiquidityPosition, Pair, Token } from '@sushiswap/graph-client'
import chalk from 'chalk'
import Table from 'cli-table3'
import numeral from 'numeral'

import { MAKER_CONFIG } from '../config'

type LiquidityPositons = Array<
  Pick<LiquidityPosition, 'liquidityTokenBalance'> & {
    pair: Pick<Pair, 'id' | 'totalSupply' | 'reserveUSD'> & {
      token0: Pick<Token, 'id' | 'symbol' | 'name' | 'decimals'>
      token1: Pick<Token, 'id' | 'symbol' | 'name' | 'decimals'>
    }
  }
>

type Arguments = {
  network?: string
  verbose?: boolean
}

interface row {
  pair: string
  pairId: string
  lpUsdValue: number
}

export async function maker(args: Arguments) {
  if (args.network) {
    const network = Object.values(ChainKey).find((networkName) => networkName === args.network?.toLowerCase())
    console.log('network selected: ', network)

    if (!network || !(network in MAKER_CONFIG)) {
      throw new Error('Unsupported chain. Supported chains are: '.concat(Object.keys(MAKER_CONFIG).join(', ')))
    }

    const liquidityPositions = Object.values(
      await MAKER_CONFIG[network].fetcher({ id: MAKER_CONFIG[network].address })
    )[0]?.liquidityPositions

    if (network && liquidityPositions) {
      printMakerTable(network, liquidityPositions)
    } else {
      console.log('network or subgraph response was empty')
    }
  } else {
    const makers = await Promise.all(
      Object.keys(MAKER_CONFIG).map((chain) =>
        Promise.resolve(MAKER_CONFIG[chain].fetcher({ id: MAKER_CONFIG[chain].address })).then((result) => ({
          network: chain,
          address: MAKER_CONFIG[chain].address,
          type: MAKER_CONFIG[chain].type,
          liquidityPositions: result,
        }))
      )
    )
    const columns = ['Network', 'Maker address', 'type/owner', 'LP USD value']
    let totalValue = 0
    const rows =
      makers?.map((lp) => {
        const network = lp.network.toString()
        const makerAddress = lp.address
        const type = lp.type
        const liquidityPositions = Object.values(lp.liquidityPositions)[0]?.liquidityPositions
        const lpValue = liquidityPositions?.map((lp) =>
          Number(lp.pair.totalSupply)
            ? (Number(lp.liquidityTokenBalance) / Number(lp.pair.totalSupply)) * Number(lp.pair.reserveUSD)
            : 0
        )
        const summedLp = lpValue?.reduce((acc, curr) => acc + curr)
        totalValue += summedLp ?? 0

        if (network && liquidityPositions && args.verbose) {
          printMakerTable(network, liquidityPositions)
        }

        return {
          network,
          makerAddress,
          type,
          summedLp: numeral(summedLp).format('$0.00a'),
        }
      }) ?? []

    const table = new Table({ head: columns, style: { compact: true } })

    rows.forEach((row) => table.push(Object.values(row)))

    console.log(chalk.red('Maker, summary'))
    console.log(table.toString())
    console.log(`Total value: ` + chalk.green(`${numeral(totalValue).format('$0.00a')}`))
  }
}

function printMakerTable(network: string, liquidityPositions: LiquidityPositons) {
  const columns = ['Pair Name', 'Pair Address', 'LP USD Value']

  const rows =
    liquidityPositions
      ?.map((lp) => {
        const pair = lp.pair
        const lpUsdValue = Number(lp.pair.totalSupply)
          ? (Number(lp.liquidityTokenBalance) / Number(lp.pair.totalSupply)) * Number(lp.pair.reserveUSD)
          : 0
        return {
          pair: `${pair?.token0.symbol}-${pair?.token1.symbol}`,
          pairId: pair?.id,
          lpUsdValue,
        } as row
      })
      .sort((a, b) => (a.lpUsdValue > b.lpUsdValue ? -1 : 1))
      .map((row) => ({ pair: row.pair, pairId: row.pairId, lpUsdValue: numeral(row.lpUsdValue).format('$0.00a') })) ??
    []

  const table = new Table({ head: columns, style: { compact: true } })

  rows.forEach((row) => table.push(Object.values(row)))

  console.log(chalk.red(`Maker, network: ${network}`))
  console.log(table.toString())
}
