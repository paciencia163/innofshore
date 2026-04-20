import { useI18n } from "@/i18n/I18nProvider";
import { TranslationKey } from "@/i18n/translations";

export const Marquee = () => {
  const { t } = useI18n();
  const keys: TranslationKey[] = ["mq.1", "mq.2", "mq.3", "mq.4", "mq.5", "mq.6", "mq.7", "mq.8"];
  const items = keys.map((k) => t(k));
  const doubled = [...items, ...items];

  return (
    <div className="bg-accent text-accent-foreground py-6 overflow-hidden border-y-2 border-accent-foreground/10">
      <div className="flex gap-12 marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-2xl md:text-4xl font-bold uppercase tracking-tight">
            <span>{item}</span>
            <span className="text-accent-foreground/40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
