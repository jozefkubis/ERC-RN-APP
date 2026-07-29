import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step8() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 8"
        title="Liečte závažnú dehydratáciu"
        description="Spôsob rehydratácie zvoľte podľa mentálneho stavu pacienta."
        urgent
      />

      <FlowConnector />

      <ContentCard
        title="Začnite rehydratáciu"
        iconName="water-outline"
        tone="info"
        items={[
          "Pri abnormálnom mentálnom stave podajte intravenózne fyziologický roztok alebo Ringerov laktát.",
          "Ak je mentálny stav normálny, zabezpečte orálnu rehydratáciu a podajte sodík.",
        ]}
      />
    </AlgorithmScreen>
  );
}
