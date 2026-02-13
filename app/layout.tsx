import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        
        {/* Mobile Fixes: 
          1. Changed p-8 to p-4 (mobile) and md:p-8 (desktop)
          2. Added max-w-7xl and mx-auto to prevent content from stretching too wide on iPads/Laptops
          3. Added w-full to ensure it fills the screen width
        */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 md:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}