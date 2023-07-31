
import React from 'react'
import Link from 'next/link'

import Universal from '../Logo/Universal'
import BlankerCords from '../Logo/BlankerCords'
import VirginRecords from '../Logo/VirginRecords'
import Atlantic from '../Logo/Atlantic'

const Partners = () => {
    return (
        <section className='container my-28'>
            <div className='flex py-28 justify-center items-center w-full h-full border border-[#313131] bg-gradient-to-t from-[#191919] to-[#111111]'>
                <div className='flex flex-col items-center gap-y-10 lg:flex-row lg:gap-x-20'>
                    <Link href={"#"}>
                        <Universal/>
                    </Link>
                    <Link href={"#"}>
                        <BlankerCords/>
                    </Link>
                    <Link href={"#"}>
                        <VirginRecords/>
                    </Link>
                    <Link href={"#"}>
                        <Atlantic/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Partners