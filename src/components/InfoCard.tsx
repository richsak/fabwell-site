"use client"; // May not be strictly necessary now, but good practice if interactivity is added later

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-full flex flex-col">
      {icon && <div className="text-green-600 mb-3">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;