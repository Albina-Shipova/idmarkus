import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Send } from "lucide-react";

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6"
            >
              Связаться с юристом
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Первая консультация — это бесплатная оценка вашей ситуации. Не откладывайте решение проблемы, свяжитесь со мной прямо сейчас.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
            {/* Contact Info */}
            <div className="p-8 md:p-12 lg:pr-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-8">Контактная информация</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                    <a href="tel:+79214849856" className="text-xl md:text-2xl font-bold text-foreground hover:text-secondary transition-colors block">
                      8-921-484-98-56
                    </a>
                    <a href="tel:+79115884679" className="text-lg font-medium text-foreground/80 hover:text-secondary transition-colors block mt-1">
                      8-911-588-46-79
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Режим работы</p>
                    <p className="text-lg font-medium text-foreground">Пн–Пт: 09:00 – 18:00</p>
                    <p className="text-sm text-muted-foreground mt-1">Сб: по согласованию · Вс: выходной</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Адрес</p>
                    <p className="text-lg font-medium text-foreground">г. Вельск, ул. Дзержинского, 109</p>
                    <p className="text-sm text-muted-foreground mt-1">2 этаж, офис 18</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-primary p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[50px]"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-6">Нужна помощь?</h3>
                <p className="text-white/80 text-lg mb-10 leading-relaxed">
                  Позвоните мне напрямую или напишите на почту. Я всегда на связи и готов приступить к работе.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+79214849856"
                    className="w-full py-4 px-6 bg-secondary text-white rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:bg-secondary/90 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:-translate-y-1 transition-all"
                  >
                    <Phone className="w-6 h-6" />
                    Позвонить сейчас
                  </a>
                  <a 
                    href="mailto:"
                    className="w-full py-4 px-6 bg-white/10 text-white border border-white/20 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 hover:-translate-y-1 transition-all"
                  >
                    <Send className="w-6 h-6" />
                    Написать на почту
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
