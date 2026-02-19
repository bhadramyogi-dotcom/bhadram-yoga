import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesImage from "@/assets/services-yoga.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="clases" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-8"
        >
          {t("classes.label")}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm text-foreground leading-relaxed mb-4">
              {t("classes.title_1")} {t("classes.title_2")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-4">
              {t("classes.p1")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-4">
              {t("classes.p2")}
            </p>
          </motion.div>

          {/* Text right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-4">
              {t("classes.p3")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed">
              {t("classes.p4")}
            </p>
          </motion.div>
        </div>

        {/* Image below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14"
        >
          <img
            src={servicesImage}
            alt="Yoga class"
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
