export default function AboutPage() {
  return (
    /* Reduced pt-24 to pt-4 for mobile and pt-32 to pt-8 for desktop */
    <section className="pt-4 md:pt-8 px-4 md:px-6 max-w-6xl mx-auto space-y-10 pb-20">

      {/* Page Title - Now starts much higher up */}
      <h2 className="text-4xl md:text-6xl font-bold text-white text-center tracking-tight">
        About <span className="text-yellow-500">Scorpio Digital</span>
      </h2>

      {/* Introduction */}
      <p className="text-gray-100 text-base md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
        Scorpio Digital is a forward-thinking tech agency helping businesses thrive online. 
        We specialize in building robust backend systems and modern, responsive frontend solutions 
        that scale, perform, and impress users.
      </p>

      {/* Core Strengths - 2x2 Grid stays consistent with Home Page */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-8">

        <div className="bg-[#e0d7c6]/95 backdrop-blur-sm border border-[#cbbfa8] p-4 md:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col">
          <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
            High-Performance
          </h3>
          <p className="text-xs md:text-base text-gray-800 leading-snug md:leading-relaxed">
            Fast, responsive, and optimized for SEO. Designed to convert visitors into customers.
          </p>
        </div>

        <div className="bg-[#e0d7c6]/95 backdrop-blur-sm border border-[#cbbfa8] p-4 md:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col">
          <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
            Full-Stack Logic
          </h3>
          <p className="text-xs md:text-base text-gray-800 leading-snug md:leading-relaxed">
            Backend and frontend systems working seamlessly for reliability and scale.
          </p>
        </div>

        <div className="bg-[#e0d7c6]/95 backdrop-blur-sm border border-[#cbbfa8] p-4 md:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col">
          <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
            Custom Automation
          </h3>
          <p className="text-xs md:text-base text-gray-800 leading-snug md:leading-relaxed">
            Tools tailored to your business needs, saving time and reducing human errors.
          </p>
        </div>

        <div className="bg-[#e0d7c6]/95 backdrop-blur-sm border border-[#cbbfa8] p-4 md:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col">
          <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
            Modern UX/UI
          </h3>
          <p className="text-xs md:text-base text-gray-800 leading-snug md:leading-relaxed">
            Intuitive, visually appealing designs that engage users and improve brand authority.
          </p>
        </div>

      </div>

    </section>
  );
}