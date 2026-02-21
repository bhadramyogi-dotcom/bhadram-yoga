import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@/assets/logo-bhadram.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.classes"), href: "#clases" },
    { label: t("nav.online"), href: "#online" },
    { label: t("nav.about"), href: "#sobre-mi" },
    { label: t("nav.contact"), href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col items-center">
        {/* Logo */}
        <div className="flex w-full items-start justify-between mb-4">
          <div className="flex-1" />
          <a href="#inicio" className="flex-1 flex flex-col items-center">
            <img
              src={logoImg}
              alt="Bhadram Yoga"
              className="h-24 w-auto"
            />
          </a>
          {/* Language switcher */}
          <div className="flex-1 flex justify-end items-start gap-2 pt-1">
            <button
              onClick={() => setLang("es")}
              className={`font-body text-xs tracking-wider transition-colors ${lang === "es" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              ES
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setLang("de")}
              className={`font-body text-xs tracking-wider transition-colors ${lang === "de" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              DE
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-border mb-4" />

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-xs tracking-wider text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-6 top-5 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col items-center gap-5 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-xs tracking-wider text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
