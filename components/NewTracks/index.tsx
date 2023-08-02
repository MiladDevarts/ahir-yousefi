
import React from 'react'
import Link from 'next/link'

import Card from './Card'

const index = () => {
  return (
    <section id='musics' className='container flex flex-col gap-y-8 lg:gap-y-16 py-22'>
      <div className='flex justify-between items-center'>
        <h2 className='text-white font-mono text-2xl lg:text-4xl'>
          New Tracks
        </h2>
        <Link className='tetx-[#CBCBCB] font-light' href={"#"}>
          View all
        </Link>
      </div>
      <div className='w-full flex flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-4 '>
        <Card image={'/images/thumbnails/1.jpg'} title={'Baghalam kon'} artist={'Ahir Yousefi'} url={'#'} />
        <Card image={'/images/thumbnails/2.jpg'} title={'Baghalam kon'} artist={'Ahir Yousefi'} url={'#'} />
        <Card image={'/images/thumbnails/3.jpg'} title={'Baghalam kon'} artist={'Ahir Yousefi'} url={'#'} />
      </div>
    </section>
  )
}

export default index