import { NextResponse } from "next/server";
// import { sosmed } from '@/app/utils/sosmed'

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
// const DATA_SOURCE = [
//   {
//     name: 'Facebook',
//     link: 'https://www.facebook.com/okkymahes/',
//   },
//   {
//     name: 'Twitter',
//     link: 'https://twitter.com/okkymhwr',
//   },
// ]

export async function GET() {

  const res = await fetch(DATA_SOURCE_URL)

  const data = await res.json()

  return NextResponse.json(data)
}