import {Metadata} from 'next'

type Props = {
  params: {
    contact: string
  }
}
export const generateMetaData = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Iphone ${params.contact}`)
    }, 100)
  })
  return {
    title: `product ${title}`,
    description: 'test %5F'
  }
}


function firstName(){
  return <div>leoul</div>
}
export default function secondName({params}: Props){
  return(
    <>
      <h1>{firstName()}</h1>
      <h2>endryas</h2>
      <h3>{params.contact}</h3>
    </>
  )
}