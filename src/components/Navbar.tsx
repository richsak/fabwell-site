"use client"; // Add this directive for client components

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Menu, X } from 'lucide-react'; // Added Menu and X icons
import { useState } from 'react'; // Added useState

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About Us" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/careers", label: "Careers" }, // Assuming Careers is a separate page
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Further increased logo size. Aspect ratio for new logo.png (approx 280/76) */}
              <Image src="/logo.png" alt="Fabwell Logo" width={280} height={76} priority />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/fabwellindustries/?hl=en" // Corrected Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600"
              aria-label="Fabwell Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg absolute top-24 left-0 right-0 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:bg-green-50 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/fabwellindustries/?hl=en" // Corrected Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:bg-green-50 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                <Instagram size={20} className="mr-2" />
                Instagram
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;