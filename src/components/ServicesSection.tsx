import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesImage from "@/assets/services-yoga.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="clases" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-4 text-justify">
              {t("classes.p1")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-4 text-justify">
              {t("classes.p2")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify">
              {t("classes.p3")}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src={servicesImage}
              alt="Ofrenda floral de yoga"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
