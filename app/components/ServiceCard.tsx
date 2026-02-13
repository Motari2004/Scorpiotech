type Props = {
  title: string;
  description: string;
  icon?: React.ReactNode; // Added an optional icon prop
};

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="group bg-[#e0d7c6]/95 backdrop-blur-sm border border-[#cbbfa8] p-6 rounded-2xl 
                    shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] 
                    hover:-translate-y-2 transition-all duration-500
                    flex flex-col h-full">
      
      {/* Icon Area (Optional) */}
      {icon && (
        <div className="mb-4 text-yellow-700 text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}

      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 tracking-tight">
        {title}
      </h3>
      
      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      {/* Subtle "Learn More" or accent line for mobile users to tap */}
      <div className="mt-auto pt-6">
        <div className="w-10 h-1 bg-yellow-600 rounded-full group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
}