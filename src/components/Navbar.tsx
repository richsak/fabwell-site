"use client"; // Add this directive for client components

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Menu, X, ChevronDown } from 'lucide-react'; // Added Menu, X, and ChevronDown icons
import { useState } from 'react';

interface NavLinkChild {
  href: string;
  label: string;
}
interface NavLink {
  href: string;
  label: string;
  children?: NavLinkChild[];
}

const navLinks: NavLink[] = [
  {
    href: "/#services",
    label: "Services",
    children: [
      { href: "/services/commercial", label: "Commercial & Institutional" },
      { href: "/services/industrial", label: "Industrial" },
      { href: "/services/residential", label: "Residential" },
    ],
  },
  {
    href: "/#about",
    label: "About Us",
    children: [
      { href: "/about/team", label: "Meet Our Team" },
      // Can add more "About Us" sub-links here if needed
    ],
  },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for mobile dropdowns
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null); // Close dropdowns when main mobile menu toggles
  };

  const handleMobileDropdownToggle = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Fabwell Logo" width={280} height={76} priority />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1"> {/* Reduced space-x for tighter fit with dropdown indicators */}
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center"
                >
                  {link.label}
                  {link.children && <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-150" />}
                </Link>
                {link.children && (
                  <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-in-out transform scale-95 group-hover:scale-100 z-30">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://www.instagram.com/fabwellindustries/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 px-3 py-2" // Adjusted padding
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
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg absolute top-24 left-0 right-0 z-40 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div>
                    <button
                      onClick={() => handleMobileDropdownToggle(link.label)}
                      className="w-full flex items-center justify-between text-gray-700 hover:bg-green-50 hover:text-green-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
                    >
                      {link.label}
                      <ChevronDown size={20} className={`transition-transform duration-150 ${openMobileDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openMobileDropdown === link.label && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-green-100 hover:text-green-700"
                            onClick={toggleMobileMenu} // Close main menu on sub-link click
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:bg-green-50 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
                    onClick={toggleMobileMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="https://www.instagram.com/fabwellindustries/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:bg-green-50 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
              onClick={toggleMobileMenu}
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