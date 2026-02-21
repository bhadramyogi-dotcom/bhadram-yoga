import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "de";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { es: "Inicio", de: "Startseite" },
  "nav.classes": { es: "Mis Clases", de: "Meine Yogastunden" },
  "nav.online": { es: "Online", de: "Online" },
  "nav.about": { es: "Sobre Mí", de: "Über mich" },
  "nav.contact": { es: "Contacto", de: "Kontakt" },

  // Hero
  "hero.tagline": {
    es: "Bhadram es una palabra en sánscrito que se refiere a prosperidad, alegría, buena fortuna, auspicio y bendición.",
    de: "Bhadram ist ein Sanskrit-Wort, das Freude, Glück, Wohlbefinden und Segen bedeutet.",
  },
  "hero.quote": {
    es: "«Conoce tu propia luz, esto te permitirá reconocer y ver toda la luz alrededor.»",
    de: "«Wenn du dein eigenes Licht kennst, kannst du das Licht um dich herum erkennen und sehen.»",
  },
  "hero.quote_author": { es: "Swami Rama", de: "Swami Rama" },
  "hero.cta": { es: "Descubre las clases", de: "Kurse entdecken" },

  // Classes section
  "classes.label": { es: "Mis Clases", de: "Meine Yogastunden" },
  "classes.title_1": { es: "Cuando reconoces tu propia luz,", de: "Durch das Erkennen des eigenen Lichts" },
  "classes.title_2": {
    es: "te aceptas a ti mismo y aceptas lo que es y sucede a tu alrededor. Esto te ayuda a vivir tu vida sin juzgarte ni juzgar a los demás.",
    de: "wirst du dich selbst besser kennenlernen und dein Umfeld so akzeptieren, wie es ist.",
  },
  "classes.p1": {
    es: "Con la práctica de yoga constante y humilde fluyes a través del movimiento y la respiración. Abres tu mente a la transformación que se va dando en ti para conectarte con tu luz interior.",
    de: "Das regelmässige Praktizieren von Yoga unterstützt dich auf deinem Weg. Du fühlst dich im Fluss von Bewegung und Atmung. Das ermöglicht dir, dein inneres Licht zu erkennen und dich mit diesem zu verbinden.",
  },
  "classes.p2": {
    es: "Logrando así vivir tu vida con armonía, llena de alegría, amor y abundancia.",
    de: "Du wirst ein harmonisches Leben voller Freude führen.",
  },
  "classes.p3": {
    es: "Quiero compartir lo que voy aprendiendo. Quiero mostrarte la seguridad que dá el reconocer tu propia luz, la alegría que se siente al encontrarse con la luz de otras personas y la paz que experimentas al aceptar que cada ser brilla a su manera.",
    de: "Es erfüllt mich mit Freude, mein Yoga-Wissen sowie meine Erfahrungen weiterzugeben.",
  },
  "classes.p4": {
    es: "Mis clases, que pueden ser en español o alemán, están centradas en ayudarte a conectar con tu cuerpo y respiración. Están influenciadas por Hatha Yoga clásico. Me gusta utilizar soportes, realizo ajustes y correcciones cuando son necesarias para ayudarte a construir las posturas corporales (asanas) con seguridad. Mis clases son para todos los que quieran probar, aprender y mejorar su práctica de yoga. Para mí lo más importante es que encuentres tu ritmo y que al seguirlo puedas fluir con calma.",
    de: "Meine Yoga-Kurse finden auf Spanisch oder Deutsch statt und basieren auf dem klassischen Hatha Yoga, das dir hilft, den Fluss von Körper und Atem zu spüren. Beim Erlernen der Körperstellungen (Asanas) gebe ich dir ein persönliches Feedback, damit du deine Haltungen verbessern kannst. Meine Kurse stehen all denjenigen offen, die Yoga ausprobieren, lernen oder verbessern möchten. Ganz ohne Zeitdruck lernst du die Körperstellungen und deren Ausführungen.",
  },

  // About
  "about.label": { es: "Sobre Mí", de: "Über mich" },
  "about.p1": {
    es: "Mi nombre es Ivana, vengo de la Patagonia Argentina. Soy una persona agradecida y afortunada. Vivo en el bellísimo Engelberg. Como amante de la naturaleza me gusta pasar mucho tiempo al aire libre. Soy una Trail runner y trekker en mi corazón.",
    de: "Ich heisse Ivana und komme aus Patagonien in Argentinien. Ich bin eine dankbare und glückliche Person und lebe seit vielen Jahren im schönen Engelberg. Als Naturliebhaberin verbringe ich gerne viel Zeit draussen in der Natur. Trailrunning und Trekking mag ich besonders.",
  },
  "about.p2": {
    es: "De profesión Farmacéutica, trabajé en el sector de la salud durante muchos años. En la actualidad, mi vocación y dedicación plena se centra en la enseñanza del yoga.",
    de: "Ich habe Pharmazie studiert und war während vielen Jahren im Gesundheitssektor tätig. Derzeit konzentriere ich mich voll und ganz auf das Unterrichten von Yoga.",
  },
  "about.p3": {
    es: "Mi primer contacto con el yoga fue hace más de veinte años en un Workshop que Indra Devi dió en Buenos Aires. Con ella aprendí distintas técnicas de respiración que todavía uso hoy en día.",
    de: "An einem Workshop der Yogalehrerin Indra Devi in Buenos Aires kam ich vor über zwanzig Jahren das erste Mal mit Yoga in Kontakt. Dort lernte ich Atemtechniken, die ich heute noch anwende.",
  },
  "about.p4": {
    es: "En el 2013 participé por primera vez en el Festival Internacional de Yoga en Rishikesh, India. Allí conocí a muchos maestros y yogis que me inspiraron a practicar distintos tipos de yoga. Un año más tarde visité diferentes Workshops de Gurmukh Kaur Kalsa. Con ella aprendí a movilizar mis energías, a percibir y observar conscientemente mis emociones.",
    de: "2013 nahm ich das erste Mal am Internationalen Yogafestival in Rishikesh, Indien teil. Dort traf ich für mich wegweisende Lehrer und Yogis, die mich dazu inspiriert haben, verschiedene Yoga-Arten zu praktizieren. Ein Jahr später besuchte ich verschiedene Workshops von Gurmukh Kaur Kalsa. Dabei lernte ich, meine Energien zu mobilisieren und meine Emotionen bewusst wahrzunehmen und zu beobachten.",
  },
  "about.p5": {
    es: "En la primavera del 2015 volví a Rishikesh y completé una formación (YTT 200) en Hatha Yoga con Surinder Singh (Swasti Yoga). La conexión en el ahora entre el cuerpo y la mente sincronizados con la respiración me ha fascinado durante muchos años. Para profundizar en mi conocimiento y práctica, completé la formación de cuatro años para convertirme en profesora diplomada de Yoga en la Universidad de Yoga de Villeret, Suiza. El camino de aprender y mejorar nunca termina.",
    de: "Im Frühjahr 2015 kehrte ich nach Rishikesh zurück und absolvierte bei Surinder Singh (Swasti-Yoga) eine Ausbildung (YTT 200) in Hatha Yoga. Die Verbindung von Körper und Geist und die Synchronisation mit dem Atem faszinieren mich seit vielen Jahren. Zur Vertiefung meines Wissens und meiner Praxis habe ich an der Yoga University Villeret in der Schweiz die vierjährige Ausbildung zur dipl. Yogalehrerin absolviert. Der Weg des Lernens und sich Verbesserns ist nie zu Ende.",
  },
  "about.location_label": { es: "Lugar:", de: "Wo:" },
  "about.location": { es: "Yogaraum Luzern\nDufourstrasse 20a\n6003 Luzern", de: "Yogaraum Luzern\nDufourstrasse 20a\n6003 Luzern" },
  "about.cert_label": { es: "Seguro Médico de Salud y QualiCert", de: "Krankenkasse und QualiCert" },
  "about.cert_text": {
    es: "Estoy en la lista de recomendados de la Asociación Suiza de Yoga SYV (www.swissyoga.ch) y registrada en QualiCert (www.qualicert.ch).",
    de: "Ich bin auf der Empfehlungsliste des Schweizer Yogaverbandes SYV (www.swissyoga.ch) und bei QualiCert registriert (www.qualicert.ch).",
  },
  "about.cert_text_p1": {
    es: "Estoy en la lista de recomendados de la Asociación Suiza de Yoga SYV (",
    de: "Ich bin auf der Empfehlungsliste des Schweizer Yogaverbandes SYV (",
  },
  "about.cert_text_p2": {
    es: ") y registrada en QualiCert (",
    de: ") und bei QualiCert registriert (",
  },

  // Pricing
  "pricing.label": { es: "Cursos & Precios", de: "Kursangebot" },
  "pricing.title": { es: "Tu inversión:", de: "Deine Investition:" },
  "pricing.trial": { es: "Clase de Prueba", de: "Schnupperstunde" },
  "pricing.single": { es: "Clase Individual", de: "Einzeleintritt" },
  "pricing.abo": { es: "10 Clases Abo (4 Meses de validez)", de: "10er Abonnement (4 Monate gültig)" },
  "pricing.private": { es: "Clase Privada", de: "Privatstunde" },

  // Online
  "online.products_title": { es: "Productos digitales", de: "Digitale Produkte" },
  "online.products_desc": {
    es: "Guías y prácticas para acompañarte a volver al cuerpo con calma y constancia.",
    de: "Anleitungen und Übungen, die dich dabei begleiten, mit Ruhe und Beständigkeit zu deinem Körper zurückzufinden.",
  },
  "online.products_cta": { es: "Ver productos", de: "Produkte ansehen" },

  // Contact
  "contact.label": { es: "Contacto", de: "Kontakt" },
  "contact.title": { es: "CONÉCTATE CONMIGO", de: "KONTAKT" },
  "contact.role": { es: "Profesora diplomada de Yoga SYV/EYU", de: "dipl. Yogalehrerin SYV/EYU" },
  "contact.member": { es: "Miembro de la Asociación Suiza de Yoga", de: "Mitglied des Schweizer Yogaverbandes" },
  "contact.question": {
    es: "¿Tienes preguntas o te gustaría registrarte para una lección de yoga?",
    de: "Hast du Fragen oder möchtest du dich für eine Yogastunde anmelden?",
  },
  "contact.cta": { es: "Reserva tu clase", de: "Kurs buchen" },

  // Footer
  "footer.rights": { es: "© Copyright by Ivana Gasser 2020", de: "© Copyright by Ivana Gasser 2020" },
  "footer.impressum": { es: "Impressum", de: "Impressum" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
