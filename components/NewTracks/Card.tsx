
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
            <div className='w-full h-80 bg-center bg-cover' style={{ backgroundImage: `url(${props.image})` }}>
            </div>
            <h3 className='text-white font-mono text-xl'>{props.title}</h3>
            <span className='text-[#CBCBCB]'>{props.artist}</span>
            <Link href={props.url} className='inline-block w-1/2 bg-white px-6 py-3 text-black text-center'>
                Listen now
            </Link>
        </div>
    )
}

export default Card