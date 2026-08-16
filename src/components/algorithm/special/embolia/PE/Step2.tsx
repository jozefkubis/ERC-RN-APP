import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Začnite liečbu a potvrďte diagnózu",
    description:
      "Antikoagulačnú liečbu začnite už počas diagnostického procesu, pokiaľ nie sú prítomné známky krvácania alebo absolútne kontraindikácie.",
    heroEyebrow: "Počas diagnostického procesu",
    heroTitle: "Heparín 80 IU/kg i.v.",
    heroDescription:
      "Podajte antikoagulačnú liečbu, pokiaľ nie sú prítomné známky krvácania alebo absolútne kontraindikácie.",
    diagnosisTitle: "Potvrďte diagnózu",
    diagnosisItems: ["Vykonajte CT pulmoangiografiu."],
    deteriorationTitle: "Pri rýchlom zhoršovaní",
    deteriorationItems: [
      "Zvážte chirurgickú embolektómiu alebo transkatétrovú trombektómiu ako alternatívu k záchrannej fibrinolytickej terapii.",
    ],
  },
  en: {
    badge: "Step 2",
    title: "Start treatment and confirm the diagnosis",
    description:
      "Start anticoagulation during the diagnostic process unless there are signs of bleeding or absolute contraindications.",
    heroEyebrow: "During the diagnostic process",
    heroTitle: "Heparin 80 IU/kg IV",
    heroDescription:
      "Give anticoagulation unless there are signs of bleeding or absolute contraindications.",
    diagnosisTitle: "Confirm the diagnosis",
    diagnosisItems: ["Perform CT pulmonary angiography."],
    deteriorationTitle: "If the patient deteriorates rapidly",
    deteriorationItems: [
      "Consider surgical embolectomy or transcatheter thrombectomy as an alternative to rescue fibrinolytic therapy.",
    ],
  },
};

export default function Step2() {
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
      />

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="medical"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.diagnosisTitle}
        iconName="scan-outline"
        tone="info"
        items={text.diagnosisItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.deteriorationTitle}
        iconName="warning-outline"
        tone="danger"
        items={text.deteriorationItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
