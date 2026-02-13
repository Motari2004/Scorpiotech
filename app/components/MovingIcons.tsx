import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiSelenium } from "react-icons/si";

// Playwright is added as a string path to your local JPEG
const icons = [
  FaPython,
  FaJava,
  SiNextdotjs,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  SiPostgresql,
  SiSelenium,
  "/playwright.jpg", 
];

export default function MovingIcons() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 py-2 relative border-t border-yellow-200">
      
      {/* Soft edge fade */}
      <div className="absolute inset-0 pointer-events-none z-20 
                      bg-gradient-to-r from-yellow-100 via-transparent to-yellow-100"></div>

      <div className="animate-marquee flex items-center space-x-24 w-max relative z-10">
        {/* Set 1 */}
        {icons.map((IconItem, i) => (
          typeof IconItem === "string" ? (
            <img 
              key={`a-${i}`} 
              src={IconItem} 
              className="h-6 w-6 object-contain flex-shrink-0 grayscale sepia saturate-200 brightness-75 contrast-125" 
              alt="Playwright"
            />
          ) : (
            <IconItem key={`a-${i}`} className="text-yellow-600 text-2xl flex-shrink-0" />
          )
        ))}

        {/* Set 2 (Duplicated for seamless loop) */}
        {icons.map((IconItem, i) => (
          typeof IconItem === "string" ? (
            <img 
              key={`b-${i}`} 
              src={IconItem} 
              className="h-6 w-6 object-contain flex-shrink-0 grayscale sepia saturate-200 brightness-75 contrast-125" 
              alt="Playwright"
            />
          ) : (
            <IconItem key={`b-${i}`} className="text-yellow-600 text-2xl flex-shrink-0" />
          )
        ))}
      </div>
    </div>
  );
}