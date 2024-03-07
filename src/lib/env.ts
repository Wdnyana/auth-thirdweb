import { config } from 'dotenv'

config()

const env = {
  thirdweb: {
    clientId: `${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}`,
    clientSecret: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY,
    contractAddress: `${process.env.NEXT_PUBLIC_THIRDWEB_CONTRACT_ADDRESS}`,
    factoryAddress: `${process.env.NEXT_PUBLIC_FACTORY_ADDRESS}`,
    walletAddress: `${process.env.NEXT_PUBLIC_WALLET_ADDRESS}`,
    walletPrivateKey: `${process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY}`,
    authDomain: `${process.env.NEXT_PUBLIC_THIDWEB_AUTH_DOMAIN}`,
  },
}

export default env
