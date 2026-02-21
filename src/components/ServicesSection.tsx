import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesImage from "@/assets/services-yoga.jpg";
import classroomImage from "@/assets/yoga-classroom.webp";
import logoYogalehrer from "@/assets/logo-syv-yogalehrer.jpg";
import logoMitglied from "@/assets/logo-syv-mitglied.jpg";
import logoQualicert from "@/assets/logo-qualicert.png";

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="clases" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        {/* Block 1: Image left + text right — heights matched */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden"
          >
            <img
              src={servicesImage}
              alt="Ofrenda floral de yoga"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col"
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

        {/* Block 2: Mis Clases — title top, then text left + image right */}
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

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden"
            >
              <img
                src={classroomImage}
                alt="Salón de yoga"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Block 3: Investment + Location (2 cols), then Cert row below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Col 1: Tu inversión */}
            <div>
              <p className="font-body text-sm text-foreground font-semibold mb-4">
                {t("pricing.title")}
              </p>
              {[
                { key: "pricing.trial", price: "CHF 25.00" },
                { key: "pricing.single", price: "CHF 30.00" },
                { key: "pricing.private", price: "CHF 100.00 (60 min)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between py-2 border-b border-border last:border-b-0"
                >
                  <p className="font-body text-sm text-foreground/80">{t(item.key)}</p>
                  <p className="font-body text-sm text-foreground font-medium ml-4 whitespace-nowrap">{item.price}</p>
                </div>
              ))}
            </div>

            {/* Col 2: Lugar */}
            <div>
              <p className="font-body text-xs font-semibold text-primary tracking-wider mb-2">
                {t("about.location_label")}
              </p>
              <p className="font-body text-sm text-foreground/75 leading-relaxed whitespace-pre-line">
                {t("about.location")}
              </p>
            </div>
          </div>

          {/* Row below: Seguro médico + logos */}
          <div className="mt-10 border-t border-border pt-8">
            <p className="font-body text-xs font-semibold text-primary tracking-wider mb-3">
              {t("about.cert_label")}
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed mb-4">
              {t("about.cert_text")}
            </p>
            <div className="flex items-center gap-6">
              <img src={logoYogalehrer} alt="Schweizer Yogaverband - dipl. Yogalehrer/in SYV" className="h-16 w-16 object-contain" />
              <img src={logoMitglied} alt="Schweizer Yogaverband - Mitglied" className="h-16 w-16 object-contain" />
              <img src={logoQualicert} alt="QualiCert" className="h-16 w-16 object-contain" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
