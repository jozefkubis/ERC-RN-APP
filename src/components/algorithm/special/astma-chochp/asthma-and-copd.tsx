import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Špeciálna skupina pacientov",
    title: "Astma a chronická obštrukčná choroba pľúc",
    description:
      "Pri zastavení krvného obehu okamžite liečte hypoxiu a hľadajte reverzibilné príčiny.",
    oxygenEyebrow: "Bezodkladná priorita",
    oxygenTitle: "Podajte 100 % kyslík",
    oxygenDescription:
      "Liečte život ohrozujúcu hypoxiu a pokračujte podľa štandardného ALS algoritmu.",
    pneumothoraxTitle: "Vylúčte tenzný pneumotorax",
    pneumothoraxItems: [
      "Pátrajte po známkach tenzného pneumotoraxu a pri podozrení ho bezodkladne liečte.",
    ],
    hyperinflationTitle: "Znížte dynamickú hyperinfláciu",
    hyperinflationItems: [
      "Vykonajte tracheálnu intubáciu pre vysoké inflačné tlaky.",
      "Zvážte manuálnu dekompresiu hrudníka a dočasné odpojenie od ventilácie.",
    ],
    unsuccessfulTitle: "Ak úvodná resuscitácia nie je úspešná",
    unsuccessfulItems: ["Zvážte eKPR v súlade s miestnymi protokolmi."],
  },
  en: {
    badge: "Special patient group",
    title: "Asthma and chronic obstructive pulmonary disease",
    description:
      "During cardiac arrest, immediately treat hypoxia and look for reversible causes.",
    oxygenEyebrow: "Immediate priority",
    oxygenTitle: "Give 100% oxygen",
    oxygenDescription:
      "Treat life-threatening hypoxia and continue according to the standard ALS algorithm.",
    pneumothoraxTitle: "Exclude tension pneumothorax",
    pneumothoraxItems: [
      "Check for evidence of tension pneumothorax and treat it immediately if suspected.",
    ],
    hyperinflationTitle: "Reduce dynamic hyperinflation",
    hyperinflationItems: [
      "Provide endotracheal intubation because of high inflation pressures.",
      "Consider manual chest decompression and temporary disconnection from ventilation.",
    ],
    unsuccessfulTitle: "If initial resuscitation is unsuccessful",
    unsuccessfulItems: ["Consider ECPR in accordance with local protocols."],
  },
};

export default function AsthmaAndCopd() {
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
        eyebrow={text.oxygenEyebrow}
        title={text.oxygenTitle}
        description={text.oxygenDescription}
        iconName="medical-outline"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.pneumothoraxTitle}
        iconName="search-outline"
        tone="danger"
        items={text.pneumothoraxItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.hyperinflationTitle}
        iconName="fitness-outline"
        tone="warning"
        items={text.hyperinflationItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.unsuccessfulTitle}
        iconName="heart-outline"
        tone="info"
        items={text.unsuccessfulItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
