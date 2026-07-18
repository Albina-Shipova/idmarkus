import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Clock, Scale, Briefcase, ChevronDown } from "lucide-react";
import heroPhoto from "@assets/image_1784377625211.png";

export default function Hero() {
  const stats = [
    { icon: Briefcase, label: "8+ лет опыта" },
    { icon: Scale, label: "23+ судебных дела" },
    { icon: Clock, label: "24/7 доступность" },
    { icon: Shield, label: "Конфиденциально" },
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-primary overflow-hidden pt-20">
      {/* Abstract Background Motif */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] text-secondary fill-current">
          <path d="M499.7,850.5c-4.1,0-7.5-3.4-7.5-7.5V157.1c0-4.1,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5v685.9C507.2,847.1,503.8,850.5,499.7,850.5z"/>
          <path d="M500,240.2c-4.1,0-7.5-3.4-7.5-7.5v-75c0-4.1,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5v75C507.5,236.9,504.1,240.2,500,240.2z"/>
          <path d="M793.6,263c-39.2,0-74.9-19.1-96.6-51.5c-15.6-23.4-19-53-9.5-79.6c1.4-3.9,5.7-5.9,9.6-4.5c3.9,1.4,5.9,5.7,4.5,9.6c-7.9,22.2-5,46.9,8.1,66.4c18.1,27.1,47.9,43.1,80.6,43.1s62.5-16,80.6-43.1c13.1-19.6,15.9-44.2,8.1-66.4c-1.4-3.9,0.7-8.2,4.5-9.6c3.9-1.4,8.2,0.7,9.6,4.5c9.5,26.6,6.2,56.2-9.5,79.6C868.5,243.9,832.8,263,793.6,263z"/>
          <path d="M206.4,263c-39.2,0-74.9-19.1-96.6-51.5c-15.6-23.4-19-53-9.5-79.6c1.4-3.9,5.7-5.9,9.6-4.5c3.9,1.4,5.9,5.7,4.5,9.6c-7.9,22.2-5,46.9,8.1,66.4c18.1,27.1,47.9,43.1,80.6,43.1c32.7,0,62.5-16,80.6-43.1c13.1-19.6,15.9-44.2,8.1-66.4c-1.4-3.9,0.7-8.2,4.5-9.6c3.9-1.4,8.2,0.7,9.6,4.5c9.5,26.6,6.2,56.2-9.5,79.6C281.3,243.9,245.6,263,206.4,263z"/>
          <path d="M793.6,455.5H206.4c-4.1,0-7.5-3.4-7.5-7.5v-15c0-4.1,3.4-7.5,7.5-7.5h587.3c4.1,0,7.5,3.4,7.5,7.5v15C801.1,452.1,797.7,455.5,793.6,455.5z"/>
          <path d="M206.4,233h587.3c4.1,0,7.5-3.4,7.5-7.5v-15c0-4.1-3.4-7.5-7.5-7.5H206.4c-4.1,0-7.5,3.4-7.5,7.5v15C198.9,229.6,202.3,233,206.4,233z"/>
        </svg>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary/95 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium tracking-wide mb-6">
                г. Вельск, Архангельская область
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Надёжная юридическая защита <span className="text-secondary italic">ваших интересов</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Профессиональная помощь в решении правовых вопросов. Честная оценка перспектив дела и индивидуальный подход к каждой ситуации.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="tel:+79214849856"
                className="px-8 py-4 bg-secondary text-white rounded-md font-medium text-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Позвонить
              </a>
              <a
                href="#contacts"
                className="px-8 py-4 bg-white/10 text-white rounded-md font-medium text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:-translate-y-1"
              >
                Записаться на консультацию
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors border border-secondary/20">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{stat.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gold decorative border frame */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-secondary/30 pointer-events-none" />
              <div className="absolute -inset-1 rounded-xl border border-secondary/20 pointer-events-none" />

              {/* Photo */}
              <div className="relative w-72 md:w-80 lg:w-96 rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                <img
                  src={heroPhoto}
                  alt="Маркус Игорь Демьянович — частный юрист"
                  className="w-full h-auto object-cover object-top"
                />
                {/* Name plate overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent p-5 pt-10">
                  <p className="font-serif font-bold text-white text-lg leading-tight">Маркус Игорь Демьянович</p>
                  <p className="text-secondary text-sm font-medium mt-0.5">Частный юрист · Медиатор</p>
                </div>
              </div>

              {/* Floating gold accent dot */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-60 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-40 blur-sm" />
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase mb-1">Вниз</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
