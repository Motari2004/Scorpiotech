export default function ProjectsPage() {
  return (
    /* pt-4 for mobile to bring the title right up to the navbar */
    <section className="pt-4 md:pt-12 px-4 md:px-6 max-w-6xl mx-auto space-y-8 pb-20">
      
      <div className="space-y-2">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center tracking-tight">
          Our <span className="text-yellow-500">Projects</span>
        </h2>
        <p className="text-center text-gray-200 text-sm md:text-lg max-w-2xl mx-auto">
          Explore the digital solutions we’ve built to help businesses and individuals thrive.
        </p>
      </div>

      {/* grid-cols-1 on small mobile, grid-cols-2 on small tablets, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6">
        
        {/* AI Chatbot */}
        <div className="bg-[#e0d7c6]/95 backdrop-blur-sm border border-[#cbbfa8] p-6 rounded-3xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300">
          <div>
            <h3 className="text-xl font-black mb-2 text-gray-900">Scorpio AI</h3>
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              An intelligent AI chatbot designed for complex automation tasks and user queries.
            </p>
          </div>
          <a 
            href="https://scorpioai.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 bg-gray-900 text-white rounded-xl font-bold text-xs hover:bg-black transition-colors"
          >
            Visit Live Project
          </a>
        </div>

        {/* Instagram Video Downloader */}
        <div className="bg-[#e0d7c6]/95 backdrop-blur-sm border border-[#cbbfa8] p-6 rounded-3xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300">
          <div>
            <h3 className="text-xl font-black mb-2 text-gray-900">IG Downloader</h3>
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              High-speed utility to download Instagram content for personal and professional management.
            </p>
          </div>
          <a 
            href="https://igdown-01en.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 bg-gray-900 text-white rounded-xl font-bold text-xs hover:bg-black transition-colors"
          >
            Visit Live Project
          </a>
        </div>

        {/* WhatsApp Viewing Bot */}
        <div className="bg-[#e0d7c6]/95 backdrop-blur-sm border border-[#cbbfa8] p-6 rounded-3xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300">
          <div>
            <h3 className="text-xl font-black mb-2 text-gray-900">WhatsApp Bot</h3>
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              Automation bot for tracking and viewing messages efficiently in a controlled environment.
            </p>
          </div>
          <a 
            href="https://scorpiocontrol-5fem.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 bg-gray-900 text-white rounded-xl font-bold text-xs hover:bg-black transition-colors"
          >
            Visit Live Project
          </a>
        </div>

      </div>
    </section>
  );
}