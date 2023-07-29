
import Link from 'next/link'
import Logo from '../Logo'

import { Facebook, Instagram, TikTok, Twitter } from "@/components/Icons";

const Navigation = () => {
    return (
        <nav className="container flex justify-between items-center lg:items-start py-6 lg:py-12">
            <Logo />
            <span className="inline-flex lg:hidden">
                <svg width="38" height="9" viewBox="0 0 38 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0H38V2H4V0ZM15.5 7H38V9H15.5V7Z" fill="white" />
                </svg>
            </span>
            <div className="hidden lg:flex gap-x-6">
                <div className="flex flex-col gap-y-5">
                    <Link href={"#"} className="flex items-center gap-x-2">
                        Musics
                    </Link>
                    <Link href={"#"}>
                        Videos
                    </Link>
                    <Link href={"#"}>
                        Manager
                    </Link>
                    <Link href={"#"}>
                        Contact
                    </Link>
                </div>
                <div className="flex gap-x-7">
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
        </nav>
    )
}

export default Navigation