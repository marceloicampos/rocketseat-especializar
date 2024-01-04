// import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const name = 'marcelo'
let canal = 'curso'

function retNameOut() {
  return name
}

const cnl = () => {
  return canal
}

function Top() {
  return (
    <div>
      <div>T--</div>
      <div>Logo</div>
      <div>{canal}</div>
      <div>{name}</div>
      <div>T--</div>
    </div>
  )
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
      <p>---</p>
      <p>{cnl()}</p>
      {Top()}
      <p>---</p>
      <Top />
    </main>
  )
}
