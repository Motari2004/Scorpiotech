export default function AboutPage() {
  return (
    <section className="pt-32 px-6 max-w-4xl mx-auto space-y-12">

      {/* Page Title */}
      <h2 className="text-5xl font-bold text-gray-900 text-center">
        About Scorpio Digital
      </h2>

      {/* Introduction */}
<p className="text-yellow-500 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
  Scorpio Digital is a forward-thinking tech agency helping businesses thrive online. 
  We specialize in building robust backend systems and modern, responsive frontend solutions 
  that scale, perform, and impress users.
</p>


      {/* Core Strengths / Value Proposition */}
      <div className="space-y-8">

        <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">High-Performance Websites</h3>
          <p className="text-gray-800">
            Fast, responsive, and optimized for SEO. Our websites are designed to engage visitors and convert them into customers.
          </p>
        </div>

        <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Backend & Frontend Solutions</h3>
          <p className="text-gray-800">
            We build both backend systems and frontend interfaces that work seamlessly together. 
            Your platform will be fast, reliable, and scalable.
          </p>
        </div>

        <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Custom Automation & Utilities</h3>
          <p className="text-gray-800">
            Automate repetitive tasks and streamline operations with tools tailored to your business needs, 
            saving time and reducing errors.
          </p>
        </div>

        <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Modern Design & UX</h3>
          <p className="text-gray-800">
            Intuitive, visually appealing designs that engage users and improve conversion rates. 
            Every solution we build looks great and works flawlessly.
          </p>
        </div>

      </div>

    </section>
  );
}
