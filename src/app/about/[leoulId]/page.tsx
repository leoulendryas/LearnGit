import Link from "next/link"

export default function Name({params}: {
  params:{
    leoulId: number
  }
}){
  return(<>
  <h1>{params.leoulId}</h1><h1>leoul{params.leoulId}</h1>
  <Link href="/contact">contact</Link>
  </>) 
}