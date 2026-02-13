import ServiceCard from "./../components/ServiceCard";

export default function ServicesPage() {
  return (
    <section className="pt-32 px-6 max-w-6xl mx-auto space-y-12">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard 
          title="Web Development" 
          description="Custom websites built for performance, scalability, and modern design." 
        />
        <ServiceCard 
          title="Automation Tools" 
          description="Scripts and utilities that save time, reduce errors, and streamline workflows." 
        />
        <ServiceCard 
          title="Social Media Bots" 
          description="Instagram, WhatsApp, Telegram bots to grow and engage your audience efficiently." 
        />
      </div>
    </section>
  );
}
