import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, X, ZoomIn } from "lucide-react";
import diploma1 from "@assets/051125-084613V9-harant_1784376931227.webp";
import diploma2 from "@assets/031125-0109302o-harant_1784376931228.webp";
import diploma3 from "@assets/031125-053704jD-harant_1784376931227.webp";

export default function Education() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const educationTimeline = [
    {
      year: "2018",
      type: "Среднее профессиональное образование",
      inst: "Вельский индустриально-экономический колледж (г. Вельск, Архангельская область)",
      spec: "40.02.01 «Право и организация социального обеспечения»",
      qual: "Юрист",
      verified: true
    },
    {
      year: "2025",
      type: "Высшее образование (Бакалавриат)",
      inst: "Московский Международный Университет (г. Москва)",
      spec: "40.03.01 «Юриспруденция»",
      qual: "Бакалавр юриспруденции",
      verified: true
    },
    {
      year: "2025–настоящее время",
      type: "Магистратура (в процессе обучения)",
      inst: "Московский Международный Университет (г. Москва)",
      spec: "40.04.01 «Гражданское право и гражданский процесс»",
      qual: null,
      verified: false
    }
  ];

  const additionalEducation = {
    year: "2025",
    type: "Дополнительное образование",
    inst: "Сертификат участника IX Всероссийского юридического форума «Проблемы правового регулирования имущественного оборота»",
    spec: "Образовательный центр ГАРАНТ, Москва, 24 сентября 2025 г., 12 академических часов",
  };

  const images = [
    { src: diploma1, alt: "Диплом о среднем профессиональном образовании, 2018" },
    { src: diploma2, alt: "Диплом Бакалавра, 2025" },
    { src: diploma3, alt: "Сертификат IX Всероссийского юридического форума, 2025" },
  ];

  return (
    <section id="education" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6"
          >
            Образование и квалификация
          </motion.h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12">
              {educationTimeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative pl-8 md:pl-10"
                >
                  <div className="absolute -left-[21px] top-1 w-10 h-10 bg-card rounded-full border-4 border-background flex items-center justify-center shadow-md">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    {item.verified && (
                      <div className="absolute top-0 right-0 bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-bl-lg border-l border-b border-green-500/20 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Диплом проверен HARANT
                      </div>
                    )}
                    <span className="text-secondary font-bold text-lg mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2 pr-16">{item.type}</h3>
                    <p className="text-foreground font-medium mb-3">{item.inst}</p>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p><span className="font-medium text-foreground/80">Направление:</span> {item.spec}</p>
                      {item.qual && <p><span className="font-medium text-foreground/80">Квалификация:</span> {item.qual}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative pl-8 md:pl-10"
              >
                <div className="absolute -left-[21px] top-1 w-10 h-10 bg-card rounded-full border-4 border-background flex items-center justify-center shadow-md">
                  <Award className="w-4 h-4 text-secondary" />
                </div>
                
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 shadow-sm">
                  <span className="text-secondary font-bold text-lg mb-2 block">Дополнительное образование</span>
                  <p className="text-primary font-medium mb-2">{additionalEducation.inst}</p>
                  <p className="text-muted-foreground text-sm">{additionalEducation.spec}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32 space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Документы</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {images.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className="group relative bg-card border border-border p-2 rounded-xl cursor-pointer overflow-hidden hover:border-secondary/50 transition-colors shadow-sm"
                  >
                    <div className="aspect-[1.414/1] relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300 drop-shadow-md" />
                      </div>
                    </div>
                    <p className="text-center text-xs text-muted-foreground mt-3 mb-1 px-2 line-clamp-2" title={img.alt}>
                      {img.alt}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-4xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-auto max-h-[85vh] object-contain rounded-md shadow-2xl"
              />
              <p className="text-white text-center mt-4 text-sm font-medium tracking-wide">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Quick placeholder for Check icon since it wasn't imported in Education.tsx
import { Check as CheckIcon } from "lucide-react";
const Check = CheckIcon;
