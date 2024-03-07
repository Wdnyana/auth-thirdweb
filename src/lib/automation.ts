import { config } from 'dotenv'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import env from './env'

config()

const main = async () => {
  if (!env.thirdweb.walletPrivateKey) {
    throw new Error('No private key found')
  }

  try {
    const sdk = ThirdwebSDK.fromPrivateKey(
      env.thirdweb.walletPrivateKey,
      'mumbai',
      {
        secretKey: env.thirdweb.clientSecret,
      }
    )

    const contract = await sdk.getContract(env.thirdweb.contractAddress)
    const address = env.thirdweb.walletAddress // address of the wallet you want to claim the NFTs

    const metadata = async () => {
      const metadata = await contract.metadata.get()
      console.log(metadata)
    }

    const nfts = async () => {
      const nfts = await contract.erc721.getAll()
      console.log(nfts)
    }

    const claimConditions = async (total: number, amount: number) => {
      const presaleStartTime = new Date()
      const claimConditions = [
        {
          startTime: presaleStartTime, // start the presale now
          maxClaimableSupply: amount, // limit how many mints for this presale
          price: 0, // claim price
          address: address, // address of the currency to accept && limit minting to only certain addresses
        },
      ]

      for (let i = total; i >= 0; i--) {
        try {
          await contract.erc1155.claimConditions.set(i, claimConditions)
          const tx = await contract.erc1155.claimTo(address, i, amount)
          const receipt = tx.receipt // the transaction receipt
          console.log(receipt)
          console.log('Success Mint ' + i)
        } catch (e) {
          console.error('Something went wrong: ', e)
        }
      }
    }

    const burn = async (total: number, amount: number) => {
      try {
        for (let i = 0; i < total; i++) {
          const result = await contract.erc1155.burn(i, amount)
          console.log(result)
          console.log('Success Burn ' + i)
        }
      } catch (e) {
        console.error('Something went wrong: ', e)
      }
    }

    nfts()

    metadata() // get the metadata of the contract
    // claimConditions(9734, 500)
    // burn(9999, 1); // burn all the NFTs
  } catch (e) {
    console.error('Something went wrong: ', e)
  }
}

main()
