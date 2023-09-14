
import Link from 'next/link'
import React from 'react'

interface NewTrackProps {
    image: string,
    title: string,
    artist: string,
    url: string
}

const Card: React.FC<NewTrackProps> = (props) => {
    return (
        <div className='relative flex flex-col gap-y-6'>
            <div className='rounded-3xl w-full h-80 bg-center bg-cover' style={{ backgroundImage: `url(${props.image})` }}>
            </div>
            <h3 className='text-white font-mono text-xl'>{props.title}</h3>
            <span className='text-[#CBCBCB]'>{props.artist}</span>
            <Link href={props.url} className='rounded-2xl inline-block w-[250px] lg:w-1/3 bg-white px-8 py-2 text-black text-center'>
                Listen now
            </Link>
        </div>
    )
}

export default Card