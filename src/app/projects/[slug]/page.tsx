import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; // Import ArrowLeft

// This data would ideally come from a CMS or database
// We'll use a simplified version of the featuredProjectsData for now
const allProjectsData = [
  {
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    category: "Infrastructure",
    description: "Pedestrian bridges connecting communities and critical transportation hub components including airport structures. Our expertise in complex structural steel ensures durability and precision for vital public and private infrastructure. We manage projects from initial design consultation through to final installation, adhering to the strictest safety and quality standards.",
    imageSrc: "/bridge.jpg",
    imageAlt: "Infrastructure Development Project",
    gallery: [
      { src: "/bridge.jpg", alt: "Bridge structure" },
      { src: "/warehouse2.webp", alt: "Airport component" }, // Placeholder
      { src: "/school.jpg", alt: "Construction detail" } // Placeholder
    ],
    timeline: "6 months (Concept to Completion)",
    details: [
      "Fabrication of 200 tons of structural steel.",
      "Custom-designed pedestrian walkway sections.",
      "Coordination with multiple engineering firms.",
      "On-site assembly and crane lifting operations.",
      "Certified welding and NDT testing throughout."
    ]
  },
  {
    slug: "industrial-complex",
    title: "Industrial Complex",
    category: "Industrial",
    description: "Complete fabrication and installation for oil and gas process buildings and manufacturing facilities. We provide robust steel solutions capable of withstanding demanding industrial environments, ensuring operational continuity and safety. Our team is experienced in large-scale industrial projects with complex logistical and engineering challenges.",
    imageSrc: "/warehouse.jpeg",
    imageAlt: "Industrial Complex Project",
    gallery: [
      { src: "/warehouse.jpeg", alt: "Industrial building exterior" },
      { src: "/industry.jpeg", alt: "Internal steel structure" }, // Placeholder
      { src: "/uni.jpg", alt: "Fabrication process" } // Placeholder
    ],
    timeline: "10 months",
    details: [
      "Erection of multiple steel-frame buildings.",
      "Installation of heavy-duty equipment supports.",
      "Specialized coatings for corrosion resistance.",
      "Adherence to stringent industry-specific regulations.",
      "Project management for phased construction."
    ]
  },
  {
    slug: "commercial-building",
    title: "Commercial Building",
    category: "Commercial",
    description: "Structural frameworks for tilt-up buildings, schools, and offices supporting business foundations. Our commercial projects range from retail spaces to multi-story office blocks, focusing on efficient design and rapid construction to meet business timelines. We collaborate closely with architects and developers to achieve aesthetic and functional goals.",
    imageSrc: "/school.jpg",
    imageAlt: "Commercial Building Project",
    gallery: [
      { src: "/school.jpg", alt: "School building facade" },
      { src: "/uni.jpg", alt: "Office interior steelwork" }, // Placeholder
      { src: "/bighome.jpg", alt: "Tilt-up panel construction" } // Placeholder
    ],
    timeline: "8 months",
    details: [
      "Steel supply for tilt-up concrete panel supports.",
      "Fabrication of architectural steel elements.",
      "Coordination with MEP (Mechanical, Electrical, Plumbing) trades.",
      "Value engineering to optimize material use and cost.",
      "LEED certification support through sustainable material choices."
    ]
  },
  {
    slug: "custom-residential",
    title: "Custom Residential",
    category: "Residential",
    description: "High-end custom home structural steel with unique framing and architectural detailing. We work with homeowners and architects to bring ambitious residential designs to life, providing the structural integrity for expansive spaces, custom staircases, and unique architectural features. Our precision fabrication ensures seamless integration with other construction elements.",
    imageSrc: "/home.webp",
    imageAlt: "Custom Residential Project",
    gallery: [
      { src: "/home.webp", alt: "Custom home exterior" },
      { src: "/bighome.jpg", alt: "Interior steel staircase" }, // Placeholder
      { src: "/bridge.jpg", alt: "Architectural steel detail" } // Placeholder
    ],
    timeline: "5 months",
    details: [
      "Intricate steel framing for complex rooflines.",
      "Custom-fabricated steel beams and columns.",
      "Support for large glass installations.",
      "Collaboration with interior designers for exposed steel elements.",
      "High-quality finishes for visible steel components."
    ]
  },
  {
    slug: "warehouse-facility",
    title: "Warehouse Facility",
    category: "Industrial",
    description: "Large-scale warehouse and distribution center with precision-engineered steel framework. Our experience in warehouse construction ensures optimal space utilization, structural efficiency, and rapid deployment for logistics and storage operations. We can accommodate specialized requirements such as mezzanine floors and heavy-duty racking systems.",
    imageSrc: "/warehouse2.webp",
    imageAlt: "Warehouse Facility Project",
    gallery: [
      { src: "/warehouse2.webp", alt: "Warehouse exterior" },
      { src: "/warehouse.jpeg", alt: "Interior racking system" }, // Placeholder
      { src: "/industry.jpeg", alt: "Loading dock steelwork" } // Placeholder
    ],
    timeline: "9 months",
    details: [
      "Fabrication of long-span steel trusses.",
      "Design for heavy load capacities.",
      "Integration of automated systems supports.",
      "Efficient on-site erection sequence.",
      "Compliance with all relevant building codes for industrial storage."
    ]
  },
  {
    slug: "academic-institution",
    title: "Academic Institution",
    category: "Commercial",
    description: "Educational facility structural steel supporting modern learning environments. We provide durable and adaptable steel structures for schools, colleges, and universities, creating spaces that inspire learning and collaboration. Our projects often involve phased construction to minimize disruption to academic activities.",
    imageSrc: "/uni.jpg",
    imageAlt: "Academic Institution Project",
    gallery: [
      { src: "/uni.jpg", alt: "University building exterior" },
      { src: "/school.jpg", alt: "Library steel structure" }, // Placeholder
      { src: "/bridge.jpg", alt: "Classroom wing construction" } // Placeholder
    ],
    timeline: "12 months (phased)",
    details: [
      "Steel framework for classrooms, laboratories, and auditoriums.",
      "Support for specialized architectural features.",
      "Acoustic considerations in steel design.",
      "Collaboration with educational facility planners.",
      "Emphasis on safety and accessibility."
    ]
  }
];

export async function generateStaticParams() {
  return allProjectsData.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const ProjectDetailsPage: React.FC<Props> = ({ params }) => {
  const project = allProjectsData.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <main className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the project you were looking for.
          </p>
          <Link href="/projects" passHref>
            <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Back to All Projects
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Added a container and padding for the back button */}
        <Link
          href="/"
          className="inline-flex items-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 group transition-colors duration-150"
        >
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>
      {/* Hero Section with Project Title and Main Image */}
      <section className="relative h-[400px] lg:h-[500px] bg-gray-800">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl sm:text-2xl font-light">{project.category}</p>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column: Description, Details, Timeline */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Key Details</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-lg">
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Project Timeline</h3>
                <p className="text-gray-700 text-lg">{project.timeline}</p>
              </div>
            </div>

            {/* Right Column: Placeholder for Contact/Quote or related info */}
            <aside className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Snapshot</h3>
                <dl className="space-y-2 text-sm text-gray-700">
                  <div>
                    <dt className="font-medium text-gray-900">Category:</dt>
                    <dd>{project.category}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Timeline:</dt>
                    <dd>{project.timeline}</dd>
                  </div>
                  {/* You can add more fields to allProjectsData and display them here */}
                  {/* Example: project.location, project.steelTonnage etc. */}
                  {/* {project.details && project.details.length > 0 && (
                    <div>
                      <dt className="font-medium text-gray-900">Key Feature:</dt>
                      <dd>{project.details[0]}</dd>
                    </div>
                  )} */}
                </dl>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ready to Discuss Your Project?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Fabwell Industries offers expert consultation and precision fabrication for projects of all scales.
                </p>
                <a href={`mailto:info@fabwell.ca?subject=Consultation`}>
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Request a Consultation
                  </Button>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 lg:mb-12 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                  <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation back to all projects */}
      <section className="py-12 lg:py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" passHref>
            <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailsPage;