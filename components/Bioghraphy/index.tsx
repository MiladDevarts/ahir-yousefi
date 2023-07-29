
import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, TikTok, Twitter } from '../Icons'

const Biography = () => {
    return (
        <section className='container my-20'>
            <div className='flex flex-col lg:items-center lg:flex-row gap-y-4 lg:gap-x-8'>
                <div className='w-full lg:order-2'>
                    <h2 className='text-white font-mono text-3xl lg:text-5xl'>BIO</h2>
                    <div className='w-full lg:border-b-2 lg:border-[#313131]'>
                        <p className='lg:max-w-lg text-sm lg:text-base my-4 text-[#CBCBCB] lg:pl-6 lg:pb-10'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </p>
                    </div>
                    <div className='hidden lg:flex gap-x-5 items-center my-8 lg:pl-6'>
                        <span>Follow on</span>
                        <svg width="24" height="1" viewBox="0 0 24 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="24" y2="0.5" stroke="white" />
                        </svg>
                        <Link href={"#"}>
                            <Instagram />
                        </Link>
                        <Link href={"#"}>
                            <Twitter />
                        </Link>
                        <Link href={"#"}>
                            <Facebook />
                        </Link>
                        <Link href={"#"}>
                            <TikTok />
                        </Link>
                    </div>
                </div>
                <div className='w-full pt-6 pb-10 border-b border-[#313131] lg:p-0 lg:border-none'>
                    <div className='w-full h-96 bg-center bg-cover' style={{ backgroundImage: `url('/images/home/biography.jpg')` }}>
                    </div>
                </div>
                <div className='flex lg:hidden gap-x-5 items-center my-8 lg:pl-6'>
                    <span>Follow on</span>
                    <svg width="24" height="1" viewBox="0 0 24 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="24" y2="0.5" stroke="white" />
                    </svg>
                    <Link href={"#"}>
                        <Instagram />
                    </Link>
                    <Link href={"#"}>
                        <Twitter />
                    </Link>
                    <Link href={"#"}>
                        <Facebook />
                    </Link>
                    <Link href={"#"}>
                        <TikTok />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Biography