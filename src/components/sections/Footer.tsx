import { Scale, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const practiceLinks = [
    { label: "Консультации", href: "#services" },
    { label: "Подготовка документов", href: "#services" },
    { label: "Семейные споры", href: "#services" },
    { label: "Жилищные вопросы", href: "#services" },
    { label: "Представительство в суде", href: "#services" },
  ];

  return (
    <footer className="bg-[#070b1a] border-t border-white/10">
      {/* Main footer grid */}
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Практика */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-6 pb-3 border-b border-secondary/40">
              Практика
            </h4>
            <ul className="space-y-3">
              {practiceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-6 pb-3 border-b border-secondary/40">
              Контакты
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm leading-relaxed">
                  г. Вельск, ул. Дзержинского, 109<br />
                  2 этаж, офис 18
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed">
                  <a href="tel:+79214849856" className="text-white/70 hover:text-secondary transition-colors block">
                    8-921-484-98-56
                  </a>
                  <a href="tel:+79115884679" className="text-white/70 hover:text-secondary transition-colors block">
                    8-911-588-46-79
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm leading-relaxed">
                  Пн–Пт: 09:00 – 18:00<br />
                  Сб: по согласованию<br />
                  Вс: выходной
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-secondary" />
            <span className="text-white/40 text-sm">
              &copy; {currentYear} Маркус Игорь Демьянович. Все права защищены.
            </span>
          </div>
          <p className="text-white/25 text-xs text-center md:text-right max-w-sm">
            Информация носит ознакомительный характер и не является публичной офертой.
          </p>
        </div>
      </div>
    </footer>
  );
}
