import type { Session } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import users from '@/entities/Users'
import { UsersTypes } from '@/types/users'
import clientPromise from '@/lib/mongo'

export const createUsers = async (param: UsersTypes) => {
  const { name, email, password, role } = param

  return await users.create({
    name,
    email,
    password,
    role,
  })
}

export const getUser = async (key: { _id: string } | { email: string }) => {
  return await users.findOne(key)
}
