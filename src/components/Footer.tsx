"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpCircle, Instagram } from 'lucide-react'; // Added Linkedin
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const fabwellInfo = {
    addressLine1: "8760 River Road",
    addressLine2: "Delta, BC V4G 1B5",
    phone: "604-588-9353",
    email: "info@fabwell.ca",
    instagramUrl: "https://www.instagram.com/fabwellindustries/?hl=en",
    // Assuming Fabwell doesn't have a public LinkedIn company page link for the footer yet,
    // but we can add one if available. The example image shows LinkedIn for Orion.
    // linkedInUrl: "YOUR_FABWELL_LINKEDIN_COMPANY_URL_HERE",
  };

  // footerNavLinks is no longer needed as per new design
  // const footerNavLinks = [
  //   { href: "/services", label: "Services" },
  //   { href: "/about/team", label: "Team" }, // Updated to new team page
  //   { href: "/projects", label: "Projects" },
  //   // { href: "/news", label: "News" }, // News link not in current Fabwell site
  //   { href: "/contact", label: "Contact" },
  //   { href: "/careers", label: "Careers" },
  // ];


  return (
    <>
      <footer className="bg-slate-900 text-gray-300 py-12 md:py-16"> {/* Dark background like example */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Updated to a 3-column layout essentially */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {/* Column 1: Logo & Tagline */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
              <Link href="/" className="inline-block mb-3">
                <Image src="/logo.png" alt="Fabwell Logo" width={280} height={70} />
              </Link>
              <p className="text-xs text-gray-400 max-w-xs text-center md:text-left">
                Full-service steel fabrication company delivering precision steel solutions.
              </p>
            </div>

            {/* Column 2: Get in touch */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-semibold text-white mb-3">Get in touch.</h3>
              <p className="text-sm leading-relaxed mb-6">
                Interested in joining our team, collaborating on a project, partnering as a vendor, or just want to connect? We’d love to hear from you.
              </p>
            </div>

            {/* Column 3: Contact Details & Social (Moved to the far right) */}
            <div className="md:col-span-1 text-sm md:text-right"> {/* Aligned to the right on medium screens and up */}
              <address className="not-italic space-y-1 mb-4">
                <p>{fabwellInfo.addressLine1}</p>
                <p>{fabwellInfo.addressLine2}</p>
                <p><a href={`mailto:${fabwellInfo.email}`} className="hover:text-green-400 transition-colors">{fabwellInfo.email}</a></p>
                <p><a href={`tel:${fabwellInfo.phone.replace(/-/g, "")}`} className="hover:text-green-400 transition-colors">{fabwellInfo.phone}</a></p>
              </address>
              <div className="flex space-x-3 md:justify-end"> {/* Justify social icons to the right on md+ */}
                {/* {fabwellInfo.linkedInUrl && (
                  <a href={fabwellInfo.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={22} />
                  </a>
                )} */}
                <a href={fabwellInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={22} />
                </a>
              </div>
            </div>

            {/* Navigation Links Column Removed */}
          </div>

          {/* Copyright - Placed below the main grid, centered */}
          <div className="border-t border-slate-700 mt-10 pt-6 text-xs text-gray-500 text-center">
            <p>&copy; {new Date().getFullYear()} Fabwell Industries. All rights reserved.</p>
            <p className="mt-1">CWB & AISC Certified | British Columbia, Canada</p>
          </div>

        </div>
      </footer>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 z-50"
          aria-label="Back to top"
        >
          <ArrowUpCircle size={24} />
        </button>
      )}
    </>
  );
};

export default Footer;