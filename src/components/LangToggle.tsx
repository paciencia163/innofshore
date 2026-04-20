import { useI18n } from "@/i18n/I18nProvider";
import { Lang } from "@/i18n/translations";

export const LangToggle = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const { lang, setLang } = useI18n();
  const langs: Lang[] = ["pt", "en"];
  const isDark = variant === "dark";

  return (
    <div className={`inline-flex items-center text-xs font-medium ${isDark ? "text-primary-foreground/60" : "text-foreground/60"}`}>
      {langs.map((l, i) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => setLang(l)}
            className={`uppercase tracking-wider transition-colors px-1 ${
              lang === l
                ? "text-accent"
                : isDark
                ? "hover:text-primary-foreground"
                : "hover:text-foreground"
            }`}
            aria-label={`Switch to ${l.toUpperCase()}`}
          >
            {l}
          </button>
          {i === 0 && <span className="opacity-40">/</span>}
        </span>
      ))}
    </div>
  );
};
