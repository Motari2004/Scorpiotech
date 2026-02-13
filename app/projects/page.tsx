export default function ProjectsPage() {
  return (
    <section className="pt-32 px-6 max-w-6xl mx-auto space-y-12">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Our Projects</h2>
      <p className="text-center text-brown-100">
        Explore some of the digital solutions we’ve built to help businesses and individuals.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* AI Chatbot */}
        <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">Scorpio AI Chatbot</h3>
          <p className="text-gray-800 mb-4">
            An intelligent AI chatbot that helps users with queries and automation tasks.
          </p>
          <a 
            href="https://scorpioai.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-700 font-medium hover:underline"
          >
            Visit Project
          </a>
        </div>

        {/* Instagram Video Downloader */}
        <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">Instagram Video Downloader</h3>
          <p className="text-gray-800 mb-4">
            Easily download videos from Instagram for personal use or content management.
          </p>
          <a 
            href="https://igdown-01en.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-700 font-medium hover:underline"
          >
            Visit Project
          </a>
        </div>

        {/* WhatsApp Viewing Bot */}
        <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">WhatsApp Viewing Bot</h3>
          <p className="text-gray-800 mb-4">
            A bot that helps automate viewing and tracking WhatsApp messages efficiently.
          </p>
          <a 
            href="https://scorpiocontrol-5fem.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-700 font-medium hover:underline"
          >
            Visit Project
          </a>
        </div>
      </div>
    </section>
  );
}
