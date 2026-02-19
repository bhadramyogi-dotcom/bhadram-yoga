import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          {t("footer.rights")}
        </p>
        <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
          {t("footer.impressum")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
