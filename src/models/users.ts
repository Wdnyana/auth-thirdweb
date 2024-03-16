import users from '@/entities/Users'
import { UsersTypes } from '@/types/users'

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
