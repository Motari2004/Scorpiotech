export default function ProjectsPage() {
  return (
    <section className="pt-4 md:pt-12 px-4 md:px-6 max-w-7xl mx-auto space-y-10 pb-20">
      
      <div className="space-y-3">
        <h2 className="text-4xl md:text-7xl font-extrabold text-white text-center tracking-tighter">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Digital Arsenal</span>
        </h2>
        <p className="text-center text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium">
          Premium tools engineered for speed, automation, and global connectivity.
        </p>
      </div>

      {/* Grid: 2 columns on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6 mt-10">
        
        {/* Scorpio AI */}
        <div className="group bg-slate-900/40 backdrop-blur-md border border-blue-500/20 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col justify-between hover:border-blue-500/50 transition-all duration-500">
          <div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <div className="w-4 h-4 border border-blue-500 rotate-45" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">Scorpio AI</h3>
            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-8">
              A chatbot that can chat and write code. Built to handle logic and solve programming tasks.
            </p>
          </div>
          <a href="#" className="block w-full text-center py-3 md:py-4 bg-blue-600 text-white rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm hover:bg-blue-500 transition-all">
            Open Chat
          </a>
        </div>

        {/* Deep Translate */}
        <div className="group bg-slate-900/40 backdrop-blur-md border border-blue-500/20 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col justify-between hover:border-blue-500/50 transition-all duration-500">
          <div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <div className="w-5 h-[1px] bg-blue-400" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">Translate</h3>
            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-8">
              Supports English, Chinese, Arabic, Swahili, and 10+ languages with real-time processing.
            </p>
          </div>
          <a href="https://translator-qr08.onrender.com" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 md:py-4 bg-blue-600 text-white rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm hover:bg-blue-500 transition-all">
            Launch
          </a>
        </div>

        {/* IG Media - Updated Description */}
        <div className="group bg-slate-900/40 backdrop-blur-md border border-pink-500/20 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col justify-between hover:border-pink-500/50 transition-all duration-500">
          <div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <div className="w-4 h-4 border border-pink-500 rounded-sm" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">IG Media</h3>
            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-8">
              Instagram video downloader. Simply paste the link to extract high-quality media instantly.
            </p>
          </div>
          <a href="https://igdown-01en.onrender.com/" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 md:py-4 bg-pink-600 text-white rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm hover:bg-pink-500 transition-all">
            Download
          </a>
        </div>

        {/* Status View */}
        <div className="group bg-slate-900/40 backdrop-blur-md border border-emerald-500/20 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-500">
          <div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <div className="w-1 h-5 bg-emerald-500/40" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">Status View</h3>
            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-8">
              Bot for viewing and auto-reacting to WhatsApp statuses via QR dashboard.
            </p>
          </div>
          <a href="https://scorpiocontrol-5fem.onrender.com/" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 md:py-4 bg-emerald-600 text-white rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm hover:bg-emerald-500 transition-all">
            Dashboard
          </a>
        </div>

      </div>
    </section>
  );
}