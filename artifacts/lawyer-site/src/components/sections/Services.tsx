import { motion } from "framer-motion";
import { Scale, FileText, Gavel, Users, Car, AlertTriangle, Briefcase, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Консультации",
      icon: Briefcase,
      price: "от 1 000 ₽",
      items: [
        "Развернутые ответы на вопросы по различным отраслям права",
        "Оценка перспектив дела",
        "Письменные и устные консультации",
      ]
    },
    {
      title: "Подготовка документов",
      icon: FileText,
      price: "по договорённости",
      items: [
        "Составление заявлений, претензий, жалоб",
        "Составление исков и ходатайств",
        "Составление договоров и соглашений",
      ]
    },
    {
      title: "Представительство в суде",
      icon: Gavel,
      price: "по договорённости",
      items: [
        "Защита интересов клиента в суде",
        "Представление в государственных органах",
        "Сопровождение на всех этапах дела",
      ]
    },
    {
      title: "Семейное право",
      icon: Users,
      price: "по договорённости",
      items: [
        "Бракоразводные процессы",
        "Установление, изменение и взыскание алиментов",
        "Установление места жительства несовершеннолетних детей",
        "Определение порядка общения с детьми",
        "Лишение родительских прав",
      ]
    },
    {
      title: "Помощь при ДТП",
      icon: Car,
      price: "по договорённости",
      items: [
        "Возмещение ущерба с виновника ДТП, в т.ч. разницы между страховой выплатой и реальной суммой убытков",
        "Взыскание страхового возмещения при причинении вреда жизни и здоровью",
        "Представительство в суде",
      ]
    },
    {
      title: "Административное право",
      icon: AlertTriangle,
      price: "по договорённости",
      items: [
        "Защита лиц, привлекаемых к административной ответственности",
        "Привлечение виновных в совершении правонарушения в отношении клиента",
        "Обжалование административных постановлений",
      ]
    }
  ];

  const featuredService = {
    title: "Взыскание причинённого вреда",
    icon: Scale,
    price: "по договорённости",
    items: [
      "Взыскание материального ущерба",
      "Взыскание морального вреда",
      "Досудебное урегулирование споров",
      "Представление интересов в суде",
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-gray-50/50 dark:bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6"
          >
            Юридические услуги
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Оказываю квалифицированную правовую помощь гражданам и организациям. Каждое дело требует детального изучения.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Highlighted Featured Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 bg-primary rounded-xl p-1 relative overflow-hidden shadow-xl"
          >
            {/* Animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/50 to-secondary opacity-30"></div>
            
            <div className="relative bg-card h-full rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-secondary/30">
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <featuredService.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  {featuredService.title}
                </h3>
                <p className="text-secondary font-medium mb-6">{featuredService.price}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuredService.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <a 
                  href="#contacts" 
                  className="px-8 py-4 bg-secondary text-white rounded-md font-medium shadow-lg hover:shadow-xl hover:bg-secondary/90 transition-all hover:-translate-y-1 text-center w-full md:w-auto"
                >
                  Обсудить дело
                </a>
              </div>
            </div>
          </motion.div>

          {/* Regular Cards */}
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-secondary/30 group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-primary mb-2">
                {service.title}
              </h3>
              
              <div className="text-sm font-medium text-secondary mb-6">
                {service.price}
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 mt-1.5 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
