import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ivanaImage from "@/assets/ivana-nature.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 min-h-[400px]">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden"
          >
            <img
              src={ivanaImage}
              alt="Ivana Gasser"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14"
          >
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide font-normal text-primary mb-8">
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
