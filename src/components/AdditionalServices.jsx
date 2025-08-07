import {
  TrendingUp,
  BarChart3,
  Rocket,
  LockIcon
} from 'lucide-react';

export default function AdditionalServices() {
  const services = [
    {
      id: 1,
      title: "Market Analysis",
      description: "Strategic advice to help you achieve financial goals.",
      Icon: BarChart3,
    },
    {
      id: 2,
      title: "Security Audit",
      description: "Tailored investment solutions for long-term growth.",
      Icon: LockIcon,
    },
    {
      id: 3,
      title: "Fast Launch",
      description: "Minimize tax liabilities through expert guidance.",
      Icon: Rocket,
    },
  ];

  return (
    <div id="services" className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
        Our Additional Services
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-20">
        {services.map(({ id, title, description, Icon }) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/3 transition-transform hover:scale-105"
          >
            <div className="flex justify-center mb-4 text-purple-600">
              <Icon size={48} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold text-purple-600">{title}</h3>
            <p className="text-gray-700 mt-2 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
