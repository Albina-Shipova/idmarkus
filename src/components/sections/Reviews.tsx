import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Мария Дубровская",
      source: "Яндекс Карты",
      rating: 5,
      text: "Понадобилась срочная юридическая помощь в оформлении сделки. Посмотрела в интернете юристов в Вельске, выбрала наугад юриста Маркуса И.Д. и всё прошло отлично. Оперативно и профессионально.",
    },
    {
      name: "Алексей",
      source: "HARANT",
      rating: 5,
      text: "Хочу выразить свою благодарность юристу Игорю Маркусу за профессиональную помощь! Очень доволен качеством работы, всё было чётко и оперативно. Грамотный специалист, рекомендую.",
    },
    {
      name: "Алексей · Знаток города 14 уровня",
      source: "Яндекс Карты",
      rating: 5,
      text: "Хочу выразить искреннюю благодарность юристу Игорю Демьяновичу за профессиональную помощь в решении моего вопроса. Обратился к нему по рекомендации, и ни разу не пожалел. Особенно порадовало, что юрист с самого начала подробно и доступно объяснил все перспективы дела, чётко обозначил алгоритм действий и стоимость услуг. Работа была выполнена оперативно, все документы подготовлены грамотно и в срок. Создаётся впечатление, что ему действительно небезразлична судьба клиента. Однозначно рекомендую Игоря Демьяновича как надёжного и ответственного юриста в Вельске.",
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      <div className="absolute -left-64 -top-64 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
      <div className="absolute -right-64 -bottom-64 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
          >
            Отзывы клиентов
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
          >
            <span className="text-white/80 font-medium">Рейтинг на HARANT:</span>
            <span className="text-secondary font-bold">9.5/10</span>
            <div className="flex ml-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-100" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 font-medium italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-6 relative z-10">
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.source}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 font-bold font-serif">
                  {review.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
