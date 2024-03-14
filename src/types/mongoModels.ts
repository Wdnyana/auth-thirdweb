import mongoose, { Document } from 'mongoose'

// role
export enum Roles {
  ADMIN = 'admin',
  USER = 'user',
}

// user
export interface User extends Document {
  name: {
    first: string
    last?: string
  }
  email: string
  password: string
  pin?: number | null
  role: Roles
  isActive: boolean
  wallets?: {
    address: string
    network: string
  }
  collections: mongoose.Types.ObjectId
  transactions: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt?: Date
  deletedAt?: Date
}

// transaction
export interface Transaction extends Document {
  hash: string
  status: string
  block: number
  timestamp: Date
  type: string
  value: any
  fee: any
  gasPrice: any
  userId: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

// collection
export interface Collection extends Document {
  contract: string
  tokenId: number
  nftId: mongoose.Types.ObjectId
  transactionId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

// nft
export interface Nft extends Document {
  contract: string
  owner: string
  type: string
  supply: number
  metadata: any
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

// request
export interface Request extends Document {
  contract: string
  tokenId: string
  status: any
  userId: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
