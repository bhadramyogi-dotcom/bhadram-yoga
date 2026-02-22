import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground/95 text-background px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs leading-relaxed text-center sm:text-left">
          Diese Webseite verwendet nur technisch notwendige Cookies.{" "}
          <Link to="/datenschutz" className="underline hover:text-primary transition-colors">
            Mehr erfahren
          </Link>
        </p>
        <button
          onClick={handleAccept}
          className="font-body text-xs tracking-wider uppercase px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
