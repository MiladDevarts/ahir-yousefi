
import React from 'react'

const MusicPlayer = () => {
    return (
        <section className='container flex flex-col lg:flex-row gap-x-20 gap-y-10 my-44'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col gap-y-5'>
                    <div className='flex gap-x-3 items-center'>
                        <svg width="26" height="1" viewBox="0 0 26 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="26" y2="0.5" stroke="white" />
                        </svg>
                        <span className='text-[#CBCBCB] font-light text-lg'>Now you stream musics here</span>
                    </div>
                    <h3 className='ml-10 font-mono text-4xl'>
                        Baghalam kon
                    </h3>
                </div>
            </div>
            <div className='w-full lg:w-1/2 h-[400px] lg:h-[700px] bg-center bg-cover' style={{ backgroundImage: `url('/images/music-player/background.jpg')` }}>

            </div>
        </section>
    )
}

export default MusicPlayer