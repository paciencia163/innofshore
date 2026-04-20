import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-platform.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Hero = () => {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-abyss-deep">
      <img
        src={heroImg}
        alt="Plataforma offshore ao amanhecer na costa de Angola"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
        <span className="text-[10px] tracking-[0.4em] uppercase text-primary-foreground/50 font-medium">
          Luanda · 8°50′S 13°14′E — Atlantic Ocean
        </span>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 items-end">
        {[t("svc.bunkering.title"), t("svc.shipchandler.title"), t("svc.cabotage.title"), t("svc.fuel.title")].map((s) => (
          <span key={s} className="text-xs text-primary-foreground/60 border-r-2 border-accent pr-3 font-medium">
            {s}
          </span>
        ))}
      </div>

      <div className="relative container pb-20 md:pb-28 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1 className="font-display text-primary-foreground text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-bold leading-[0.9]">
            {t("hero.title1")} <br />
            {t("hero.title2")} <span className="italic font-light text-accent">{t("hero.title3")}</span>.
          </h1>

          <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-3xl">
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
              {t("hero.desc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 font-medium hover:bg-accent-glow transition-all shadow-flame"
              >
                {t("hero.cta1")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-7 py-4 font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                {t("hero.cta2")}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-primary-foreground/10 pt-8"
        >
          {[
            { v: "13+", l: t("hero.stat1") },
            { v: "5", l: t("hero.stat2") },
            { v: "24/7", l: t("hero.stat3") },
            { v: "100%", l: t("hero.stat4") },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl text-accent font-bold">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
};
