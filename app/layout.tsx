import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovingIcons from "./components/MovingIcons";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 antialiased min-h-screen flex flex-col">
        <Navbar />
        
        {/* Changed min-h to screen so it fits content naturally */}
        <main className="flex-grow p-8">
          {children}
        </main>

        {/* Footer contains MovingIcons internally */}
        <Footer />
      </body>
    </html>
  );
}