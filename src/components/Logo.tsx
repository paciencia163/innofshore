import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import logo from "@/assets/logo-inn-offshore.png";

type LogoProps = {
  /** "nav" = navbar (responsive sm/md/lg), "footer" = footer (slightly larger). */
  variant?: "nav" | "footer";
  /** Whether to show the wordmark + tagline next to the mark. */
  showWordmark?: boolean;
  /** Wrap in a link to "/" (default true). */
  asLink?: boolean;
  className?: string;
};

export const Logo = ({
  variant = "nav",
  showWordmark = true,
  asLink = true,
  className,
}: LogoProps) => {
  const { t } = useI18n();

  // Standardized responsive sizing — never overflows the navbar/footer.
  const markSize =
    variant === "footer"
      ? "h-12 w-12 md:h-14 md:w-14"
      : "h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11";

  const titleSize = variant === "footer" ? "text-lg md:text-xl" : "text-sm sm:text-base";

  const content = (
    <div className={cn("flex items-center gap-3 min-w-0", className)}>
      <img
        src={logo}
        alt="INN Offshore"
        loading="eager"
        className={cn(
          "shrink-0 object-contain bg-sand-light rounded-full p-1",
          markSize
        )}
      />
      {showWordmark && (
        <div className="font-display font-bold tracking-tight leading-none text-primary-foreground min-w-0">
          <div className={cn("truncate", titleSize)}>INN OFFSHORE</div>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mt-1 truncate">
            {t("nav.tagline")}
          </div>
        </div>
      )}
    </div>
  );

  if (!asLink) return content;

  return (
    <Link to="/" aria-label="INN Offshore — Home" className="flex items-center min-w-0">
      {content}
    </Link>
  );
};
