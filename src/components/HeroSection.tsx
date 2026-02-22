import { motion } from "framer-motion";
import heroImage from "@/assets/hero-yoga.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="pt-64 pb-0 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Tagline in gold */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-body text-xs md:text-sm text-primary font-bold leading-relaxed mb-12 max-w-none mx-auto text-center mt-2 whitespace-nowrap"
        >
          {t("hero.tagline")}
        </motion.p>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full mb-16"
        >
          <img
            src={heroImage}
            alt="Bhadram Yoga"
            className="w-full h-[420px] md:h-[560px] object-cover object-top"
            loading="eager"
          />
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center pb-20"
        >
          <p className="font-body text-base md:text-lg text-foreground/70 font-bold mb-2 max-w-4xl mx-auto leading-relaxed whitespace-nowrap">
            {t("hero.quote")}
          </p>
          <p className="font-body text-xs tracking-wider text-muted-foreground">
            {t("hero.quote_author")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
