import Link from "next/link";
import Image from "next/image";
import scorpionLogo from "../../public/scorpion.jpg"; // Scorpion image in /public

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900/80 backdrop-blur-md fixed w-full z-50 shadow-md">
      
      {/* Logo / Brand with Scorpion Image */}
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src={scorpionLogo}
          alt="Scorpio Digital"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-2xl font-extrabold bg-clip-text text-transparent 
                         bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300
                         drop-shadow-lg tracking-wide
                         transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl">
          ScorpioTech
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        {[
          { name: "About", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Projects", href: "/projects" },
          { name: "Contact", href: "/contact" },
        ].map((link) => (
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
    </nav>
  );
}
