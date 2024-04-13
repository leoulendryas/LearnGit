"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return(
    <>
      <h1>hello world</h1>
      <button onClick={() => router.back()}>back</button>
    </>
  )
}