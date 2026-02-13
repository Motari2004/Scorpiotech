"use client"; // Needed for useState and useEffect

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
    text: "Scorpio transformed our outdated site into a high-converting, modern platform. The speed and mobile responsiveness are lightyears ahead of our competitors.", 
    img: "https://randomuser.me/api/portraits/men/32.jpg" 
  },
  { 
    name: "Priya S.", 
    text: "The school website Scorpio designed is incredible. They integrated an automated enrollment system that handles student data and parent bookings perfectly—our front office has never been more organized.",
    img: "https://randomuser.me/api/portraits/women/44.jpg" 
  },
  { 
    name: "Michael R.", 
    text: "Our custom booking engine handles hundreds of appointments daily without a glitch. It has completely streamlined how we manage our client flow.", 
    img: "https://randomuser.me/api/portraits/men/51.jpg" 
  },
  { 
    name: "Sara L.", 
    text: "I needed an interactive dashboard to visualize and manage our complex internal data. Scorpio delivered a clean, intuitive interface that simplified our entire operation.",
    img: "https://randomuser.me/api/portraits/women/65.jpg" 
  },
  { 
    name: "David K.", 
    text: "I’ve worked with many devs, but their ability to bridge the gap between creative design and technical backend logic is truly rare. Highly professional.", 
    img: "https://randomuser.me/api/portraits/men/22.jpg" 
  },
  { 
    name: "Emma W.", 
    text: "They turned a nightmare spreadsheet into a fully autonomous workflow. It feels like I’ve added a full-time assistant to my team for a fraction of the cost.", 
    img: "https://randomuser.me/api/portraits/women/12.jpg" 
  },
];

export default function HomePage() {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3;

  // Auto-advance every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / pageSize));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonials = testimonials.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);

  return (
    <div className="space-y-32">




{/* Hero Section */}
<section className="pt-32 px-6 max-w-6xl mx-auto space-y-8">
  <h1 className="text-5xl font-bold text-center text-gray-900">
    We Build Cutting-Edge Digital Solutions
  </h1>
  <p className="text-center text-brown-100 text-lg md:text-xl max-w-3xl mx-auto">
    Scorpio Digital empowers businesses to thrive online by delivering robust backend systems, 
    modern frontend interfaces, and smart automation tools. From websites to social media bots, 
    we create solutions that scale, perform, and impress your users.
  </p>

  <div className="grid md:grid-cols-3 gap-6 mt-12">
    <ServiceCard 
      title="Web & Frontend Development" 
      description="Modern, responsive websites and web apps designed to engage visitors and drive conversions." 
    />
    <ServiceCard 
      title="Backend Solutions" 
      description="Secure, scalable, and reliable backend systems for websites, apps, and automation tools." 
    />
    <ServiceCard 
      title="Automation & Utilities" 
      description="Custom tools and scripts to save time, reduce errors, and streamline your business processes." 
    />
  </div>
</section>








      {/* Features Section */}
      <section className="px-6 max-w-6xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Fast & Reliable</h3>
            <p className="text-gray-800">Our websites and platforms are optimized for performance and uptime.</p>
          </div>
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Scalable Solutions</h3>
            <p className="text-gray-800">Built to grow with your business, whether it’s a small startup or enterprise.</p>
          </div>
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Beautiful UI/UX</h3>
            <p className="text-gray-800">Intuitive, modern designs that delight your users and drive engagement.</p>
          </div>
          <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Custom Automation</h3>
            <p className="text-gray-800">Automate repetitive tasks to save time and reduce errors.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="px-6 max-w-6xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 transition-all duration-700">
          {currentTestimonials.map((t, i) => (
            <div key={i} className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4">
              <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover" />
              <p className="text-gray-800">{t.text}</p>
              <p className="mt-2 font-semibold text-gray-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>









    {/* Call-to-Action Section */}
<section className="px-6 max-w-6xl mx-auto text-center py-24 bg-gradient-to-b from-[#e0d7c6] to-[#d6ccb8] border border-[#cbbfa8] rounded-3xl shadow-2xl relative overflow-hidden">

  {/* Decorative background element */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

  <div className="relative z-10 space-y-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
      Ready to Build Your Next Digital Solution?
    </h2>
    
    <p className="max-w-2xl mx-auto text-lg text-gray-800 leading-relaxed">
      Whether it’s a high-performance website, a custom automation tool, or a smart social media bot, 
      Scorpio Digital has the expertise to turn your vision into reality.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
      {/* Get Started Now */}
      <Link 
        href="/customerbox"
        className="group relative px-10 py-4 bg-[#77581f] text-white font-bold rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95"
      >
        <span className="relative z-10">Get Started Now</span>
        <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all text-xl">
          →
        </span>
      </Link>
      
      {/* View Our Work */}
      <Link 
        href="/projects"
        className="px-10 py-4 bg-transparent border-2 border-[#77581f] text-[#77581f] font-bold rounded-full hover:bg-white/30 transition-all"
      >
        View Our Work
      </Link>
    </div>

    <p className="text-sm text-gray-600 mt-6 italic">
      Join 50+ businesses already automating their growth with ScorpioTech.
    </p>
  </div>
</section>

    </div>
  );
}
