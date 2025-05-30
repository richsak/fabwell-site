import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; // Import ArrowLeft

// Re-using the featured projects data for now.
// In a real application, this would likely come from a CMS or database.
const allProjectsData = [
  {
    title: "Infrastructure Development",
    category: "Infrastructure",
    description: "Pedestrian bridges connecting communities and critical transportation hub components including airport structures.",
    imageSrc: "/bridge.jpg",
    imageAlt: "Infrastructure Development Project",
    linkHref: "/projects/infrastructure-development"
  },
  {
    title: "Industrial Complex",
    category: "Industrial",
    description: "Complete fabrication and installation for oil and gas process buildings and manufacturing facilities.",
    imageSrc: "/warehouse.jpeg",
    imageAlt: "Industrial Complex Project",
    linkHref: "/projects/industrial-complex"
  },
  {
    title: "Commercial Building",
    category: "Commercial",
    description: "Structural frameworks for tilt-up buildings, schools, and offices supporting business foundations.",
    imageSrc: "/school.jpg",
    imageAlt: "Commercial Building Project",
    linkHref: "/projects/commercial-building"
  },
  {
    title: "Custom Residential",
    category: "Residential",
    description: "High-end custom home structural steel with unique framing and architectural detailing.",
    imageSrc: "/home.webp",
    imageAlt: "Custom Residential Project",
    linkHref: "/projects/custom-residential"
  },
  {
    title: "Warehouse Facility",
    category: "Industrial",
    description: "Large-scale warehouse and distribution center with precision-engineered steel framework.",
    imageSrc: "/warehouse2.webp",
    imageAlt: "Warehouse Facility Project",
    linkHref: "/projects/warehouse-facility"
  },
  {
    title: "Academic Institution",
    category: "Commercial",
    description: "Educational facility structural steel supporting modern learning environments.",
    imageSrc: "/uni.jpg",
    imageAlt: "Academic Institution Project",
    linkHref: "/projects/academic-institution"
  },
  // Add more projects here as needed
  // {
  //   title: "Another Project",
  //   category: "Category",
  //   description: "Description of another project.",
  //   imageSrc: "/path/to/image.jpg",
  //   imageAlt: "Alt text for another project",
  //   linkHref: "/projects/another-project"
  // },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8 group transition-colors duration-150"
          >
            <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Our Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio of successfully completed steel fabrication projects. Each project showcases our commitment to quality, precision, and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12 md:mb-16">
            {allProjectsData.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                description={project.description}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                linkHref={project.linkHref} // This will link to individual project pages
              />
            ))}
          </div>
          {/* Optional: Add pagination or a "Load More" button if there are many projects */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Let Fabwell Industries be your trusted partner for your next steel fabrication challenge. Contact us today to discuss your requirements.
          </p>
          <Link href="/contact" passHref>
            <Button variant="outline" size="lg" className="bg-white text-green-700 hover:bg-gray-100 border-white hover:border-gray-100 font-semibold px-10 py-3 text-base">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}