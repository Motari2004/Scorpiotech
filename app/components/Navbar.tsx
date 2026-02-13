"use client"; // Required for the menu toggle state

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // Install with: npm install react-icons
import scorpionLogo from "../../public/scorpion.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 shrink-0">
            <Image
              src={scorpionLogo}
              alt="Scorpio Digital"
              width={40}
              height={40}
              className="object-contain rounded-md"
            />
            <span className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent 
                             bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300
                             tracking-wide transition-all hover:scale-105">
              ScorpioTech
            </span>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-100 hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Hidden on Desktop) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 hover:text-yellow-400 focus:outline-none"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Visible only when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <ul className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="block px-3 py-4 text-base font-medium text-gray-100 hover:bg-gray-800 hover:text-yellow-400 rounded-md"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}