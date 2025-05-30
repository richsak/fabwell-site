"use client";

import Link from 'next/link';
import { ArrowLeft, UserCircle2, Linkedin } from 'lucide-react'; // UserCircle2 as placeholder

interface TeamMember {
  name: string;
  position: string;
  imageSrc?: string; // Optional: for actual images later
  linkedIn?: string;
  bio?: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

const teamData: TeamSection[] = [
  {
    title: "Leadership & Management", // User prefers this title
    members: [
      { name: "Firooz Qasimi", position: "Founder & President", linkedIn: "https://www.linkedin.com/in/firooz-qasimi-85685755/?originalSubdomain=ca", bio: "Leading Fabwell with expertise in steel fabrication and business development." },
      { name: "Zain Sahib", position: "Residential Project Manager", bio: "Managing residential projects with focus on quality and client satisfaction." },
      { name: "Steve Wingate", position: "Production Manager", linkedIn: "https://www.linkedin.com/in/steve-wingate-a682639a/?originalSubdomain=ca", bio: "Overseeing production operations and ensuring efficient project delivery." },
      { name: "Leslie Buck", position: "Safety Coordinator", bio: "Ensuring all projects meet the highest safety standards and compliance." },
      { name: "Peter Millick", position: "Shop Foreman", bio: "Leading shop operations and supervising fabrication processes." },
      { name: "Tracy Saddul", position: "Purchaser", bio: "Managing procurement and supply chain operations." },
    ]
  },
  {
    title: "Detailing Team",
    members: [
      { name: "Peter Zhang", position: "Detail Manager", bio: "Leading the detailing team and ensuring precision in all technical drawings." },
      { name: "Dani Ha", position: "Residential Detailer", bio: "Specializing in residential project detailing and technical documentation." },
      // Add more detailers here when names are available
    ]
  }
];

const TeamPage = () => {
  return (
    <div className="bg-white min-h-screen"> {/* Changed background to white to match image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <Link
          href="/"
          className="inline-flex items-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8 lg:mb-12 group transition-colors duration-150"
        >
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="text-center mb-10"> {/* Adjusted margin */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3"> {/* Adjusted text color and margin */}
            Meet Our Team
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"> {/* Adjusted text size and max-width */}
            Our experienced team of certified professionals brings decades of expertise to every project. Get to know the people behind Fabwell’s commitment to precision and excellence.
          </p>
        </div>

        {teamData.map((section) => (
          <section key={section.title} className="mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center"> {/* Adjusted text color and alignment */}
              {section.title}
            </h2>
            {/* Adjust grid columns based on section. For "Leadership & Management", it's 3 columns. For "Detailing Team", it's effectively 2 shown, but can be 3 for future additions. */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${section.title === "Detailing Team" ? 'lg:grid-cols-2 xl:grid-cols-3' : 'lg:grid-cols-3'} gap-6 sm:gap-8`}>
              {section.members.map((member) => (
                <div key={member.name} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center flex flex-col items-center transition-shadow hover:shadow-md">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4"> {/* Placeholder icon background */}
                    <UserCircle2 size={60} className="text-gray-500" /> {/* Adjusted icon size and color */}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-green-600 font-semibold text-sm mb-2">{member.position}</p> {/* Position color and font weight */}
                  {member.bio && <p className="text-gray-500 text-xs leading-relaxed mb-3 h-16 overflow-hidden">{member.bio}</p>} {/* Bio styling and fixed height */}
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center mt-auto pt-2" // LinkedIn styling
                    >
                      <Linkedin size={16} className="mr-1" /> LinkedIn
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;