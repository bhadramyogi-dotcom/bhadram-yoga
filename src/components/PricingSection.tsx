import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const prices = [
  { key: "pricing.trial", price: "CHF 25.00" },
  { key: "pricing.abo", price: "CHF 270.00" },
  { key: "pricing.single", price: "CHF 30.00" },
  { key: "pricing.private", price: "CHF 100.00 (60 min)" },
];

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="precios" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
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
          {prices.map((item, i) => (
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
    </section>
  );
};

export default PricingSection;
