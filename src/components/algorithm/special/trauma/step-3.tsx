import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Ďalší postup po ROSC",
    description:
      "Pokračujte podľa toho, či sa pacient nachádza v prednemocničnom alebo nemocničnom prostredí.",
    prehospitalEyebrow: "Prednemocnične",
    prehospitalTitle: "Okamžitý transport",
    prehospitalDescription: "Transportujte pacienta do vhodnej nemocnice.",
    hospitalEyebrow: "V nemocnici",
    hospitalTitle: "Damage control surgery",
    hospitalDescription: "Pokračujte v damage control resuscitácii.",
  },
  en: {
    badge: "Step 3",
    title: "Next steps after ROSC",
    description:
      "Proceed according to whether the patient is in the pre-hospital or in-hospital setting.",
    prehospitalEyebrow: "Pre-hospital",
    prehospitalTitle: "Immediate transport",
    prehospitalDescription: "Transfer the patient to an appropriate hospital.",
    hospitalEyebrow: "In hospital",
    hospitalTitle: "Damage control surgery",
    hospitalDescription: "Continue damage control resuscitation.",
  },
};

export default function TraumaStep3() {
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
        eyebrow={text.prehospitalEyebrow}
        title={text.prehospitalTitle}
        description={text.prehospitalDescription}
        iconName="car-outline"
        themeMode={themeMode}
      />

      <HeroCard
        eyebrow={text.hospitalEyebrow}
        title={text.hospitalTitle}
        description={text.hospitalDescription}
        iconName="medkit-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
