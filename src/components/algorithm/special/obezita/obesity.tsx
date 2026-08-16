import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Špeciálna skupina pacientov",
    title: "Resuscitácia obéznych pacientov",
    description:
      "Nie je potrebná odchýlka od štandardného resuscitačného postupu.",
    recommendationEyebrow: "Odporúčanie ERC 2025",
    recommendationTitle: "Postupujte štandardne",
    recommendationDescription:
      "Obézni pacienti by mali dostať štandardnú resuscitačnú liečbu podľa BLS alebo ALS algoritmu.",
    blsTitle: "Otvoriť BLS",
    blsDescription: "Základná resuscitácia dospelých",
    alsTitle: "Otvoriť ALS",
    alsDescription: "Rozšírená resuscitácia dospelých",
  },
  en: {
    badge: "Special patient group",
    title: "Resuscitation in obese patients",
    description:
      "No deviation from standard resuscitation treatment is required.",
    recommendationEyebrow: "ERC 2025 recommendation",
    recommendationTitle: "Use the standard approach",
    recommendationDescription:
      "Obese patients should receive standard resuscitation treatment according to the BLS or ALS algorithm.",
    blsTitle: "Open BLS",
    blsDescription: "Adult basic life support",
    alsTitle: "Open ALS",
    alsDescription: "Adult advanced life support",
  },
};

export default function Obesity() {
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
      />

      <HeroCard
        eyebrow={text.recommendationEyebrow}
        title={text.recommendationTitle}
        description={text.recommendationDescription}
        iconName="body-outline"
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.blsTitle}
        description={text.blsDescription}
        iconName="heart-outline"
        variant="light"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/bls/step1")
        }
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
