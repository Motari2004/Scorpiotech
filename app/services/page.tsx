import ServiceCard from "./../components/ServiceCard";

export default function ServicesPage() {
  return (
    /* pt-4 for mobile, pt-12 for desktop to remove that big empty gap */
    <section className="pt-4 md:pt-12 px-4 md:px-6 max-w-6xl mx-auto space-y-8 pb-20">
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white tracking-tight">
        Our <span className="text-yellow-500">Services</span>
      </h1>

      <p className="text-center text-gray-200 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
        We bridge the gap between complex backend logic and intuitive user experiences.
      </p>

      {/* Mobile: grid-cols-2 (2x2) 
          Desktop: md:grid-cols-3 
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mt-4">
        <ServiceCard 
          title="Web Development" 
          description="Custom websites built for performance, scalability, and modern design." 
        />
        <ServiceCard 
          title="Automation Tools" 
          description="Scripts and utilities that save time and streamline workflows." 
        />
        <ServiceCard 
          title="Social Bots" 
          description="Custom bots for Instagram, WhatsApp, and Telegram to grow your audience." 
        />
        {/* Added a 4th dummy card or you can leave it at 3. 
            If you have 3 cards, the 2x2 grid will have one empty spot, 
            which looks very clean on mobile. */}
      </div>
    </section>
  );
}