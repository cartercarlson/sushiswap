import { ChainId } from '@sushiswap/chain'
import { ReactNode, useEffect } from 'react'
import { useEnsName } from 'wagmi'
import { UseEnsNameArgs, UseEnsNameConfig } from 'wagmi/dist/declarations/src/hooks/ens/useEnsName'

export type Props = UseEnsNameArgs &
  UseEnsNameConfig & {
    children: ReactNode | Array<ReactNode> | ((payload: ReturnType<typeof useEnsName>) => JSX.Element)
  }

export const AddressToEnsResolver = ({
  children,
  onSuccess,
  chainId = ChainId.ETHEREUM,
  ...props
}: Props): JSX.Element => {
  const result = useEnsName({ ...props, chainId })

  // Custom onSuccess callback to send success data with resolved result
  useEffect(() => {
    if (result.data && onSuccess) onSuccess(result.data)
  }, [result.data])

  if (typeof children === 'function') {
    return children(result)
  }

  return <>{children}</>
}
