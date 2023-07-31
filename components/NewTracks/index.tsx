
import React from 'react'
import Card from './Card'

const index = () => {
  return (
    <section className='container w-full flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-4 flex my-44'>
      <Card image={'/images/thumbnails/1.jpg'} title={'Baghalam kon'} artist={'Ahir Yousefi'} url={'#'} />
      <Card image={'/images/thumbnails/2.jpg'} title={'Baghalam kon'} artist={'Ahir Yousefi'} url={'#'} />
      <Card image={'/images/thumbnails/3.jpg'} title={'Baghalam kon'} artist={'Ahir Yousefi'} url={'#'} />
    </section>
  )
}

export default index