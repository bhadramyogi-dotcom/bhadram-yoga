import { motion } from "framer-motion";
import { Check, MapPin, Shield } from "lucide-react";

const prices = [
  { name: "Clase de Prueba", price: "CHF 25", detail: "Primera clase" },
  { name: "Clase Individual", price: "CHF 30", detail: "Por sesión" },
  { name: "10 Clases Abo", price: "CHF 270", detail: "4 meses de validez", popular: true },
  { name: "Clase Privada", price: "CHF 100", detail: "60 minutos" },
];

const PricingSection = () => {
  return (
    <section id="precios" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Cursos & Precios
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
            Tu <span className="italic">inversión</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {prices.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-2xl p-8 text-center transition-shadow duration-500 hover:shadow-lg ${
                item.popular
                  ? "bg-primary text-primary-foreground ring-2 ring-primary"
                  : "bg-card"
              }`}
            >
              <p className={`font-body text-sm mb-2 ${item.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {item.detail}
              </p>
              <p className="font-display text-3xl font-medium mb-2">{item.price}</p>
              <p className={`font-body text-sm font-medium ${item.popular ? "text-primary-foreground" : "text-foreground"}`}>
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location & certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="flex items-start gap-4 bg-card rounded-2xl p-6">
            <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <p className="font-display text-lg text-foreground mb-1">Yogaraum Luzern</p>
              <p className="font-body text-sm text-muted-foreground">Dufourstrasse 20a, 6003 Luzern</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card rounded-2xl p-6">
            <Shield className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <p className="font-display text-lg text-foreground mb-1">Seguro Médico & QualiCert</p>
              <p className="font-body text-sm text-muted-foreground">
                Registrada en la Asociación Suiza de Yoga{" "}
                <a href="https://www.swissyoga.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SYV</a>{" "}
                y en{" "}
                <a href="https://www.qualicert.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">QualiCert</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
