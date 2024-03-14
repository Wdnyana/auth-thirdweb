import { Schema } from 'mongoose'
import { User, Roles } from '@/types/mongoModels'
import mongoose from 'mongoose'

const usersSchema = new Schema<User>(
  {
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pin: {
      type: Number,
    },
    role: {
      type: String,
      enum: Object.values(Roles),
      default: Roles.USER,
    },
    isActive: {
      type: Boolean,
      default: true,
      alias: 'is_active',
    },
    wallets: {
      address: {
        type: String,
      },
      network: {
        type: String,
      },
    },
    collections: {
      type: Schema.Types.ObjectId,
      ref: 'Collections',
    },
    transactions: {
      type: Schema.Types.ObjectId,
      ref: 'Transactions',
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
      alias: 'created_at',
    },
    updatedAt: {
      type: Date,
      alias: 'updated_at',
    },
    deletedAt: {
      type: Date,
      alias: 'deleted_at',
    },
  },
  { timestamps: true, autoCreate: true }
)

const entityUsers =
  mongoose.models?.Users || mongoose.model<User>('Users', usersSchema)

export default entityUsers
