import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.classes"), href: "#clases" },
    { label: t("nav.about"), href: "#sobre-mi" },
    { label: t("nav.pricing"), href: "#precios" },
    { label: t("nav.contact"), href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col items-center">
        {/* Logo */}
        <div className="flex w-full items-start justify-between mb-4">
          <div className="flex-1" />
          <a href="#inicio" className="flex-1 flex flex-col items-center">
            {/* Lotus SVG icon */}
            <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
              <ellipse cx="24" cy="28" rx="8" ry="5" fill="hsl(var(--gold))" opacity="0.3"/>
              <path d="M24 28 C20 20 12 18 10 10 C14 14 18 16 24 12 C30 16 34 14 38 10 C36 18 28 20 24 28Z" fill="hsl(30,60%,45%)"/>
              <path d="M24 28 C22 18 16 14 16 6 C18 10 20 14 24 12 C28 14 30 10 32 6 C32 14 26 18 24 28Z" fill="hsl(30,70%,55%)"/>
              <circle cx="24" cy="11" r="3" fill="hsl(30,70%,60%)"/>
            </svg>
            <span className="font-display text-2xl font-semibold tracking-[0.2em] text-foreground uppercase">
              BHADRAM
            </span>
            <span className="font-display text-sm tracking-[0.4em] text-foreground uppercase font-light">
              YOGA
            </span>
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
