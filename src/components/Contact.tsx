import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/i18n/I18nProvider";
import { services } from "@/data/services";

export const Contact = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: t("contact.toast.t"), description: t("contact.toast.d") });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative bg-abyss-deep text-primary-foreground py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="container relative grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">{t("contact.eyebrow")}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
            {t("contact.title1")}
            <br />
            <span className="italic font-light text-accent">{t("contact.title2")}</span>
          </h2>
          <p className="mt-6 text-primary-foreground/70 text-lg max-w-md leading-relaxed">{t("contact.desc")}</p>

          <div className="mt-12 space-y-6">
            {[
              { Icon: MapPin, t: "Luanda, Angola", s: t("contact.location") },
              { Icon: Mail, t: "geral@inn-offshore.co.ao", s: t("contact.email.s") },
              { Icon: Phone, t: "+244 000 000 000", s: t("contact.phone.s") },
            ].map(({ Icon, t: title, s }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="h-11 w-11 grid place-items-center bg-accent/10 border border-accent/30 text-accent shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{title}</div>
                  <div className="text-sm text-primary-foreground/60">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-primary-foreground/[0.03] border border-primary-foreground/10 p-8 md:p-10 backdrop-blur"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label={t("contact.f.name")} name="name" required />
            <Field label={t("contact.f.company")} name="company" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <Field label={t("contact.f.email")} name="email" type="email" required />
            <Field label={t("contact.f.phone")} name="phone" />
          </div>
          <div className="mt-5">
            <label className="text-xs uppercase tracking-widest text-primary-foreground/60 font-medium">
              {t("contact.f.service")}
            </label>
            <select
              name="service"
              className="mt-2 w-full bg-transparent border-b border-primary-foreground/20 py-3 focus:border-accent outline-none transition-colors text-primary-foreground"
            >
              {services.map((s) => (
                <option key={s.slug} className="text-foreground">{t(s.titleKey)}</option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <label className="text-xs uppercase tracking-widest text-primary-foreground/60 font-medium">
              {t("contact.f.message")}
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-2 w-full bg-transparent border-b border-primary-foreground/20 py-3 focus:border-accent outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-7 py-4 font-medium hover:bg-accent-glow transition-all shadow-flame disabled:opacity-60"
          >
            {sending ? t("contact.f.sending") : t("contact.f.send")}
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="text-xs uppercase tracking-widest text-primary-foreground/60 font-medium">
      {label}
      {required && <span className="text-accent"> *</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="mt-2 w-full bg-transparent border-b border-primary-foreground/20 py-3 focus:border-accent outline-none transition-colors text-primary-foreground"
    />
  </div>
);
