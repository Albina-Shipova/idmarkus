import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";
import harantScreenshot from "@assets/image_1784378740878.png";

export default function About() {
  const highlights = [
    "Опыт с 2018 года",
    "Самозанятый (с 2021 года)",
    "23+ судебных дела",
    "Работает 24/7"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                О юристе
              </h2>
              <div className="w-20 h-1 bg-secondary rounded-full"></div>
            </div>

            <div className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
              <p>
                Я имею профильное образование в области гражданского права и практикую с 2018 года. За это время я приобрел значительный опыт в ведении судебных дел в различных сферах. Моё упорство, настойчивость и глубокое понимание структуры и принципов российского законодательства помогали мне успешно решать сложные правовые вопросы и достигать желаемых результатов.
              </p>
              <p>
                Я обладаю глубокими теоретическими знаниями и многолетней практикой в области гражданского, семейного и административного права. Каждое дело рассматриваю индивидуально, уделяя особое внимание деталям и разрабатывая стратегию защиты, максимально отвечающую интересам клиента.
              </p>
              <p>
                Работаю прозрачно: честно оцениваю перспективы дела на первоначальном этапе, не обещаю невозможного и всегда готов разъяснить каждый шаг. Конфиденциальность и доверие — основа нашего сотрудничества.
              </p>
            </div>
            
            <div className="mt-10">
              {/* Hand-drawn SVG signature */}
              <svg
                viewBox="0 0 280 70"
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-auto opacity-70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "hsl(var(--primary))" }}
              >
                {/* М */}
                <path d="M8,52 L8,20 L22,42 L36,20 L36,52" />
                {/* а */}
                <path d="M44,34 Q44,28 50,28 Q58,28 58,36 L58,52 Q54,52 50,50 Q44,48 44,42 Q44,34 52,34 L58,34" />
                {/* р */}
                <path d="M64,52 L64,28 Q72,26 76,30 Q80,34 76,40 Q72,44 64,42" />
                {/* к */}
                <path d="M86,20 L86,52 M86,38 L98,28 M88,40 L100,52" />
                {/* у */}
                <path d="M106,28 L114,48 M122,28 L114,48 Q110,58 104,60" />
                {/* с */}
                <path d="M140,34 Q136,28 130,30 Q124,32 124,40 Q124,48 130,50 Q136,52 140,46" />
                {/* small divider flourish */}
                <path d="M146,40 Q158,36 160,40" />
                {/* И */}
                <path d="M168,28 L168,52 M168,28 L188,52 M188,28 L188,52" />
                {/* . */}
                <circle cx="193" cy="51" r="1.2" fill="currentColor" stroke="none" />
                {/* Д */}
                <path d="M198,52 L200,28 L220,28 L222,52 M196,52 L224,52" />
                {/* . */}
                <circle cx="228" cy="51" r="1.2" fill="currentColor" stroke="none" />
                {/* trailing flourish */}
                <path d="M234,48 Q248,38 258,44 Q264,48 260,54" />
              </svg>
              <p className="font-serif font-bold text-lg mt-2 text-primary">Маркус Игорь Демьянович</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-card rounded-xl shadow-lg border border-border p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>
              
              <h3 className="font-serif text-xl font-bold text-primary mb-6 relative z-10">
                Ключевые факты
              </h3>
              
              <ul className="space-y-6 relative z-10">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Готовы обсудить вашу ситуацию?
                </p>
                <a 
                  href="#contacts"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Связаться со мной
                </a>
              </div>

              {/* Harant Profile */}
              <div className="mt-6">
                <a
                  href="https://harant.ru/lawyer/markus-igor-demyanovich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl overflow-hidden border border-border hover:border-secondary/50 transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="relative">
                    <img
                      src={harantScreenshot}
                      alt="Профиль на HARANT"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium flex items-center gap-2 text-sm">
                        <ExternalLink className="w-4 h-4" />
                        Открыть профиль
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-card flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Профиль на HARANT</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
