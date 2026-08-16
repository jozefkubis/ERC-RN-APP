import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Špeciálne prostredie",
    title: "Zastavenie krvného obehu na výletnej lodi",
    description:
      "Okamžite využite palubné zdravotnícke zdroje a podľa polohy lode zapojte externú pomoc.",
    resourcesEyebrow: "Okamžite",
    resourcesTitle: "Využite všetky palubné zdroje",
    resourcesDescription:
      "Zapojte dostupný zdravotnícky personál, vybavenie a organizáciu lode, aby sa ALS začal bez zdržania.",
    helpTitle: "Aktivujte pomoc",
    helpItems: [
      "Okamžite využite všetky zdravotnícke zdroje na palube vrátane personálu a vybavenia.",
      "Ak je zdravotníckych pracovníkov nedostatok, vyzvite ďalších prostredníctvom palubného hlásenia.",
      "Majte na palube dostupné všetko vybavenie potrebné pre ALS a okamžite prineste AED.",
    ],
    supportTitle: "Externá podpora",
    supportItems: [
      "Ak ste blízko pobrežia, aktivujte vrtuľníkovú záchrannú zdravotnú službu.",
      "Zvážte skorú telemedicínsku podporu.",
      "Na prekonanie veľkej vzdialenosti k zdravotníckemu zariadeniu zvážte kvalifikovaný letecký zdravotnícky transport.",
    ],
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription: "Použiť všeobecný algoritmus rozšírenej resuscitácie",
  },
  en: {
    badge: "Special setting",
    title: "Cardiac arrest on a cruise ship",
    description:
      "Immediately use the healthcare resources on board and activate external support according to the ship's location.",
    resourcesEyebrow: "Immediately",
    resourcesTitle: "Use all resources on board",
    resourcesDescription:
      "Use the available healthcare personnel, equipment and ship organisation so that ALS starts without delay.",
    helpTitle: "Activate help",
    helpItems: [
      "Immediately use all healthcare resources on board, including personnel and equipment.",
      "If there are too few healthcare professionals, request further medical help through an on-board announcement.",
      "Keep all equipment required for ALS readily available on board and request an AED immediately.",
    ],
    supportTitle: "External support",
    supportItems: [
      "Activate helicopter emergency medical services if close to the coastline.",
      "Consider early telemedicine support.",
      "Consider qualified medical air transport for long distances to a healthcare facility.",
    ],
    alsTitle: "Open adult ALS",
    alsDescription: "Use the general advanced life support algorithm",
  },
};

export default function Step1() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
        urgent
      />

      <HeroCard
        eyebrow={text.resourcesEyebrow}
        title={text.resourcesTitle}
        description={text.resourcesDescription}
        iconName="boat"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.helpTitle}
        iconName="people-outline"
        tone="danger"
        items={text.helpItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.supportTitle}
        iconName="call-outline"
        tone="info"
        items={text.supportItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.alsTitle}
        description={text.alsDescription}
        iconName="pulse-outline"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
