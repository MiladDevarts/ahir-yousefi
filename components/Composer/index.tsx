
import React from 'react'
import Card from './Card'

const Composer = () => {
  return (
    <>
    <h1 className='container mt-44 mb-16 text-3xl font-mono text-white'>Composer of other artists</h1>
    <section className='container w-full flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-4 flex mb-44'>
      <Card image={'/images/composer/1.png'} artist={'Mostafa Ragheb'} instagram={'p91.official'} email={'Pooriyaariyan@riv.se'} />
      <Card image={'/images/composer/2.png'} artist={'Pouria Arian'} instagram={'Ragheboriginal'} email={'Ragheb@riv.se'} />
      <Card image={'/images/composer/3.png'} artist={'Emad Talebzadeh'} instagram={'p91.official'} email={'Pooriyaariyan@riv.se'} />
    </section>
    </>
    
  )
}

export default Composer