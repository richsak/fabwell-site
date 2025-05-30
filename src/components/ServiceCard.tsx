import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'; // For "More Info" button icon

interface ServiceCardProps {
  title: string;
  descriptionPoints: string[];
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, descriptionPoints, imageSrc, imageAlt, linkHref }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-none border border-transparent hover:border-gray-200 group">
      <div className="relative w-full h-56 md:h-64"> {/* Adjusted height */}
        <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{title}</h3> {/* Adjusted font size and weight */}
        <ul className="text-gray-600 mb-6 space-y-2 text-base flex-grow"> {/* Changed text-sm to text-base */}
          {descriptionPoints.slice(0, 1).map((point, index) => ( // Show only the main description point initially
            <li key={index} className="leading-relaxed">{point}</li>
          ))}
           {descriptionPoints.length > 1 && ( // Show bullet points for sub-items
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              {descriptionPoints.slice(1).map((point, index) => (
                <li key={`sub-${index}`}>{point}</li>
              ))}
            </ul>
          )}
        </ul>
        <Link href={linkHref} passHref>
          <Button
            variant="default"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-base group-hover:bg-green-500 transition-colors duration-300" // Adjusted button style
          >
            More Info
            <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;