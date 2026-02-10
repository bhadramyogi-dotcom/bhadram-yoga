import { motion } from "framer-motion";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-card">
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
              Conéctate <span className="italic">conmigo</span>
            </h2>
            <p className="font-body text-muted-foreground mb-4">
              <span className="font-display text-lg text-foreground">Ivana Gasser</span>
            </p>
            <p className="font-body text-sm text-muted-foreground mb-2">
              Profesora diplomada de Yoga SYV/EYU
            </p>
            <p className="font-body text-sm text-muted-foreground mb-12">
              ¿Tienes preguntas o te gustaría registrarte para una lección de yoga?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          >
            <a href="mailto:ivana.gasser@gmx.ch" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-sm">ivana.gasser@gmx.ch</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-sm">Engelberg, Suiza</span>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://www.facebook.com/bhadram.yoga.37/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/bhadram.yoga/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
          </motion.div>

          <motion.a
            href="mailto:ivana.gasser@gmx.ch"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
