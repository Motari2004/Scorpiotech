"use client";

import { useEffect, useState } from "react";
import ServiceCard from "./components/ServiceCard";
import Link from "next/link";

type Testimonial = {
  name: string;
  text: string;
  img: string;
};

const testimonials: Testimonial[] = [
  { 
    name: "Alex J.", 
    text: "Scorpio transformed our outdated site into a high-converting, modern platform. The speed and mobile responsiveness are lightyears ahead.", 
    img: "https://randomuser.me/api/portraits/men/32.jpg" 
  },
  { 
    name: "Priya S.", 
    text: "The automated enrollment system they built handles student data and bookings perfectly—our office has never been more organized.",
    img: "https://randomuser.me/api/portraits/women/44.jpg" 
  },
  { 
    name: "Michael R.", 
    text: "Our custom booking engine handles hundreds of appointments daily without a glitch. It has completely streamlined our client flow.", 
    img: "https://randomuser.me/api/portraits/men/51.jpg" 
  },
  { 
    name: "Sara L.", 
    text: "I needed an interactive dashboard to manage complex data. Scorpio delivered a clean, intuitive interface that simplified everything.",
    img: "https://randomuser.me/api/portraits/women/65.jpg" 
  },
  { 
    name: "David K.", 
    text: "Their ability to bridge the gap between creative design and technical backend logic is truly rare. Highly professional.", 
    img: "https://randomuser.me/api/portraits/men/22.jpg" 
  },
  { 
    name: "Emma W.", 
    text: "They turned a nightmare spreadsheet into a fully autonomous workflow. It feels like I’ve added a full-time assistant.", 
    img: "https://randomuser.me/api/portraits/women/12.jpg" 
  },
];

export default function HomePage() {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3;

  // Auto-advance testimonials every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / pageSize));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonials = testimonials.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);

  return (
    <div className="space-y-24 md:space-y-32 pb-20">

      {/* --- HERO SECTION --- */}
      <section className="pt-4 md:pt-8 px-4 max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white leading-tight">
          We Build Cutting-Edge <span className="text-yellow-500">Digital Solutions</span>
        </h1>
        
        <p className="text-center text-gray-200 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          ScorpioTech empowers businesses to thrive online by delivering powerful backend systems, 
          modern frontend interfaces, and smart automation tools.
        </p>

        {/* 2x2 Grid on Mobile, 3 cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mt-12">
          <ServiceCard 
            title="Frontend" 
            description="Clean, fast, and responsive websites designed to work perfectly on any device." 
          />
          <ServiceCard 
            title="Backend" 
            description="Secure and stable systems built to manage large amounts of data for many users." 
          />
          <div className="col-span-2 lg:col-span-1">
            <ServiceCard 
              title="Automation" 
              description="Custom bots and smart tools created to handle your manual tasks automatically." 
            />
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: OUR PROCESS --- */}
      <section className="px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Strategy", desc: "We plan the best tech path for your app." },
            { step: "02", title: "Design", desc: "We create a clean and modern user interface." },
            { step: "03", title: "Build", desc: "We code your powerful backend and frontend." },
            { step: "04", title: "Launch", desc: "We deploy and monitor your live solution." }
          ].map((item, idx) => (
            <div key={idx} className="relative p-6 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all">
              <span className="text-yellow-500 font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">{item.step}</span>
              <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURES SECTION (Why Choose Us) --- */}
      <section className="px-4 max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Why Choose Us?</h2>
        <div className="grid grid-cols-2 gap-3 md:gap-8 mt-8">
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-4 md:p-6 rounded-xl shadow-lg">
            <h3 className="text-base md:text-2xl font-semibold mb-1 text-gray-900">Fast & Reliable</h3>
            <p className="text-xs md:text-base text-gray-800">Optimized for speed so your users never have to wait.</p>
          </div>
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-4 md:p-6 rounded-xl shadow-lg">
            <h3 className="text-base md:text-2xl font-semibold mb-1 text-gray-900">High Capacity</h3>
            <p className="text-xs md:text-base text-gray-800">Built to handle thousands of users at once.</p>
          </div>
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-4 md:p-6 rounded-xl shadow-lg">
            <h3 className="text-base md:text-2xl font-semibold mb-1 text-gray-900">Secure Storage</h3>
            <p className="text-xs md:text-base text-gray-800">Your data is saved and protected forever.</p>
          </div>
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-4 md:p-6 rounded-xl shadow-lg">
            <h3 className="text-base md:text-2xl font-semibold mb-1 text-gray-900">Smart Logic</h3>
            <p className="text-xs md:text-base text-gray-800">Automate your business to save time and money.</p>
          </div>
        </div>
      </section>

  

      {/* --- TESTIMONIALS --- */}
      <section className="px-4 max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Client Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {currentTestimonials.map((t, i) => (
            <div key={i} className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full border-2 border-[#77581f] object-cover" />
              <p className="text-sm md:text-base text-gray-800 italic leading-relaxed">"{t.text}"</p>
              <p className="font-bold text-gray-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="px-4 max-w-5xl mx-auto text-center py-16 md:py-24 bg-gradient-to-b from-[#e0d7c6] to-[#d6ccb8] border border-[#cbbfa8] rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 px-2">
            Ready to Build Your Next Solution?
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-800 leading-relaxed px-4">
            Join 50+ businesses already automating their growth with ScorpioTech.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 mt-8">
            <Link 
              href="/customerbox"
              className="w-full sm:w-auto px-10 py-4 bg-[#77581f] text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 text-center shadow-lg"
            >
              Get Started Now
            </Link>
            <Link 
              href="/projects"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-[#77581f] text-[#77581f] font-bold rounded-full hover:bg-white/20 transition-all text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}