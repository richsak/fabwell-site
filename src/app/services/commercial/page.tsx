"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const CommercialPage = () => {
  const pageData = {
    title: "Commercial & Institutional",
    mainDescription: "Certified by CWB and AISC, we deliver structural steel solutions for academic institutions, office towers, shopping centres, and tilt-up construction across Canada and the US.",
    expertise: "With over 15 years of experience, our team specializes in creating efficient, cost-effective structures that meet the demanding requirements of commercial and institutional projects. We work closely with architects, engineers, and contractors to ensure seamless project delivery.",
    certifications: [
      "CWB Certified",
      "AISC Certified",
      "CSA Standards Compliant"
    ],
    servicesIncluded: [
      "Academic Institutions",
      "Shopping Centres",
      "Multi-story Buildings",
      "Office Towers",
      "Tilt-Up Construction",
      "Retail Complexes"
    ],
    mainImageSrc: "/uni.jpeg", // From homepage ServiceCard
    mainImageAlt: "Commercial & Institutional Steel Projects",
    projectGallery: [ // Using existing images as placeholders
      { src: "/school.jpg", alt: "Commercial Project 1" },
      { src: "/uni.jpg", alt: "Commercial Project 2" },
      { src: "/bighome.jpg", alt: "Commercial Project 3 (placeholder)" }, // Corrected to .jpg
      { src: "/heroContainer.jpeg", alt: "Commercial Project 4 (placeholder)" }
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"> {/* Changed grid to 5 columns */}
          {/* Left Column: Text Content */}
          <div className="lg:col-span-2 space-y-8"> {/* Text takes 2 columns */}
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
          <div className="lg:col-span-3"> {/* Image takes 3 columns */}
            <div className="relative w-full rounded-lg shadow-xl overflow-hidden aspect-video"> {/* Enforces 16:9 aspect ratio */}
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

export default CommercialPage;