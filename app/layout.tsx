import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* This tells the mobile browser UI to match your green background */}
        <meta name="theme-color" content="#315a42" />
      </head>
      {/* FIX: Removed 'bg-gray-100'. 
        The background is now handled entirely by globals.css to prevent "flashing".
      */}
      <body className="text-gray-900 antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        
        {/* Main Content: 
          'flex-grow' ensures the footer is pushed to the bottom.
          'pt-24' (or similar) ensures content doesn't sit under the fixed Navbar.
        */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 md:px-8 pt-28">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}