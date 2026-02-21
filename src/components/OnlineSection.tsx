import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ebookMockup from "@/assets/ebook-mockup.jpg";

const OnlineSection = () => {
  const { t } = useLanguage();

  return (
    <section id="online" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        {/* Block 1: Insight Timer widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <iframe
            style={{ borderRadius: "16px" }}
            width="100%"
            height="455px"
            title="Insight Timer Embed: Bhadram Yoga"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            src="https://widgets.insighttimer.com/publisher/yA4XNi51VYW6ho8AoluE2QwA1KC2?created_at=1771669321&cid=yA4XNi51VYW6ho8AoluE2QwA1KC2"
          />
        </motion.div>

        {/* Block 2: Digital products */}
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-8"
          >
            {t("online.products_title")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Ebook mockup */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={ebookMockup}
                alt={t("online.products_title")}
                className="w-full max-w-sm mx-auto object-cover"
              />
            </motion.div>

            {/* Text + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify">
                {t("online.products_desc")}
              </p>
              <a
                href="https://payhip.com/BhadramYoga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit font-body text-xs tracking-wider uppercase border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {t("online.products_cta")}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineSection;
