import mongoose from 'mongoose'
import env from './env'

declare global {
  var mongoose: any
}

const uri = env.databaseUrl

if (!uri) {
  throw new Error('Missing DATABASE_URL in environment variable .env file')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function clienntPromise() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default clienntPromise
