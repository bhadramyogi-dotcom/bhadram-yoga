import { motion } from "framer-motion";
import { Mail, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoYogalehrer from "@/assets/logo-syv-yogalehrer.jpg";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="section-title mb-8">
            {t("contact.title")}
          </h2>

          <p className="font-body text-base text-foreground mb-1">Ivana Gasser</p>
          <p className="font-body text-xs text-muted-foreground mb-1 tracking-wider">
            {t("contact.role")}
          </p>
          <p className="font-body text-xs text-muted-foreground mb-4 tracking-wider">
            {t("contact.member")}
          </p>
          <img src={logoYogalehrer} alt="Schweizer Yogaverband - Yogalehrerin" className="h-16 w-auto object-contain mx-auto mb-8" />
          <p className="font-body text-sm text-foreground/75 mb-8">
            {t("contact.question")}
          </p>

          <a
            href="mailto:ivana.gasser@gmx.ch"
            className="font-body text-sm text-foreground hover:text-primary transition-colors"
          >
            ivana.gasser@gmx.ch
          </a>

          {/* Social */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <a
              href="https://www.facebook.com/bhadram.yoga.37/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/bhadram.yoga/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:ivana.gasser@gmx.ch"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
