import { NextResponse } from 'next/server'

import { createUsers, getUser } from '@/models/users'
import clientPromise from '@/lib/mongo'
import { hashPassword } from '@/lib/bcrypts'

import { getUser as getUserFromThirdweb } from '../auth/thirdweb'

export async function POST(req: any) {
  if (req.method === 'POST') {
    try {
      await clientPromise()

      const { name, email, password, role } = await req.json()

      const emailExist = await getUser({ email: email })

      console.log(emailExist)
      if (emailExist) {
        return NextResponse.json(
          { error: 'User is Already Exists.' },
          { status: 409 }
        )
      }

      const user = await createUsers({
        name,
        email,
        password: await hashPassword(password),
        role,
      })

      const savedUser = await user.save()

      return NextResponse.json(
        { message: 'Success Creating new User: ', savedUser },
        { status: 201 }
      )
    } catch (err) {
      console.log('Error on create user', err)
      return NextResponse.json(
        { error: 'Internal server error.' },
        { status: 500 }
      )
    }
  }
}
