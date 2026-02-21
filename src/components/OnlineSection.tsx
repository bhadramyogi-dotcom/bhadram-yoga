import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ebookMockup from "@/assets/ebook-mockup.png";

const OnlineSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="online" className="py-20 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-12">
          {lang === "de" ? "Online-Präsenz" : "Presencia online"}
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Block 1: Insight Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              style={{ borderRadius: "16px" }}
              width="100%"
              height="350px"
              title="Insight Timer Embed: Bhadram Yoga"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              src="https://widgets.insighttimer.com/publisher/yA4XNi51VYW6ho8AoluE2QwA1KC2?created_at=1771669321&cid=yA4XNi51VYW6ho8AoluE2QwA1KC2"
            />
          </motion.div>

          {/* Block 2: Payhip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col items-center gap-6">
              <img
                src={ebookMockup}
                alt="eBook Bhadram Yoga"
                className="w-full max-w-xs object-cover"
              />
              <p className="font-body text-sm text-foreground/75 leading-relaxed text-center">
                {lang === "de" ? "Verfügbar auf Spanisch und Deutsch" : "Disponibles en español y alemán"}
              </p>
              <a
                href="https://payhip.com/BhadramYoga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit font-body text-xs tracking-wider uppercase border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {t("online.products_cta")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OnlineSection;
