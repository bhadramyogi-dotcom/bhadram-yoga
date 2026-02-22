import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ivanaImage from "@/assets/ivana-nature.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-20 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden sticky top-20">

            <img
              src={ivanaImage}
              alt="Ivana Gasser"
              className="w-full h-auto object-contain" />

          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">

            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide font-normal text-primary mb-8">
              {t("about.label")}
            </h2>
            {["about.p1","about.p2","about.p3","about.p4","about.p5","about.p6","about.p7","about.p8","about.p9","about.p10"].map((key, i, arr) => (
              <p key={key} className={`font-body text-sm text-foreground/75 leading-relaxed text-justify ${i < arr.length - 1 ? "mb-3" : ""}`}>
                {t(key)}
              </p>
            ))}
          </motion.div>
        </div>

      </div>
    </section>);

};

export default AboutSection;