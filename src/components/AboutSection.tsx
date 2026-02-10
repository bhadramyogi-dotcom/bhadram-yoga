import { motion } from "framer-motion";
import aboutImage from "@/assets/about-yoga.jpg";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Meditación en la naturaleza"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/20 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Sobre Mí
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Un camino de <span className="italic">presencia</span> y conexión
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                Soy instructora certificada de yoga con más de 10 años de experiencia guiando 
                a personas en su viaje hacia el bienestar integral. Mi práctica combina tradiciones 
                ancestrales con un enfoque moderno y accesible.
              </p>
              <p>
                Creo firmemente que el yoga no es solo movimiento físico, sino una herramienta 
                poderosa para transformar nuestra relación con nosotros mismos y con el mundo 
                que nos rodea.
              </p>
              <p>
                Cada clase es una invitación a pausar, respirar y reconectar con tu esencia más 
                auténtica, sin importar tu nivel de experiencia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
