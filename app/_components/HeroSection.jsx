"use client";

import Image from 'next/image';
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const heroImages = [
    { imgUrl: "/images/coal_mine1.jpg", alt: "coal_mine1" },
    { imgUrl: "/images/coal_mine2.jpg", alt: "coal_mine2" },
    { imgUrl: "/images/coal_mine3.jpg", alt: "coal_mine3" },
    { imgUrl: "/images/coal_mine4.jpg", alt: "coal_mine4" },
    { imgUrl: "/images/coal_mine5.jpg", alt: "coal_mine5" },
    { imgUrl: "/images/coal_mine6.jpg", alt: "coal_mine6" },
]

const HeroSection = () => {
    return (
        <div className="max-w-full h-[34vh] overflow-hidden rounded-b-xl">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={2000}
                showArrows={true}
                showStatus={false}
            >
                {heroImages.map((img) => (
                    <Image src={img.imgUrl} alt={img.alt} key={img.alt} width={1920} height={1080} className="object-contain" />
                ))}
            </Carousel>
        </div>
    )
}

export default HeroSection

// Empowering Coal Mines to Achieve Carbon Neutrality

// Quantify carbon emissions, explore reduction strategies, and pave the way to sustainable mining.
// get started learn more