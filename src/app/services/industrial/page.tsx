"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const IndustrialPage = () => {
  const pageData = {
    title: "Industrial Steel Solutions",
    mainDescription: "Fabwell Industries delivers high-performance steel solutions for critical industrial operations where strength, precision, and reliability are non-negotiable. We cater to manufacturing plants, processing facilities, and energy infrastructure.",
    expertise: "Our extensive experience in the industrial sector means we understand the unique challenges and stringent requirements. We provide custom fabrication, heavy structural steel, and complex assemblies designed to withstand harsh environments and heavy loads. Our project management ensures timely delivery and installation, minimizing downtime for your operations.",
    certifications: [
      "CWB Certified (CSA W47.1 & W59)",
      "AISC Certified (Steel Building Structures, Complex Coatings)",
      "ISO 9001 Compliant Processes",
      "Strict Adherence to Safety Standards (OH&S)"
    ],
    servicesIncluded: [
      "Manufacturing Plants",
      "Processing Facilities",
      "Energy Infrastructure (Oil & Gas, Renewables)",
      "Warehousing & Distribution Centers",
      "Material Handling Systems",
      "Pipe Racks & Supports",
      "Skids & Modules",
      "Heavy Equipment Foundations"
    ],
    mainImageSrc: "/industry.jpeg", // From homepage ServiceCard
    mainImageAlt: "Industrial Steel Projects",
    projectGallery: [ // Using existing images as placeholders - replace with actual industrial project images
      { src: "/warehouse.jpeg", alt: "Industrial Project 1" },
      { src: "/warehouse2.webp", alt: "Industrial Project 2" },
      { src: "/bridge.jpg", alt: "Industrial Project 3 (placeholder)" },
      { src: "/heroContainer.jpeg", alt: "Industrial Project 4 (placeholder)" }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8 group transition-colors duration-150"
        >
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">{pageData.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{pageData.mainDescription}</p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Expertise</h2>
              <p className="text-gray-600 leading-relaxed">{pageData.expertise}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Certifications & Standards</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {pageData.certifications.map(cert => <li key={cert}>{cert}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services Include</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
                {pageData.servicesIncluded.map(service => (
                  <p key={service} className="before:content-['•'] before:mr-2">{service}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Main Image */}
          <div className="lg:col-span-3">
            <div className="relative w-full rounded-lg shadow-xl overflow-hidden aspect-video">
              <Image src={pageData.mainImageSrc} alt={pageData.mainImageAlt} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <section className="mt-16 lg:mt-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center lg:text-left">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.projectGallery.map((project, index) => (
              <div key={index} className="relative h-64 rounded-lg shadow-md overflow-hidden group">
                <Image src={project.src} alt={project.alt} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndustrialPage;