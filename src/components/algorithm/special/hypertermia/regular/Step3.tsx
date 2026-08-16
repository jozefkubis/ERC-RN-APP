import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Rýchle ochladenie",
    description:
      "Pri teplote jadra nad 40,5 °C začnite bezodkladne aktívne chladiť.",
    heroEyebrow: "Najrýchlejšie aktívne chladenie",
    heroTitle: "Ponorenie do studenej vody",
    heroDescription:
      "Ponorte pacienta do vane naplnenej do ½ až ¾ vodou a ľadom s teplotou 1 – 17 °C; voda má byť miešaná alebo cirkulujúca. Priebežne sledujte teplotu telesného jadra.",
    transportTitle: "Najprv chlaďte, potom transportujte",
    transportItems: [
      "Začnite okamžite chladiť ešte pred prevozom do nemocnice.",
      "Rýchlo ochlaďte pacienta na teplotu jadra < 39 °C.",
      "Podľa potreby pokračujte v chladení aj počas transportu.",
    ],
    unknownTemperatureTitle: "Ak teplotu jadra nemožno zistiť",
    unknownTemperatureItems: [
      "Pokračujte v chladení 15 minút alebo kým neurologické príznaky neustúpia, podľa toho, čo nastane skôr.",
      "Rehydratujte podľa potreby.",
      "Zabráňte náhodnému podchladeniu (< 35 °C).",
    ],
  },
  en: {
    badge: "Step 3",
    title: "Rapid cooling",
    description:
      "If core temperature is above 40.5 °C, start active cooling immediately.",
    heroEyebrow: "Fastest active cooling",
    heroTitle: "Cold-water immersion",
    heroDescription:
      "Immerse the patient in a bath filled ½ to ¾ with water and ice at 1–17 °C; the water should be stirred or circulated. Continuously monitor core body temperature.",
    transportTitle: "Cool first, transport second",
    transportItems: [
      "Start cooling immediately before transport to hospital.",
      "Rapidly cool the patient to a core temperature < 39 °C.",
      "Continue cooling during transport as needed.",
    ],
    unknownTemperatureTitle: "If core temperature cannot be measured",
    unknownTemperatureItems: [
      "Continue cooling for 15 minutes or until neurological symptoms resolve, whichever occurs first.",
      "Rehydrate as needed.",
      "Prevent accidental hypothermia (< 35 °C).",
    ],
  },
};

export default function Step3() {
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        urgent
        themeMode={themeMode}
      />

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="snow-outline"
        themeMode={themeMode}
      />

      <FlowConnector />

      <ContentCard
        title={text.transportTitle}
        iconName="warning-outline"
        tone="warning"
        items={text.transportItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <ContentCard
        title={text.unknownTemperatureTitle}
        iconName="pulse-outline"
        tone="info"
        items={text.unknownTemperatureItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
