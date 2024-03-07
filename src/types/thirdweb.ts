import { NFT } from '@thirdweb-dev/sdk'

export type NFTCardProps = {
  nft: NFT
}

export type NFTProviders = {
  clientId: string
  activeChain: string
  children: React.ReactNode
}

export type LoginSosialAccount = {
  strategy: any
}
