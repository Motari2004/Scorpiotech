"use client";

import { FaPhoneAlt, FaTelegramPlane, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function ContactPage() {
  const phoneNumber = "+254 716 594620";

  return (
    /* pt-4 for mobile to eliminate the big top gap */
    <section className="pt-4 md:pt-16 px-4 md:px-6 max-w-5xl mx-auto space-y-10 pb-20">
      
      <div className="space-y-3">
        <h2 className="text-4xl md:text-6xl font-black text-white text-center tracking-tighter">
          Let&apos;s <span className="text-yellow-500">Connect</span>
        </h2>
        <p className="text-gray-200 text-center text-sm md:text-lg max-w-xl mx-auto font-medium">
          Ready to automate your workflow or build a custom platform? Reach out directly.
        </p>
      </div>

      {/* Grid: 1 column on mobile, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* Phone Card */}
        <div className="group bg-[#e0d7c6]/95 backdrop-blur-md border border-[#cbbfa8] p-6 rounded-[2rem] shadow-xl flex flex-col items-center text-center transition-all hover:-translate-y-1">
          <div className="w-14 h-14 bg-[#77581f]/10 rounded-2xl flex items-center justify-center mb-4">
            <FaPhoneAlt className="text-[#77581f] text-2xl" />
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-1">Call Us</h3>
          <p className="text-gray-700 font-bold mb-6">{phoneNumber}</p>
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
            className="mt-auto w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all"
          >
            Call Now <FaArrowRight className="text-xs" />
          </a>
        </div>

        {/* Telegram Card */}
        <div className="group bg-[#e0d7c6]/95 backdrop-blur-md border border-[#cbbfa8] p-6 rounded-[2rem] shadow-xl flex flex-col items-center text-center transition-all hover:-translate-y-1">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
            <FaTelegramPlane className="text-blue-500 text-2xl" />
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-1">Telegram</h3>
          <p className="text-gray-700 font-bold mb-6">@scorpiotech</p>
          <a
            href="https://t.me/scorpiotech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full py-4 bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
          >
            Open Chat <FaArrowRight className="text-xs" />
          </a>
        </div>

        {/* Email Card */}
        <div className="group bg-[#e0d7c6]/95 backdrop-blur-md border border-[#cbbfa8] p-6 rounded-[2rem] shadow-xl flex flex-col items-center text-center transition-all hover:-translate-y-1">
          <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
            <FaEnvelope className="text-red-500 text-2xl" />
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-1">Email</h3>
          <p className="text-gray-700 font-bold mb-6">Inquiry & Support</p>
          <a
            href="mailto:hopefreymosingi1@gmail.com"
            className="mt-auto w-full py-4 bg-red-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
          >
            Write Message <FaArrowRight className="text-xs" />
          </a>
        </div>

      </div>

      {/* Professional Commitment Statement */}
<div className="pt-10 flex flex-col items-center space-y-4">
  {/* A subtle divider to separate the buttons from the disclaimer */}
  <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
  
  <div className="max-w-md text-center space-y-2">
    <p className="text-[11px] md:text-xs text-gray-300 font-bold uppercase tracking-[0.15em]">
      Professional Commitment
    </p>
    <p className="text-xs md:text-sm text-gray-400 leading-relaxed italic px-6">
      "Our team reviews every inquiry with technical precision. To ensure we provide you with the most accurate project roadmap, we perform a preliminary analysis of your requirements before our initial response. <span className="text-yellow-500/80">We appreciate your patience as we give your project the attention it deserves.</span>"
    </p>
  </div>
</div>
      
    </section>
  );
}