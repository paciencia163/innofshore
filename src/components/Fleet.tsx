import { motion } from "framer-motion";
import shipping from "@/assets/service-shipping.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Fleet = () => {
  const { t } = useI18n();
  return (
    <section id="fleet" className="relative bg-background py-24 md:py-32">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={shipping}
            alt="Operação portuária"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full aspect-[4/5] object-cover shadow-deep"
          />
          <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 md:p-8 max-w-xs shadow-flame">
            <div className="font-display text-4xl md:text-5xl font-bold leading-none">2011</div>
            <div className="text-xs uppercase tracking-widest mt-2 opacity-80">{t("fleet.badge")}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">{t("fleet.eyebrow")}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary leading-[1.05] text-balance">
            {t("fleet.title1")}
            <br />
            <span className="italic font-light">{t("fleet.title2")}</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{t("fleet.desc")}</p>

          <ul className="mt-8 space-y-4">
            {[t("fleet.li1"), t("fleet.li2"), t("fleet.li3"), t("fleet.li4")].map((line) => (
              <li key={line} className="flex gap-4 text-foreground">
                <span className="text-accent font-bold">→</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
