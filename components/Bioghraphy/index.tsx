"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'

import Aos from 'aos'
import "aos/dist/aos.css";

import { Facebook, Instagram, TikTok, Twitter } from '../Icons'

const Biography = () => {

    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 200,
        });
    }, []);

    useEffect(() => {
        Aos.refresh()
    }, [])

    return (
        <section className='container my-44'>
            <div className='flex flex-col lg:items-center lg:flex-row gap-y-4 lg:gap-x-8'>
                <div className='w-full lg:order-2'>
                    <h2 data-aos="zoom-out-right" data-aos-delay="400" className='text-white font-mono text-3xl lg:text-5xl'>BIO</h2>
                    <div data-aos="zoom-out-left" data-aos-delay="500" className='w-full lg:border-b-2 lg:border-[#313131]'>
                        <p className='lg:max-w-lg text-sm lg:text-base my-4 text-[#CBCBCB] lg:pl-6 lg:pb-10'>
                            Ahir Yousefi, born in Tehran on August 10th, 1997, embarked on his musical journey at the age of 16. His strong passion for music led him to seamlessly transition from a background in electrical engineering to pursue education in music at the Tehran University of Art.
                            <br />
                            <br />
                            Today, Ahir Yousefi is renowned as a songwriter, composer, musician, and accomplished singer.
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
                <div data-aos="zoom-out" data-aos-delay="300" className='w-full pt-6 pb-10 border-b border-[#313131] lg:p-0 lg:border-none'>
                    <div className='w-full h-[600px] bg-center bg-cover rounded-[30px]' style={{ backgroundImage: `url('/images/home/biography.jpg')` }}>
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