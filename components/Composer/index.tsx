
import React from 'react'
import Card from './Card'

const Composer = () => {
  return (
    <section className='container w-full flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-4 flex my-44'>
      <Card image={'/images/composer/2.jpg'} artist={'Pooriya Ariyan'} instagram={'p91.official'} email={'Pooriyaariyan@riv.se'} />
      <Card image={'/images/composer/1.jpg'} artist={'Mostafa Ragheb'} instagram={'Ragheboriginal'} email={'Ragheb@riv.se'} />
      <Card image={'/images/composer/2.jpg'} artist={'Pooriya Ariyan'} instagram={'p91.official'} email={'Pooriyaariyan@riv.se'} />
    </section>
  )
}

export default Composer