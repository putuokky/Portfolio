import { NextResponse } from "next/server";
// import sosmed from '@/utils/sosmed'

const DATA_SOURCE = "https://jsonplaceholder.typicode.com/todos"
// const DATA_SOURCE = { sosmed }

export async function GET() {
  const res = await fetch(DATA_SOURCE)

  const data = await res.json()

  return NextResponse.json(data)
}