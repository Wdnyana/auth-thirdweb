// import {
//   useConnectionStatus,
//   useShowConnectEmbed,
//   useWalletContext,
// } from '@thirdweb-dev/react'
// import SigninForm from './signin-form'
// import { useRouter } from 'next/navigation'

// export default function SigninComponent() {
//   const connectiionStatus = useConnectionStatus()
//   const showEmbeded = useShowConnectEmbed()
//   const { isAutoConnecting } = useWalletContext()

//   if (connectiionStatus === 'unknown' || isAutoConnecting) {
//     return <p>Loading...</p>
//   }

//   return <>{showEmbeded && <SigninForm />}</>
// }
