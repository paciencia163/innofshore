import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { useI18n } from "@/i18n/I18nProvider";

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t } = useI18n();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-abyss-deep pt-24">
        <img
          src={service.img}
          alt={t(service.titleKey)}
          width={1280}
          height={960}
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative container pb-16 md:pb-24">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("svcPage.back")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-accent text-sm font-bold tracking-widest">{service.number}</span>
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
                {t("svcPage.eyebrow")}
              </span>
            </div>

            <h1 className="font-display text-primary-foreground text-balance text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
              {t(service.titleKey)}
            </h1>
            <p className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              {t(service.descKey)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">01</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight">
              {t("svcPage.overviewTitle")}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-foreground text-lg md:text-xl leading-relaxed font-light">
              {t(service.longKey)}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-foam border-y border-border">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">02</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight">
                {t("svcPage.capabilitiesTitle")}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {service.capKeys.map((k, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-foam p-8 flex gap-4"
              >
                <Check className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span className="text-foreground leading-relaxed">{t(k)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-abyss-deep text-primary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">03</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                {t("svcPage.processTitle")}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.procKeys.map((k, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t-2 border-accent pt-6"
              >
                <div className="font-display text-5xl font-bold text-accent leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 text-primary-foreground/80 leading-relaxed">{t(k)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="bg-accent text-accent-foreground p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center shadow-flame">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                {t("svcPage.ctaTitle")}
              </h2>
              <p className="mt-4 text-accent-foreground/90 max-w-md">{t("svcPage.ctaDesc")}</p>
            </div>
            <div className="md:justify-self-end">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 bg-abyss-deep text-primary-foreground px-8 py-4 font-medium hover:bg-abyss transition-colors group"
              >
                {t("svcPage.ctaBtn")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="pb-24 bg-background">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              {t("svcPage.relatedTitle")}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/servicos/${s.slug}`}
                className="group bg-background p-8 hover:bg-foam transition-colors"
              >
                <div className="font-display text-accent text-sm font-bold tracking-widest">{s.number}</div>
                <h3 className="font-display text-2xl font-bold text-primary mt-3">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{t(s.descKey)}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-widest text-accent">
                  {t("services.learnMore")}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
