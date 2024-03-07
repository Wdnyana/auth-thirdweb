import { ConnectEmbed } from '@thirdweb-dev/react'
import { useRouter } from 'next/navigation'

export default function SigninForm() {
  const router = useRouter()

  return (
    <div className="h-screen">
      <div className="grid flex-grow grid-cols-1 gap-0 lg:grid-cols-[1fr_40%] 3xl:grid-cols-2 h-full">
        <div className="flex flex-col items-center justify-center py-14">
          <div className="grid w-full max-w-[480px] grid-cols-1 px-4">
            <div className="w-full flex items-center justify-start">
              <h1 className="ms-5 uppercase font-semibold  dark:text-white text-xl lg:text-2xl">
                sudigital
              </h1>
            </div>

            <div className="text-left my-6">
              <h2 className="text-xl font-medium uppercase dark:text-white lg:text-2xl">
                Welcome Back!
              </h2>

              <p className="mt-3 text-sm text-[#4B5563] dark:text-gray-300">
                Please Sign in into your account.
              </p>
            </div>

            <ConnectEmbed
              theme="light"
              auth={{
                onLogin() {
                  router.push('/dashboard')
                },
              }}
            />
          </div>
        </div>

        <div className="relative hidden bg-[#F3F4F6] lg:block">
          <div className="bg-purple-500 object-cover h-full w-full" />
        </div>
      </div>
    </div>
  )
}
