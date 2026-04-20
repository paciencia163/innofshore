import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

export const About = () => {
  const { t } = useI18n();
  const values = [
    { n: "01", t: t("about.v1.t"), d: t("about.v1.d") },
    { n: "02", t: t("about.v2.t"), d: t("about.v2.d") },
    { n: "03", t: t("about.v3.t"), d: t("about.v3.d") },
    { n: "04", t: t("about.v4.t"), d: t("about.v4.d") },
  ];

  return (
    <section id="about" className="relative bg-background py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
                {t("about.eyebrow")}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] text-balance">
              {t("about.title1")}
              <br />
              <span className="italic font-light">{t("about.title2")}</span>
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">{t("about.p1")}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t("about.p2")}</p>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-background p-8 lg:p-10 group hover:bg-foam transition-colors"
              >
                <div className="font-display text-accent text-sm font-bold tracking-widest">{v.n}</div>
                <h3 className="font-display text-2xl font-bold text-primary mt-4">{v.t}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed text-sm">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
