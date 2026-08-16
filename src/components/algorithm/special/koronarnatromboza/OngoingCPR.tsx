import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Bez trvalého ROSC",
    title: "Transport počas prebiehajúcej KPR",
    description:
      "Ak sa pokračovanie resuscitácie nepovažuje za márne, smerujte pacienta do centra schopného poskytnúť ďalšiu invazívnu alebo extrakorporálnu liečbu.",
    transportEyebrow: "Prebiehajúca resuscitácia",
    transportTitle: "Transportujte do PKI centra",
    transportDescription:
      "Transportujte pacienta bez trvalého ROSC s prebiehajúcou KPR, pokiaľ sa pokračovanie resuscitácie nepovažuje za márne.",
    considerTitle: "V centre zvážte",
    considerItems: [
      "Koronárnu angiografiu.",
      "eKPR podľa dostupných zdrojov a odbornosti tímu.",
    ],
  },
  en: {
    badge: "Without sustained ROSC",
    title: "Transport during ongoing CPR",
    description:
      "Unless ongoing resuscitation is considered futile, transfer the patient to a centre capable of providing further invasive or extracorporeal treatment.",
    transportEyebrow: "Ongoing resuscitation",
    transportTitle: "Transfer to a PCI centre",
    transportDescription:
      "Transfer the patient without sustained ROSC with ongoing CPR unless continued resuscitation is considered futile.",
    considerTitle: "At the centre, consider",
    considerItems: [
      "Coronary angiography.",
      "ECPR depending on available resources and team expertise.",
    ],
  },
};

export default function OngoingCPR() {
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
        eyebrow={text.transportEyebrow}
        title={text.transportTitle}
        description={text.transportDescription}
        iconName="navigate"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.considerTitle}
        iconName="medkit-outline"
        tone="info"
        items={text.considerItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
