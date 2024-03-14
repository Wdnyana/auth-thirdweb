'use client'

import {
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  metamaskWallet,
  smartWallet,
  walletConnect,
} from '@thirdweb-dev/react'
import { NFTProviders } from '@/types/thirdweb'
import env from '@/lib/env'

const ThirdwebProviders = ({
  children,
  clientId,
  activeChain,
}: NFTProviders) => {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={clientId}
      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || '',
        authUrl: '/api/auth',
      }}
      supportedWallets={[
        smartWallet(
          embeddedWallet({
            auth: {
              options: ['email', 'google'],
            },
          }),
          {
            factoryAddress: env.thirdweb.factoryAddress,
            gasless: true,
          }
        ),
        smartWallet(metamaskWallet(), {
          factoryAddress: env.thirdweb.factoryAddress,
          gasless: true,
        }),
        smartWallet(walletConnect(), {
          factoryAddress: env.thirdweb.factoryAddress,
          gasless: true,
        }),
        smartWallet(coinbaseWallet(), {
          factoryAddress: env.thirdweb.factoryAddress,
          gasless: true,
        }),
      ]}
    >
      {children}
    </ThirdwebProvider>
  )
}

export default ThirdwebProviders
