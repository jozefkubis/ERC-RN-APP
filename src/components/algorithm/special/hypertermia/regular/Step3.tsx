import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step3() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 3"
        title="Rýchle ochladenie"
        description="Pri teplote jadra nad 40,5 °C začnite bezodkladne aktívne chladiť."
        urgent
      />

      <HeroCard
        eyebrow="Najrýchlejšie aktívne chladenie"
        title="Ponorenie do studenej vody"
        description="Ponorte pacienta do vane naplnenej do ½ až ¾ vodou a ľadom s teplotou 1 – 17 °C; voda má byť miešaná alebo cirkulujúca. Priebežne sledujte teplotu telesného jadra."
        iconName="snow-outline"
      />

      <FlowConnector />

      <ContentCard
        title="Najprv chlaďte, potom transportujte"
        iconName="warning-outline"
        tone="warning"
        items={[
          "Začnite okamžite chladiť ešte pred prevozom do nemocnice.",
          "Rýchlo ochlaďte pacienta na teplotu jadra < 39 °C.",
          "Podľa potreby pokračujte v chladení aj počas transportu.",
        ]}
      />

      <FlowConnector />

      <ContentCard
        title="Ak teplotu jadra nemožno zistiť"
        iconName="pulse-outline"
        tone="info"
        items={[
          "Pokračujte v chladení 15 minút alebo kým neurologické príznaky neustúpia, podľa toho, čo nastane skôr.",
          "Rehydratujte podľa potreby.",
          "Zabráňte náhodnému podchladeniu (< 35 °C).",
        ]}
      />
    </AlgorithmScreen>
  );
}
