import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesImage from "@/assets/services-yoga.jpg";
import classroomImage from "@/assets/yoga-classroom.webp";

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="clases" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        {/* Block 1: Image left + text right */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={servicesImage}
              alt="Ofrenda floral de yoga"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-between"
          >
            <p className="font-body text-sm text-foreground/85 leading-relaxed text-justify">
              {t("classes.title_1")} {t("classes.title_2")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify">
              {t("classes.p1")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify">
              {t("classes.p2")}
            </p>
          </motion.div>
        </div>

        {/* Block 2: Mis Clases title + classroom image + text */}
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-8"
          >
            {t("classes.label")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Classroom image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={classroomImage}
                alt="Salón de yoga"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col justify-between"
            >
              <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify">
                {t("classes.p3")}
              </p>
              <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify">
                {t("classes.p4")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Block 3: Pricing (moved from PricingSection) */}
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-6"
          >
            {t("pricing.label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm text-foreground font-semibold mb-8"
          >
            {t("pricing.title")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl"
          >
            {[
              { key: "pricing.trial", price: "CHF 25.00" },
              { key: "pricing.abo", price: "CHF 270.00" },
              { key: "pricing.single", price: "CHF 30.00" },
              { key: "pricing.private", price: "CHF 100.00 (60 min)" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 border-b border-border last:border-b-0"
              >
                <p className="font-body text-sm text-foreground/80">{t(item.key)}</p>
                <p className="font-body text-sm text-foreground font-medium">{item.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
