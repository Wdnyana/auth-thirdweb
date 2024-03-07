import { ConnectWallet } from '@thirdweb-dev/react'

export default function DashboardPage() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="">
        <h1 className="text-center mb-10">Welcome to Dashboard Page</h1>
        <ConnectWallet />
      </div>
      <div className=""></div>
    </div>
  )
}
