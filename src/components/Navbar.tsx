import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import { LangToggle } from "./LangToggle";
import { Logo } from "./Logo";

export const Navbar = () => {
  const { t } = useI18n();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";

  const links = [
    { label: t("nav.home"), href: "/#top", anchor: "#top" },
    { label: t("nav.about"), href: "/#about", anchor: "#about" },
    { label: t("nav.services"), href: "/#services", anchor: "#services" },
    { label: t("nav.fleet"), href: "/#fleet", anchor: "#fleet" },
    { label: t("nav.contact"), href: "/#contact", anchor: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Force "scrolled" appearance on inner pages
  const compact = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        compact
          ? "bg-abyss-deep/85 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        <Logo variant="nav" />

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <LangToggle />
          <a
            href="/#contact"
            className="px-5 py-2.5 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent-glow transition-colors"
          >
            {t("nav.cta")}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-abyss-deep border-t border-white/5">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/80 hover:text-accent text-lg font-display"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2"><LangToggle /></div>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 text-sm font-medium bg-accent text-accent-foreground text-center"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
