import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 font-body text-sm text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-semibold text-foreground mb-2">1. Allgemeines</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. In dieser
              Datenschutzerklärung informiere ich Sie über die Verarbeitung personenbezogener
              Daten bei der Nutzung meiner Webseite.
            </p>
            <p className="mt-2">
              Verantwortlich für die Datenverarbeitung ist: Ivana C. Gasser, Vorderstockli 12,
              6390 Engelberg, Schweiz –{" "}
              <a
                href="mailto:ivana.gasser@gmx.ch"
                className="underline text-primary hover:text-primary/80"
              >
                ivana.gasser@gmx.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground mb-2">2. Erhebung und Verarbeitung von Daten</h2>
            <p>
              Beim Besuch dieser Webseite werden automatisch technische Daten erfasst, die Ihr
              Browser an den Server übermittelt (sog. Server-Logfiles). Dazu gehören unter anderem:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-2">
              Diese Daten werden ausschliesslich zur Sicherstellung eines störungsfreien Betriebs
              der Webseite und zur Verbesserung des Angebots verwendet. Eine Zusammenführung
              dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground mb-2">3. Cookies</h2>
            <p>
              Diese Webseite verwendet ausschliesslich technisch notwendige Cookies, die für den
              Betrieb der Webseite erforderlich sind (z. B. zur Speicherung Ihrer Cookie-Einwilligung).
              Es werden keine Tracking- oder Analyse-Cookies eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground mb-2">4. Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer
              Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground mb-2">5. Externe Links</h2>
            <p>
              Diese Webseite enthält Links zu externen Webseiten (z. B. Instagram, Facebook,
              SwissYoga, QualiCert). Für den Datenschutz auf diesen Seiten ist der jeweilige
              Anbieter verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground mb-2">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten. Für die Ausübung Ihrer Rechte
              kontaktieren Sie mich bitte unter{" "}
              <a
                href="mailto:ivana.gasser@gmx.ch"
                className="underline text-primary hover:text-primary/80"
              >
                ivana.gasser@gmx.ch
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground mb-2">7. Änderungen</h2>
            <p>
              Diese Datenschutzerklärung kann jederzeit angepasst werden. Die aktuelle Version
              ist auf dieser Webseite einsehbar.
            </p>
            <p className="mt-2 text-muted-foreground">Stand: Februar 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
