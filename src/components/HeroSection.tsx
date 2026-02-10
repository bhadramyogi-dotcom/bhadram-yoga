import { motion } from "framer-motion";
import heroImage from "@/assets/hero-yoga.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bhadram Yoga"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-6"
        >
          Prosperidad · Alegría · Bendición
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight mb-8"
        >
          Bhadram
          <br />
          <span className="italic font-light">Yoga</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg text-primary-foreground/90 mb-4 max-w-xl mx-auto leading-relaxed italic"
        >
          «Conoce tu propia luz, esto te permitirá reconocer y ver toda la luz alrededor.»
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-display text-base text-primary-foreground/70 mb-10"
        >
          — Swami Rama
        </motion.p>
        <motion.a
          href="#clases"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
        >
          Descubre las clases
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary-foreground/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
