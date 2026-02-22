import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesImage from "@/assets/services-yoga.jpg";
import classroomImage from "@/assets/yogaraum-luzern.webp";
import logoYogalehrer from "@/assets/logo-syv-yogalehrer.jpg";
import logoMitglied from "@/assets/logo-syv-mitglied.jpg";
import logoQualicert from "@/assets/logo-qualicert.png";

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="clases" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        {/* Block 1: Image left + text right — equal 50/50 columns, matched height */}
        <div className="grid md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden">

            <img
              src={servicesImage}
              alt="Ofrenda floral de yoga"
              className="w-full h-full object-cover" />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">

            <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify">
              {t("classes.title_1")} {t("classes.title_2")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify mt-3">
              {t("classes.p1")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify mt-3">
              {t("classes.p2")}
            </p>
          </motion.div>
        </div>

        {/* Block 2: Mis Clases — text left, image right */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center p-8 order-2 md:order-1">

            <h2 className="font-display text-2xl uppercase tracking-wide font-normal text-primary mb-6 text-left">
              {t("classes.label")}
            </h2>
            <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify">
              {t("classes.p3")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify mt-3">
              {t("classes.p3b")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed text-justify mt-3">
              {t("classes.p4")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden order-1 md:order-2">

            <img
              src={classroomImage}
              alt="Salón de yoga"
              className="w-full h-auto object-contain" />

          </motion.div>
        </div>

        {/* Block 3: Two-column — Pricing+Location left, Cert+Logos right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20 grid md:grid-cols-2 gap-8 items-stretch">

          {/* Left column: Tu inversión + Lugar */}
          <div className="p-6 flex flex-col justify-center">
            <p className="font-body text-sm text-primary font-semibold mb-4">
              {t("pricing.title")}
            </p>
            {[
            { key: "pricing.trial", price: "CHF 25.00" },
            { key: "pricing.single", price: "CHF 30.00" },
            { key: "pricing.private", price: "CHF 100.00 (60 min)" }].
            map((item, i) =>
            <div
              key={i}
              className="flex items-baseline justify-between py-2">

                <p className="font-body text-sm text-foreground/80">{t(item.key)}</p>
                <p className="font-body text-sm text-foreground font-medium ml-4 whitespace-nowrap">{item.price}</p>
              </div>
            )}

            <div className="mt-8">
              <p className="font-body text-sm text-foreground/75 leading-relaxed whitespace-pre-line">
                {t("about.location")}
              </p>
            </div>
          </div>

          {/* Right column: Cert text + logos */}
          <div className="p-6 flex flex-col justify-center">
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-6">
              {t("about.cert_text_p1")}<a href="https://www.swissyoga.ch" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80">www.swissyoga.ch</a>{t("about.cert_text_p2")}<a href="https://www.qualicert.ch" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80">www.qualicert.ch</a>{t("about.cert_text_p3")}
            </p>
            <div className="flex items-center gap-6">
              <img src={logoQualicert} alt="QualiCert" className="h-16 w-auto object-contain" />
              <img src={logoMitglied} alt="Schweizer Yogaverband - Mitglied" className="h-16 w-auto object-contain" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default ServicesSection;