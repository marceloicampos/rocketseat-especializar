// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Top from '@/components/Top'

const inter = Inter({ subsets: ['latin'] })

const name = 'marcelo'
let canal = 'curso de react'

function retNameOut() {
  return name
}

const cnl = () => {
  return canal
}

// function Top() {
//   return (
//     <div className='flex justify-between items-center gap-2 bg-violet-800 h-10 w-[720px]'>
//       <div>T--</div>
//       <div className='subTitleTopo'>Logo</div>
//       <div className='flex flex-col justify-center items-center'>
//         <div className='text-xs'>{canal}</div>
//         <div className='nextCurso text-stone-950'>curso de react</div>
//       </div>
//       <div style={{ color: '#f00', backgroundColor: '#bbb' }}>{name}</div>
//       <div>--T</div>
//     </div>
//   )
// }

export default function Home() {
  function retNameIn() {
    return name
  }
  return (
    <main
      className={`${inter.className}`}
    >
      <p>Hello World !!!</p>
      <p>{name}__1</p>
      <p>{canal}__2</p>
      <p>{retNameOut()}__3</p>
      <p>{retNameIn()}__4</p>
      <p>{cnl()}__5</p>
      <p>-------------</p>
      {Top()}
      <p>-------------</p>
      <Top />
      <p>-------------</p>
      <div style={test}>
        <div>Curso de React Next</div>
        <div>TypeScript</div>
        <div>JavaScript</div>
      </div>
    </main>
  )
}

const test = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  gap: '16px',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px',
  width: '720px'
}
