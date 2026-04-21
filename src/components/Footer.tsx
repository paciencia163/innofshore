import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nProvider";
import { services } from "@/data/services";
import { Logo } from "./Logo";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-abyss-deep text-primary-foreground/70 border-t border-primary-foreground/10">
      <div className="container py-12 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo variant="footer" asLink={false} />
          <p className="text-sm mt-4 max-w-sm leading-relaxed">{t("footer.tagline")}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-accent font-medium mb-4">{t("footer.services")}</div>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/servicos/${s.slug}`} className="hover:text-accent transition-colors">
                  {t(s.titleKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-accent font-medium mb-4">{t("footer.company")}</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/#about" className="hover:text-accent transition-colors">{t("nav.about")}</a></li>
            <li><a href="/#services" className="hover:text-accent transition-colors">{t("nav.services")}</a></li>
            <li><a href="/#contact" className="hover:text-accent transition-colors">{t("nav.contact")}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} INN OFFSHORE, Lda · Luanda, Angola</span>
          <span>{t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
};
