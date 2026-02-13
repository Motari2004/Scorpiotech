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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        
        {/* Scorpio AI - THEME: PURPLE/AI */}
        <div className="group bg-slate-900/40 backdrop-blur-md border border-purple-500/20 p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between hover:border-purple-500/50 transition-all duration-500">
          <div>
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Scorpio AI</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Advanced neural automation. Handling complex logic and user queries with surgical precision.
            </p>
          </div>
          <a 
            href="https://scorpioai.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center py-4 bg-purple-600 text-white rounded-2xl font-bold text-sm hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
          >
            Launch Scorpio
          </a>
        </div>

        {/* Deep Translate - THEME: BLUE/GLOBAL */}
        <div className="group bg-slate-900/40 backdrop-blur-md border border-blue-500/20 p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between hover:border-blue-500/50 transition-all duration-500">
          <div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Deep Translate</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Breaking barriers. Featuring Arabic transliteration and real-time linguistic processing.
            </p>
          </div>
          <a 
            href="https://translator-qr08.onrender.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
          >
            Open Translator
          </a>
        </div>

        {/* IG Downloader - THEME: PINK/SOCIAL */}
        <div className="group bg-slate-900/40 backdrop-blur-md border border-pink-500/20 p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between hover:border-pink-500/50 transition-all duration-500">
          <div>
            <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">IG Media</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Professional content extraction. High-fidelity video and image scraping at lightning speeds.
            </p>
          </div>
          <a 
            href="https://igdown-01en.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center py-4 bg-pink-600 text-white rounded-2xl font-bold text-sm hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all"
          >
            Access Downloader
          </a>
        </div>

      {/* WhatsApp Engine - THEME: GREEN/CHAT */}
<div className="group bg-slate-900/40 backdrop-blur-md border border-emerald-500/20 p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-500">
  <div>
    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="text-2xl">⚡</span> 
    </div>
    <h3 className="text-2xl font-bold mb-3 text-white">Scorpio Control</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-8">
      A powerful engine to view and auto-react to statuses. Track view counts and manage your bot in real-time with an easy QR-scan dashboard.
    </p>
  </div>
  
  <div className="space-y-3">
    {/* Feature Tags for quick info */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">QR Auth</span>
      <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">Auto-React</span>
      <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">Live Logs</span>
    </div>

    <a 
      href="https://scorpiocontrol-5fem.onrender.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full text-center py-4 bg-emerald-600 text-white rounded-2xl font-bold text-sm hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
    >
      Launch Dashboard
    </a>
  </div>
</div>

      </div>
    </section>
  );
}