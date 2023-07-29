
import Link from 'next/link'
import React from 'react'

const Card = () => {
    return (
        <div className='relative flex flex-col gap-y-6'>
            <div className='w-full h-80 bg-center bg-cover' style={{ backgroundImage: `url('/images/thumbnails/1.jpg')` }}>
            </div>
            <h3 className='text-white font-mono text-xl'>Baghalam kon</h3>
            <span className='text-[#CBCBCB]'>Ahir Yousefi</span>
            <Link href={"#"} className='inline-block w-1/2 bg-white px-6 py-3 text-black text-center'>
                Listen now
            </Link>
        </div>
    )
}

export default Card