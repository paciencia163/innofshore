import bunkering from "@/assets/service-bunkering.jpg";
import shipping from "@/assets/service-shipping.jpg";
import fuel from "@/assets/service-fuel.jpg";
import cabotage from "@/assets/service-cabotage.jpg";
import { TranslationKey } from "@/i18n/translations";

export type ServiceConfig = {
  slug: string;
  number: string;
  img: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  longKey: TranslationKey;
  capKeys: TranslationKey[];
  procKeys: TranslationKey[];
};

export const services: ServiceConfig[] = [
  {
    slug: "bunkering",
    number: "01",
    img: bunkering,
    titleKey: "svc.bunkering.title",
    descKey: "svc.bunkering.desc",
    longKey: "bunkering.long",
    capKeys: ["bunkering.cap1", "bunkering.cap2", "bunkering.cap3", "bunkering.cap4", "bunkering.cap5", "bunkering.cap6"],
    procKeys: ["bunkering.proc1", "bunkering.proc2", "bunkering.proc3", "bunkering.proc4"],
  },
  {
    slug: "fornecimento-de-navios",
    number: "02",
    img: shipping,
    titleKey: "svc.shipping.title",
    descKey: "svc.shipping.desc",
    longKey: "shipping.long",
    capKeys: ["shipping.cap1", "shipping.cap2", "shipping.cap3", "shipping.cap4", "shipping.cap5", "shipping.cap6"],
    procKeys: ["shipping.proc1", "shipping.proc2", "shipping.proc3", "shipping.proc4"],
  },
  {
    slug: "combustiveis",
    number: "03",
    img: fuel,
    titleKey: "svc.fuel.title",
    descKey: "svc.fuel.desc",
    longKey: "fuel.long",
    capKeys: ["fuel.cap1", "fuel.cap2", "fuel.cap3", "fuel.cap4", "fuel.cap5", "fuel.cap6"],
    procKeys: ["fuel.proc1", "fuel.proc2", "fuel.proc3", "fuel.proc4"],
  },
  {
    slug: "cabotagem",
    number: "04",
    img: cabotage,
    titleKey: "svc.cabotage.title",
    descKey: "svc.cabotage.desc",
    longKey: "cabotage.long",
    capKeys: ["cabotage.cap1", "cabotage.cap2", "cabotage.cap3", "cabotage.cap4", "cabotage.cap5", "cabotage.cap6"],
    procKeys: ["cabotage.proc1", "cabotage.proc2", "cabotage.proc3", "cabotage.proc4"],
  },
  {
    slug: "shipchandler",
    number: "05",
    img: bunkering,
    titleKey: "svc.shipchandler.title",
    descKey: "svc.shipchandler.desc",
    longKey: "shipchandler.long",
    capKeys: ["shipchandler.cap1", "shipchandler.cap2", "shipchandler.cap3", "shipchandler.cap4", "shipchandler.cap5", "shipchandler.cap6"],
    procKeys: ["shipchandler.proc1", "shipchandler.proc2", "shipchandler.proc3", "shipchandler.proc4"],
  },
];
