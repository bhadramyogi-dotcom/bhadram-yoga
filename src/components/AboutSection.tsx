import { motion } from "framer-motion";
import aboutImage from "@/assets/about-yoga.jpg";
import ivanaImage from "@/assets/ivana-nature.jpg";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Intro philosophy */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Ivana practicando yoga"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Filosofía
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Reconoce tu <span className="italic">propia luz</span>
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                Cuando reconoces tu propia luz, te aceptas a ti mismo y aceptas lo que es y sucede 
                a tu alrededor. Esto te ayuda a vivir tu vida sin juzgarte ni juzgar a los demás.
              </p>
              <p>
                Con la práctica de yoga constante y humilde fluyes a través del movimiento y la 
                respiración. Abres tu mente a la transformación que se va dando en ti para conectarte 
                con tu luz interior.
              </p>
              <p>
                Logrando así vivir tu vida con armonía, llena de alegría, amor y abundancia.
              </p>
            </div>
          </motion.div>
        </div>

        {/* About Ivana */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:order-2"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Sobre Mí
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Ivana <span className="italic">Gasser</span>
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                Mi nombre es Ivana, vengo de la Patagonia Argentina. Soy una persona agradecida y 
                afortunada. Vivo en el bellísimo Engelberg. Como amante de la naturaleza me gusta 
                pasar mucho tiempo al aire libre. Soy Trail Runner y trekker de corazón.
              </p>
              <p>
                De profesión Farmacéutica, trabajé en el sector de la salud durante muchos años. 
                En la actualidad, mi vocación y dedicación plena se centra en la enseñanza del yoga.
              </p>
              <p>
                Mi primer contacto con el yoga fue hace más de veinte años en un Workshop de Indra Devi 
                en Buenos Aires. En 2013 participé en el Festival Internacional de Yoga en Rishikesh, India. 
                Completé una formación (YTT 200) en Hatha Yoga y la formación de cuatro años como profesora 
                diplomada en la Universidad de Yoga de Villeret, Suiza.
              </p>
              <p className="text-sm italic text-primary">
                Profesora diplomada de Yoga SYV/EYU · Miembro de la Asociación Suiza de Yoga
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:order-1 relative"
          >
            <div className="aspect-[3/5] rounded-2xl overflow-hidden">
              <img
                src={ivanaImage}
                alt="Ivana en la naturaleza"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
