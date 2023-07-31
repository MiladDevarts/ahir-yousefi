
import React from 'react'

const Gallery = () => {
    return (
        <section className='container my-44'>
            <h2 className='mb-10 font-mono text-4xl'>
                Gallery
            </h2>
            <div className='grid grid-cols-3 lg:grid-cols-12 grid-rows-3 lg:grid-rows-2 gap-x-5 gap-y-5'>
                <div className='w-full h-[150px]  lg:h-[250px] bg-white row-start-1 row-end-2 col-start-1 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 bg-cover bg-center' style={{ backgroundImage: `url('/images/gallery/1.jpg')` }}></div>
                <div className='w-full h-[150px]  lg:h-[250px] bg-white row-start-2 row-end-3 col-start-1 col-end-3 lg:row-start-1 lg:row-end-2 lg:col-start-5 lg:col-end-10 bg-cover bg-center' style={{ backgroundImage: `url('/images/gallery/2.jpg')` }}></div>
                <div className='w-full h-[150px]  lg:h-[250px] bg-white row-start-2 row-end-3 col-strat-3 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-10 lg:col-end-13 bg-cover bg-center' style={{ backgroundImage: `url('/images/gallery/4.jpg')` }}></div>
                <div className='w-full h-[150px]  lg:h-[250px] bg-white row-start-3 row-end-4 col-start-1 col-end-4 lg:row-start-2 lg:row-end-3 lg:col-span-12 bg-cover bg-center' style={{ backgroundImage: `url('/images/gallery/3.jpg')` }}></div>
            </div>
        </section>
    )
}

export default Gallery