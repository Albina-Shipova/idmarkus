import { motion } from "framer-motion";
import { Plane, Building2, Laptop } from "lucide-react";

export default function WorkFormat() {
  const items = [
    {
      icon: Plane,
      title: "Командировки",
      description: "Выезжаю на встречи и заседания лично, если того требует ваше дело.",
    },
    {
      icon: Building2,
      title: "Другие города",
      description: "Готов представлять и защищать ваши интересы за пределами Вельска.",
    },
    {
      icon: Laptop,
      title: "Удалённая работа",
      description: "Подготовка документов возможна полностью дистанционно, без личной встречи.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50/50 dark:bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3"
          >
            Формат работы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Не ограничиваюсь одним городом — работаю там и так, где это удобно вам.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-6 md:p-8 text-center hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
