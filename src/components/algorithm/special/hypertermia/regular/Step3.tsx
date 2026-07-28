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
        description="Ponorte pacienta do studenej vody a priebežne sledujte teplotu telesného jadra."
        iconName="snow-outline"
      />

      <FlowConnector />

      <ContentCard
        title="Zastavte chladenie pri teplote jadra < 39 °C"
        iconName="thermometer-outline"
        tone="warning"
        items={["Počas chladenia nepretržite monitorujte stav pacienta."]}
      />

      <FlowConnector />

      <ContentCard
        title="Pokračujte v monitorovaní aspoň 15 minút po ochladení"
        iconName="pulse-outline"
        tone="info"
        items={[
          "Rehydratujte podľa potreby.",
          "Skontrolujte zlepšenie mentálneho stavu.",
          "Zabráňte náhodnému podchladeniu (< 35 °C).",
        ]}
      />
    </AlgorithmScreen>
  );
}
