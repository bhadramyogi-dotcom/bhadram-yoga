import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Contacto
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Comienza tu <span className="italic">viaje</span>
            </h2>
            <p className="font-body text-muted-foreground mb-12 leading-relaxed">
              ¿Lista para dar el primer paso? Escríbeme y encontraremos juntas la práctica perfecta para ti.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16"
          >
            <a href="mailto:hola@namasteyoga.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-sm">hola@namasteyoga.com</span>
            </a>
            <a href="tel:+34600000000" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-sm">+34 600 000 000</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-sm">Madrid, España</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.a
            href="mailto:hola@namasteyoga.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Reserva tu clase
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
