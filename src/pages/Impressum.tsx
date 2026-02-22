import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <h1 className="font-display text-2xl tracking-wider uppercase text-primary mb-10">
          Impressum
        </h1>

        <div className="space-y-6 font-body text-sm text-foreground/80 leading-relaxed">
          <div>
            <p className="font-semibold text-foreground mb-1">Verantwortlich für den Inhalt:</p>
            <p>Ivana C. Gasser</p>
            <p>Vorderstockli 12</p>
            <p>6390 Engelberg</p>
            <p>Schweiz</p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Kontakt:</p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:ivana.gasser@gmx.ch"
                className="underline text-primary hover:text-primary/80"
              >
                ivana.gasser@gmx.ch
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Haftungsausschluss:</p>
            <p>
              Die Inhalte dieser Webseite wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Haftung für Links:</p>
            <p>
              Diese Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein
              Einfluss genommen werden kann. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber verantwortlich.
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Urheberrecht:</p>
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Webseite
              unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung der Autorin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
