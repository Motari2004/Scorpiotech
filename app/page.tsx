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
      <section className="pt-24 md:pt-32 px-4 max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 leading-tight">
          We Build Cutting-Edge <span className="text-[#77581f]">Digital Solutions</span>
        </h1>
        <p className="text-center text-gray-700 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          Scorpio Digital empowers businesses to thrive online by delivering robust backend systems, 
          modern frontend interfaces, and smart automation tools.
        </p>

        {/* 2x2 Grid on Mobile, 3 cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mt-12">
          <ServiceCard 
            title="Frontend" 
            description="Modern, responsive websites designed to drive conversions." 
          />
          <ServiceCard 
            title="Backend" 
            description="Secure, scalable, and reliable systems for automation." 
          />
          {/* On mobile (2-col), we make the 3rd card span full width to look centered */}
          <div className="col-span-2 lg:col-span-1">
            <ServiceCard 
              title="Automation" 
              description="Custom tools to streamline your business processes." 
            />
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION (2x2 Grid) --- */}
      <section className="px-4 max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Why Choose Us?</h2>
        <div className="grid grid-cols-2 gap-3 md:gap-8 mt-8">
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-4 md:p-6 rounded-xl shadow-lg">
            <h3 className="text-base md:text-2xl font-semibold mb-1 text-gray-900">Fast & Reliable</h3>
            <p className="text-xs md:text-base text-gray-800">Optimized for performance and 99.9% uptime.</p>
          </div>
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-4 md:p-6 rounded-xl shadow-lg">
            <h3 className="text-base md:text-2xl font-semibold mb-1 text-gray-900">Scalable</h3>
            <p className="text-xs md:text-base text-gray-800">Built to grow with your enterprise business.</p>
          </div>
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-4 md:p-6 rounded-xl shadow-lg">
            <h3 className="text-base md:text-2xl font-semibold mb-1 text-gray-900">Beautiful UI</h3>
            <p className="text-xs md:text-base text-gray-800">Intuitive designs that delight every user.</p>
          </div>
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-4 md:p-6 rounded-xl shadow-lg">
            <h3 className="text-base md:text-2xl font-semibold mb-1 text-gray-900">Custom Bots</h3>
            <p className="text-xs md:text-base text-gray-800">Automate tasks to reduce human error.</p>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="px-4 max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Client Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {currentTestimonials.map((t, i) => (
            <div key={i} className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4 animate-in fade-in duration-700">
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