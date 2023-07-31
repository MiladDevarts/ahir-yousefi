

import { AppleMusic, Soundcloud, Spotify, Telegram, Youtube } from '../../Icons'
import BlackLogo from '../Logo/Black'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full bg-white text-black py-6'>
            <div className='container flex flex-col lg:flex-row items-center lg: justify-between gap-y-4'>
                <div className='flex items-center gap-x-5'>
                    <Link href={"#"}>
                        <Spotify />
                    </Link>
                    <Link href={"#"}>
                        <Soundcloud />
                    </Link>
                    <Link href={"#"}>
                        <AppleMusic />
                    </Link>
                    <Link href={"#"}>
                        <Youtube />
                    </Link>
                    <Link href={"#"}>
                        <Telegram />
                    </Link>
                </div>
                <BlackLogo />
                <div>
                    <Link href={"#"}>
                        info@ahiryousefi.com
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer