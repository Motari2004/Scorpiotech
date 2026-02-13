import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="theme-color" content="#315a42" />
      </head>
      {/* 1. Removed overflow-x-hidden from body (it can break scrolling).
          2. Added 'relative' so the background layer stays behind.
      */}
      <body className="text-gray-900 antialiased min-h-full flex flex-col relative">
        
        {/* THE SECRET FIX: This div is your background. 
            It stays fixed, so it never shows white space, 
            but it doesn't interfere with the scrolling of the content. 
        */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#315a42] bg-gradient-to-b from-[#315a42] to-[#77581f] pointer-events-none" />

        <Navbar />
        
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 pt-32 pb-12 md:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}