import { ThirdwebAuth } from '@thirdweb-dev/auth/next'
import { PrivateKeyWallet } from '@thirdweb-dev/auth/evm'
import env from '@/lib/env'

const users: Record<string, any> = {}

console.log('ini domain: ', env.thirdweb.authDomain)

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: 'localhost',
  wallet: new PrivateKeyWallet(env.thirdweb.walletPrivateKey),

  callbacks: {
    onLogin: async (address) => {
      if (users[address]) {
        users[address] = {
          created_at: Date.now(),
          last_login_at: Date.now(),
          num_log_outs: 0,
        }
      } else {
        users[address].last_login_at = Date.now()
      }

      return { role: ['admin'] }
    },

    onUser: async (user) => {
      if (users[user.address]) {
        users[user.address].user_last_accessed = Date.now()
      }

      return users[user.address]
    },

    onLogout: async (user) => {
      if (users[user.address]) {
        users[user.address].num_log.outs++
      }
    },
  },
})

export default ThirdwebAuthHandler()
