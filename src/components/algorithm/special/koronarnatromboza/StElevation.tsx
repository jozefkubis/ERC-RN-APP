import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "ROSC + ST elevácie",
    title: "Zabezpečte včasnú reperfúziu",
    description:
      "Pri ST eleváciách po trvalom ROSC postupujte cestou urgentnej koronarografie a podľa potreby PKI.",
    angiographyEyebrow: "Od stanovenia diagnózy",
    angiographyTitle: "Koronarografia do 120 minút",
    angiographyDescription:
      "Vykonajte koronarografiu a perkutánnu koronárnu intervenciu, ak je potrebná.",
    delayTitle: "Ak sa očakáva väčšie oneskorenie PKI",
    delayItems: [
      "V prednemocničnom prostredí alebo pri nedostupnosti PKI zvážte fibrinolýzu.",
    ],
  },
  en: {
    badge: "ROSC + ST-elevation",
    title: "Ensure timely reperfusion",
    description:
      "For ST-elevation after sustained ROSC, proceed with immediate coronary angiography and PCI if required.",
    angiographyEyebrow: "From diagnosis",
    angiographyTitle: "Coronary angiography within 120 minutes",
    angiographyDescription:
      "Perform coronary angiography and percutaneous coronary intervention if required.",
    delayTitle: "If a longer delay to PCI is expected",
    delayItems: [
      "Consider fibrinolysis in pre-hospital and non-PCI-capable settings.",
    ],
  },
};

export default function StElevation() {
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
        eyebrow={text.angiographyEyebrow}
        title={text.angiographyTitle}
        description={text.angiographyDescription}
        iconName="time"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.delayTitle}
        iconName="warning-outline"
        tone="warning"
        items={text.delayItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
