type Props = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="group bg-[#e0d7c6]/95 backdrop-blur-sm border border-[#cbbfa8] 
                    p-4 md:p-6 rounded-2xl 
                    shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] 
                    hover:-translate-y-2 transition-all duration-500
                    flex flex-col h-full">
      
      {/* Icon Area - Shrunk for mobile 2-col */}
      {icon && (
        <div className="mb-2 md:mb-4 text-yellow-700 text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}

      {/* Title - text-base for mobile to prevent overflow */}
      <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 tracking-tight leading-tight">
        {title}
      </h3>
      
      {/* Description - text-xs for mobile, leading-snug to save space */}
      <p className="text-gray-700 leading-snug md:leading-relaxed text-xs md:text-base">
        {description}
      </p>

      {/* Interactive Accent Line */}
      <div className="mt-auto pt-4 md:pt-6">
        <div className="w-8 md:w-10 h-1 bg-yellow-600 rounded-full group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
}