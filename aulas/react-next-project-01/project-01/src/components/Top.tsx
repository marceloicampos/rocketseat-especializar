export default function Top () {
    return (
        <div className='flex justify-between items-center gap-2 bg-violet-800 h-10 w-[720px]'>
        <div>T--</div>
        <div className='subTitleTopo'>Logo</div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-xs'>{'curso de react'}</div>
          <div className='nextCurso text-stone-950'>curso de react</div>
        </div>
        <div style={{ color: '#f00', backgroundColor: '#bbb' }}>{'marcelo'}</div>
        <div>--T</div>
      </div>
    )
}
