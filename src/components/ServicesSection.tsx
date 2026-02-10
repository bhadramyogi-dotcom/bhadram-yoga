import { motion } from "framer-motion";
import { Leaf, Users, User } from "lucide-react";
import servicesImage from "@/assets/services-yoga.jpg";

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
            Mis Clases
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
            Encuentra tu <span className="italic">ritmo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={servicesImage}
                alt="Paisaje montañoso, conexión con la naturaleza"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                Quiero compartir lo que voy aprendiendo. Quiero mostrarte la seguridad que da el 
                reconocer tu propia luz, la alegría que se siente al encontrarse con la luz de otras 
                personas y la paz que experimentas al aceptar que cada ser brilla a su manera.
              </p>
              <p>
                Mis clases, que pueden ser en <strong className="text-foreground">español o alemán</strong>, están 
                centradas en ayudarte a conectar con tu cuerpo y respiración. Están influenciadas por 
                Hatha Yoga clásico.
              </p>
              <p>
                Me gusta utilizar soportes, realizo ajustes y correcciones cuando son necesarias para 
                ayudarte a construir las posturas corporales (asanas) con seguridad.
              </p>
              <p className="italic text-primary">
                Mis clases son para todos los que quieran probar, aprender y mejorar su práctica de yoga. 
                Para mí lo más importante es que encuentres tu ritmo y que al seguirlo puedas fluir con calma.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Leaf, title: "Hatha Yoga Clásico", desc: "Posturas con soportes, ajustes y correcciones para una práctica segura y consciente." },
            { icon: Users, title: "Clases Grupales", desc: "Sesiones en español o alemán en Yogaraum Luzern, para todos los niveles." },
            { icon: User, title: "Clases Privadas", desc: "Sesiones personalizadas de 60 minutos adaptadas a tus necesidades específicas." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 text-center group hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
