import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { useI18n } from "@/i18n/I18nProvider";

export const Services = () => {
  const { t } = useI18n();

  return (
    <section id="services" className="relative bg-abyss-deep text-primary-foreground py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
                {t("services.eyebrow")}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
              {t("services.title1")}
              <br />
              <span className="italic font-light text-accent">{t("services.title2")}</span>
            </h2>
          </div>
          <p className="text-primary-foreground/70 max-w-md leading-relaxed">{t("services.intro")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <Link
                to={`/servicos/${s.slug}`}
                className="group relative bg-abyss-deep overflow-hidden aspect-[4/5] flex flex-col justify-between p-8 cursor-pointer h-full"
              >
                <img
                  src={s.img}
                  alt={t(s.titleKey)}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover opacity-20 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 gradient-fade opacity-90" />

                <div className="relative flex items-start justify-between">
                  <span className="font-display text-accent text-sm font-bold tracking-widest">{s.number}</span>
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground/60 group-hover:text-accent group-hover:rotate-12 transition-all" />
                </div>

                <div className="relative">
                  <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">{t(s.titleKey)}</h3>
                  <p className="text-primary-foreground/70 mt-3 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                    {t(s.descKey)}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {t("services.learnMore")} →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
