"use client"
import { useRouter } from "next/navigation"
export default function OrderProduct() {
  const randomInt = (count: number) => Math.floor(Math.random() * count)
  const random = randomInt(2)
  if (random === 1){
    throw new Error('please try again later')
  }
  const router = useRouter()
  const handleClick = () => {
    console.log('Placeing your order')
    router.push('/')
  }
  return (
   <>
     <div>Order Product</div>
     <button onClick={handleClick}>place</button>
   </>
  )
}
