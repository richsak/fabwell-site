"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Import ArrowRight icon

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string; // Placeholder, actual images not provided
  imageAlt: string;
  linkHref: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, description, imageSrc, imageAlt, linkHref }) => {
  return (
    <Link href={linkHref} className="group block bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative w-full h-56 md:h-64">
        {/* Using a placeholder color if imageSrc is a color, otherwise use Image component */}
        {imageSrc.startsWith('#') || imageSrc.startsWith('bg-') ? (
          <div className={`w-full h-full ${imageSrc.startsWith('#') ? '' : imageSrc} transition-transform duration-500 group-hover:scale-105`} style={imageSrc.startsWith('#') ? { backgroundColor: imageSrc } : {}}></div>
        ) : (
          <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
        )}
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </div>
        {/* "More Info" button overlay */}
        <div className="absolute bottom-4 right-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
                        flex items-center">
          More Info <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate group-hover:text-green-600">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;