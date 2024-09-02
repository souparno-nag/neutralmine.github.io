"use client"
import React from 'react'
import icon from "../../public/images/icons.svg"
import icon1 from "../../public/images/icons1.svg"
import Image from 'next/image'
import Link from 'next/link'
import { Hamburger } from '@/components/hamburger'
import StaggeredDropDown from '@/components/Dropdown'
import { HamburgerMenuPage } from '@/components/ham'
import { ModeToggle } from '@/components/ui/togglemode'
import { useTheme } from 'next-themes'



const Navbar = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className="sm:h-[130px]  w-full flex justify-between p-2 ">
            <div className="w-[5vh]">
                <Link href="/">
                    <div className="sm:w-[50px] sm:h-[50px] ">
                        {theme === "dark" ? <Image src={icon1} alt="icon" className="" /> :
                            <Image src={icon} alt="icon" className="" />}
                    </div>
                    <div className="flex justify-between">
                        <div className="px-4 sm:text-5xl">Neutral<span className="text-red-500">MINE</span></div>

                    </div> </Link>
            </div>



            <div className="flex gap-9 text-3xl p-[50px] max-xl:hidden">
                <Link href="/features" className="hover:text-red-500">Features</Link>
                <Link href="/working" className="hover:text-red-500">How it works</Link>
                <Link href="/impact" className="hover:text-red-500">Impact</Link>
                <Link href="/about" className="hover:text-red-500">About Us</Link>
                <Link href="/signup" className="hover:text-red-500">SignUp</Link>
                <ModeToggle />
            </div>
            <div className="xl:hidden">
                <Hamburger />
                {/* <StaggeredDropDown /> */}
                {/* <HamburgerMenuPage /> */}
            </div>

        </div>
    )
}

export default Navbar