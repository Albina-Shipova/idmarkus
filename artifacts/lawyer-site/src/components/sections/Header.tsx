import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Scale } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "О юристе", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Образование", href: "#education" },
    { name: "Отзывы", href: "#reviews" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-3"
          : "bg-primary/95 backdrop-blur-md py-5 dark:bg-primary"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Scale className={`w-8 h-8 transition-colors ${isScrolled ? 'text-secondary' : 'text-secondary'}`} />
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl leading-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Маркус И.Д.
              </span>
              <span className={`text-xs tracking-wider uppercase transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-white/70'}`}>
                Частный юрист
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-secondary ${
                      isScrolled ? "text-primary/80" : "text-white/90"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4 border-l pl-6 border-white/20">
              <a 
                href="tel:+79214849856"
                className={`flex items-center gap-2 text-sm font-bold transition-colors hover:text-secondary ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                8 (921) 484-98-56
              </a>
              <a
                href="tel:+79214849856"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isScrolled 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                }`}
              >
                Позвонить
              </a>
            </div>
          </nav>

          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-primary font-medium text-lg py-2 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a 
                  href="tel:+79214849856"
                  className="flex items-center justify-center gap-2 text-primary font-bold text-lg"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  8 (921) 484-98-56
                </a>
                <a
                  href="tel:+79214849856"
                  className="bg-secondary text-white text-center py-3 rounded-md font-medium"
                >
                  Позвонить
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
