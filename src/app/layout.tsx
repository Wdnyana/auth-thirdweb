import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

import ThirdwebProviders from '@/components/providers/ThirdwebProviders'
import env from '@/lib/env'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const clientId = env.thirdweb.clientId
  const activeChain = 'mumbai'

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProviders activeChain={activeChain} clientId={clientId}>
          {children}
        </ThirdwebProviders>
      </body>
    </html>
  )
}