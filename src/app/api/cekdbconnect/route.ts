import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongo'

export async function GET() {
  const cekConnect = await clientPromise()

  if (cekConnect) {
    console.log('Database is Connected!!', cekConnect)
    return new NextResponse('Database is Connected!!')
  }

  return new NextResponse('Something when Wrongg!!')
}
