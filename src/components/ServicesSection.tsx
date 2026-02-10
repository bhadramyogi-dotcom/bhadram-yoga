import { motion } from "framer-motion";
import { Leaf, Sun, Heart } from "lucide-react";
import servicesImage from "@/assets/services-yoga.jpg";

const services = [
  {
    icon: Leaf,
    title: "Hatha Yoga",
    description:
      "Posturas clásicas con respiración consciente. Ideal para principiantes que buscan una base sólida en su práctica.",
  },
  {
    icon: Sun,
    title: "Vinyasa Flow",
    description:
      "Secuencias dinámicas que conectan movimiento y respiración. Perfecta para quienes buscan energía y fluidez.",
  },
  {
    icon: Heart,
    title: "Yoga Restaurativo",
    description:
      "Posturas suaves y meditación profunda para liberar tensión y restaurar el equilibrio interior.",
  },
];

const ServicesSection = () => {
  return (
    <section id="clases" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Clases
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
            Encuentra tu <span className="italic">práctica</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background rounded-2xl p-8 text-center group hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto rounded-2xl overflow-hidden"
        >
          <img
            src={servicesImage}
            alt="Elementos de yoga y bienestar"
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
