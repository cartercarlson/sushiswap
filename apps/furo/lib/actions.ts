import { Signature } from '@ethersproject/bytes'
import { AddressZero } from '@ethersproject/constants'
import { BaseContract } from '@ethersproject/contracts'
import { Amount, Type } from '@sushiswap/currency'
import { FuroStream, FuroVesting } from '@sushiswap/furo/typechain'

interface Batch<T> {
  contract: T
  actions: (string | undefined)[]
}

/**
 * Make sure provided contract has a batch function.
 * Calls action directly if provided array is of length 1, encode batch otherwise
 * @param contract should contain batch function
 * @param actions array of encoded function data
 */
export const batchAction = <T extends BaseContract>({ contract, actions = [] }: Batch<T>): string | undefined => {
  const validated = actions.filter(Boolean)

  if (validated.length === 0) throw new Error('No valid actions')

  // Call action directly to save gas
  if (validated.length === 1) {
    return validated[0]
  }

  // Call batch function with valid actions
  if (validated.length > 1) {
    return contract.interface.encodeFunctionData('multicall', [validated])
  }
}

export interface ApproveBentoBoxActionProps<T> {
  contract: T
  user: string
  signature?: Signature
}

export const approveBentoBoxAction = <T extends BaseContract>({
  contract,
  user,
  signature,
}: ApproveBentoBoxActionProps<T>) => {
  if (!signature) return undefined

  const { v, r, s } = signature
  return contract.interface.encodeFunctionData('setBentoBoxApproval', [user, true, v, r, s])
}

export interface StreamCreationActionProps {
  contract: FuroStream
  recipient: string
  currency: Type
  startDate: Date
  endDate: Date
  amount: Amount<Type>
  fromBentobox: boolean
}

export const streamCreationAction = ({
  contract,
  recipient,
  currency,
  startDate,
  endDate,
  amount,
  fromBentobox,
}: StreamCreationActionProps): string => {
  return contract.interface.encodeFunctionData('createStream', [
    recipient,
    currency.isNative ? AddressZero : currency.address,
    startDate.getTime() / 1000,
    endDate.getTime() / 1000,
    amount.quotient.toString(),
    fromBentobox,
  ])
}

export interface VestingCreationProps {
  contract: FuroVesting
  recipient: string
  currency: Type
  startDate: Date
  cliffDuration: string
  stepDuration: string
  steps: string
  stepPercentage: string
  amount: string
  fromBentobox: boolean
}

export const vestingCreationAction = ({
  contract,
  recipient,
  currency,
  startDate,
  cliffDuration,
  stepDuration,
  steps,
  stepPercentage,
  amount,
  fromBentobox,
}: VestingCreationProps): string => {
  return contract.interface.encodeFunctionData('createVesting', [
    {
      token: currency.isNative ? AddressZero : currency.address,
      recipient: recipient,
      start: startDate.getTime() / 1000,
      cliffDuration: cliffDuration,
      stepDuration: stepDuration,
      steps: steps,
      stepPercentage: stepPercentage,
      amount: amount,
      fromBentoBox: fromBentobox,
    },
  ])
}
