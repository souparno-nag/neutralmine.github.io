
"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For hamburger icons, using Lucide icons

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    My Website
                </div>
                <div className="md:hidden">
                    <button onClick={() => { setIsOpen(!isOpen) }}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
                <div className={`md:flex md:items-center w-full md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="md:flex md:gap-6 mt-4 md:mt-0">
                        <li>
                            <a href="#home" className="block py-2 px-4 text-white hover:bg-gray-700 rounded">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-4 text-white hover:bg-gray-700 rounded">About</a>
                        </li>
                        <li>
                            <a href="#services" className="block py-2 px-4 text-white hover:bg-gray-700 rounded">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 px-4 text-white hover:bg-gray-700 rounded">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar2;
