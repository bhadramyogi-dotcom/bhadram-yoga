import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          {t("footer.rights")}
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/impressum"
            className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
