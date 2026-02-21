import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ivanaImage from "@/assets/ivana-nature.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={ivanaImage}
              alt="Ivana Gasser"
              className="w-full h-[480px] object-cover object-top"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-6">
              {t("about.label")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 uppercase tracking-wide font-normal">
              {t("about.label")}
            </h2>
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-3">
              {t("about.p1")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-3">
              {t("about.p2")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-3">
              {t("about.p3")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-3">
              {t("about.p4")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed">
              {t("about.p5")}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
