import { Mouse } from 'lucide-react'; // For scroll indicator

const Hero = () => {
  // Navbar height is now h-24 (96px) from Navbar.tsx
  const navbarHeight = "96px";

  return (
    <div
      className="relative text-white flex items-center justify-center overflow-hidden" // Added overflow-hidden
      style={{ height: `calc(100vh - ${navbarHeight})` }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS
        className="absolute z-0 w-full h-full object-cover"
        // poster="/heroContainer.jpeg" // Removed poster to prevent flash of old image
      >
        <source src="/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Fallback Image - can be removed if poster is sufficient, or kept for browsers that don't support video/source */}
      {/* <Image
        src="/heroContainer.jpeg"
        alt="Fabwell Steel Solutions"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0" // Will be under the video if video loads
      /> */}
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Increased opacity slightly */}

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center h-full pt-10 pb-20"> {/* Added padding top/bottom */}
        {/* Text Content */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Precision. Reliability. <br />
            Steel Solutions That Deliver.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0">
            Full-service metal fabrication in British Columbia. Over 15 years of delivering high-quality, custom steel solutions across commercial, industrial, and residential sectors.
          </p>
        </div>

        {/* Stats bubble removed as per request */}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <Mouse size={36} className="text-white animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;