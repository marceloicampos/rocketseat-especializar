// import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const name = 'marcelo'
let canal = 'curso'

function retNameOut() {
  return name
}

export default function Home() {
  function retNameIn() {
    return name
  }
  return (
    <main
      className={`${inter.className}`}
    >
      <p>Hello World !!!</p>
      <p>{name}</p>
      <p>{canal}</p>
      <p>{retNameOut()}</p>
      <p>{retNameIn()}</p>
    </main>
  )
}
