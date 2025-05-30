// Removed "use client" and related state management for form
// import { useState } from 'react';
// import { submitContactForm } from '@/app/actions';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import InfoCard from '@/components/InfoCard';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const servicesData = [
  {
    title: "Commercial & Institutional",
    descriptionPoints: [
      "Certified by CWB and AISC, delivering structural steel solutions for academic institutions, office towers, shopping centres, and tilt-up construction across Canada and the US.",
      "Office Towers",
      "Shopping Centres",
      "Tilt-Up Construction"
    ],
    imageSrc: "/uni.jpg",
    imageAlt: "Commercial and Institutional Steel Projects",
    linkHref: "/services/commercial"
  },
  {
    title: "Industrial",
    descriptionPoints: [
      "High-performance steel solutions for critical industrial operations where strength, precision, and reliability are non-negotiable.",
      "Manufacturing Plants",
      "Processing Facilities",
      "Energy Infrastructure"
    ],
    imageSrc: "/industry.jpeg",
    imageAlt: "Industrial Steel Projects",
    linkHref: "/services/industrial"
  },
  {
    title: "Residential",
    descriptionPoints: [
      "Over 15 years of delivering precision-crafted residential steel solutions for custom homes, additions, and design-build projects.",
      "Custom Homes",
      "Design-Build Projects",
      "Architectural Detailing"
    ],
    imageSrc: "/bighome.jpg",
    imageAlt: "Residential Steel Projects",
    linkHref: "/services/residential"
  }
];

const aboutInfoCardsData = [
  {
    title: "15+ Years Experience",
    description: "Since 2010, delivering excellence in metal fabrication across BC and beyond."
  },
  {
    title: "Certified Professionals",
    description: "CWB and AISC certified team trained in welding, crane operation, and fall protection."
  },
  {
    title: "Sustainability Focused",
    description: "Partnering with recycling leaders to reduce waste and environmental impact."
  },
  {
    title: "Full-Service Solutions",
    description: "From concept and engineering to fabrication and on-site installation."
  }
];

const featuredProjectsData = [
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
  }
];


export default function Home() {
  // Form state and handler removed

  return (
    <main className="bg-white">
      <Hero />
      <section id="services" className="py-16 lg:py-24 bg-gray-50 scroll-mt-20"> {/* Added ID and scroll margin */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-5">
            Tailor-Made Steel Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto leading-relaxed">
            Your Vision. Our Expertise. From concept to completion, we deliver precision-engineered structures across commercial, industrial, and residential sectors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                descriptionPoints={service.descriptionPoints}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                linkHref={service.linkHref}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 lg:py-24 bg-white scroll-mt-20"> {/* Added ID and scroll margin */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              About Fabwell Industries
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fabwell is a full-service metal fabrication company based in British Columbia, Canada. Since 2010, we&apos;ve been delivering high-quality, custom steel solutions across commercial, industrial, and residential sectors. With over 15 years of hands-on experience, we bring technical expertise, project efficiency, and a deep commitment to client satisfaction.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Our services span the full project lifecycle—from concept and engineering to fabrication and on-site installation. We specialize in both structural and miscellaneous steel, with a team of certified professionals trained in welding, crane operation, fall protection, and other essential disciplines.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Every project is executed with a focus on safety, precision, and accountability. What sets us apart is our commitment to sustainability—we actively partner with leaders in recycling and metal recovery to reduce waste and environmental impact.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Fabwell, we don’t just build with steel—we build trust.
              </p>
              <Link href="/about/team" passHref>
                <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Meet Our Team
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-200 rounded-lg shadow-xl w-full h-80 lg:h-96 flex items-center justify-center">
                <Image src="/smile.jpg" alt="Fabwell Team" width={500} height={400} className="rounded-lg object-cover w-full h-full" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aboutInfoCardsData.map((card) => (
              <InfoCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 lg:py-24 bg-gray-50 scroll-mt-20"> {/* Added ID and scroll margin */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From large-scale infrastructure to custom specialty work, explore our portfolio of precision-engineered steel solutions across various sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12 md:mb-16">
            {featuredProjectsData.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                description={project.description}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                linkHref={project.linkHref}
              />
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects" passHref>
              <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 lg:py-24 bg-white scroll-mt-20"> {/* Added ID and scroll margin */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to start your next steel project? Whether you have blueprints or just an idea, let Fabwell bring your vision to life. Contact us today for a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Send Us a Message</h3>
              <p className="text-gray-600 mb-6 text-sm">Tell us about your project and we&apos;ll get back to you as soon as possible.</p>
              <form className="space-y-6"> {/* Removed onSubmit handler */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="John" className="mt-1" /> {/* Removed value and onChange */}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="Doe" className="mt-1" /> {/* Removed value and onChange */}
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="john.doe@example.com" className="mt-1" /> {/* Removed value and onChange */}
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company (Optional)</Label>
                  <Input type="text" name="company" id="company" placeholder="Your Company Name" className="mt-1" /> {/* Removed value and onChange */}
                </div>
                <div>
                  <Label htmlFor="projectType" className="text-sm font-medium text-gray-700">Project Type</Label>
                  <Input type="text" name="projectType" id="projectType" placeholder="e.g., Commercial Building, Residential Addition" className="mt-1" /> {/* Removed value and onChange */}
                </div>
                <div>
                  <Label htmlFor="projectDetails" className="text-sm font-medium text-gray-700">Project Details</Label>
                  <Textarea name="projectDetails" id="projectDetails" rows={4} placeholder="Tell us about your project requirements, timeline, and any specific needs..." className="mt-1" /> {/* Removed value and onChange */}
                </div>
                <div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base"> {/* Removed disabled state and dynamic text */}
                    Send Message
                  </Button>
                </div>
                {/* Form message display removed */}
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Main Office</h3>
                <address className="not-italic text-gray-700 space-y-2">
                  <p className="flex items-start"><MapPin size={20} className="mr-3 mt-1 text-green-600 flex-shrink-0" /> <span>8760 River Road, Delta, BC V4G 1B5</span></p>
                  <p className="flex items-center"><Phone size={20} className="mr-3 text-green-600 flex-shrink-0" /> <a href="tel:604-588-9353" className="hover:text-green-600">604-588-9353</a></p>
                  <p className="flex items-center"><Mail size={20} className="mr-3 text-green-600 flex-shrink-0" /> <a href="mailto:info@fabwell.ca" className="hover:text-green-600">info@fabwell.ca</a></p>
                </address>
              </div>
              <div className="rounded-lg shadow-xl w-full h-72 lg:h-80 overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=8760%20River%20Road%20Delta%2C%20BC%20V4G%201B5&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border:0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fabwell Industries Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started CTA Section */}
      <section className="bg-green-700 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re developing infrastructure, expanding a facility, or designing a custom home, our team works closely with you to deliver on time, on budget, and to spec—every time.
          </p>
          <a href="mailto:info@fabwell.ca?subject=Project%20Inquiry">
            <Button variant="outline" size="lg" className="bg-white text-green-700 hover:bg-gray-100 border-white hover:border-gray-100 font-semibold px-10 py-3 text-base">
              Contact Us Today
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
