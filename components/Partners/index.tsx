"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'

import Aos from 'aos'
import "aos/dist/aos.css";

import Universal from '../Layout/Logo/Universal'
import BlankerCords from '../Layout/Logo/BlankerCords'
import VirginRecords from '../Layout/Logo/VirginRecords'
import Atlantic from '../Layout/Logo/Atlantic'

const Partners = () => {

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
        <section className='container my-28'>
            <div className='flex py-28 justify-center items-center w-full h-full border border-[#313131] bg-gradient-to-t from-[#191919] to-[#111111]'>
                <div className='flex flex-col items-center gap-y-10 lg:flex-row lg:gap-x-20'>
                    <Link data-aos="zoom-out" data-aos-delay="200" href={"#"}>
                        <Universal />
                    </Link>
                    <Link data-aos="zoom-out" data-aos-delay="300" href={"#"}>
                        <BlankerCords />
                    </Link>
                    <Link data-aos="zoom-out" data-aos-delay="400" href={"#"}>
                        <VirginRecords />
                    </Link>
                    <Link data-aos="zoom-out" data-aos-delay="500" href={"#"}>
                        <Atlantic />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Partners