
import React from 'react'
import Card from './Card'

const index = () => {
  return (
    <section className='container w-full flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-4 flex my-20'>
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default index