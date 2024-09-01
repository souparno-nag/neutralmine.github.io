import React from 'react'
import icon from "../../public/images/icons.svg"
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="h-[15vh] w-full flex justify-between p-2">
            <div className="w-[5vh] ">
                <Image src={icon} />
                <div className="flex justify-between">
                    <div className="text-5xl">Neutral<span className="text-red-500">MINE</span></div>

                </div>
            </div>
            <div className="flex gap-9 text-3xl p-10">
                <Link href="/features" className="hover:text-red-500">Features</Link>
                <Link href="/working" className="hover:text-red-500">How it works</Link>
                <Link href="/impact" className="hover:text-red-500">Impact</Link>
                <Link href="/about" className="hover:text-red-500">About Us</Link>
                <Link href="/signup" className="hover:text-red-500">SignUp</Link>
            </div>
        </div>
    )
}

export default Navbar