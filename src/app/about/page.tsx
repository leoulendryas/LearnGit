import Link from "next/link"
export const metadata = {
  title: "leoul"
}


export default function about() {
  return(
    <>
    <h1>about page</h1>
    <Link href="/auth/contact">contact</Link>
    </>
  )
}