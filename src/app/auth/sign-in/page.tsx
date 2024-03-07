'use client'

import {
  useConnectionStatus,
  useShowConnectEmbed,
  useWalletContext,
} from '@thirdweb-dev/react'

import SigninForm from '@/components/auth/signin-form'

export default function Signin() {
  const connectiionStatus = useConnectionStatus()
  const showEmbeded = useShowConnectEmbed()
  const { isAutoConnecting } = useWalletContext()

  if (connectiionStatus === 'unknown' || isAutoConnecting) {
    return <p>Loading...</p>
  }

  return <>{showEmbeded && <SigninForm />}</>
}
