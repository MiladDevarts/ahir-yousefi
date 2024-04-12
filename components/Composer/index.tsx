
import React from 'react'
import Card from './Card'

const Composer = () => {
  return (
    <>
    <h1 className='container mt-44 mb-16 text-3xl font-mono text-white text-center'>Composer of other artists</h1>
    <section className='container w-full flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-[100px] flex mb-44'>
      <Card image={'/images/composer/1.png'} artist={'Mostafa Ragheb'} instagram={'Ragheboriginal'} telegram={'Official telegram channel'} website={''} youtube='' instagramLink={"https://instagram.com/ragheboriginal"} secondaryLink={"https://www.instagram.com/p91.official/"} />
      <Card image={'/images/composer/2.png'} artist={'Pouria Arian'} instagram={'Pouria arian'} website={'Official website'} telegram='' youtube='' instagramLink={"https://www.instagram.com/p91.official/"} secondaryLink={"https://rivdesign.se"} />
      <Card image={'/images/composer/3.png'} artist={'Emad Talebzadeh'} instagram={'Emad talebzadeh'} youtube={'Official youtube channel'} telegram='' website='' instagramLink={"https://instagram.com/emadghavidelofficial"} secondaryLink={"https://www.youtube.com/@TheEmadGhavidel"} />
    </section>
    </>
    
  )
}

export default Composer