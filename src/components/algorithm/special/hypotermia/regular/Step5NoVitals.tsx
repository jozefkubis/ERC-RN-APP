import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step5NoVitals() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 5"
        title="Hypotermia IV – zastavenie obehu"
        description="Pokračujte v resuscitácii a aktívnom ohrievaní až do vyhodnotenia obnovenia spontánneho krvného obehu."
        urgent
      />

      <ContentCard
        title="Ohrievanie a resuscitácia"
        iconName="thermometer-outline"
        tone="danger"
        items={[
          "Ohrievajte pacienta pomocou ECLS.",
          "Ak centrum s ECLS nie je možné dosiahnuť do 6 hodín, pokračujte v KPR a ohrievaní bez ECLS v najbližšej vhodnej nemocnici.",
          "Zohrejte pacienta na teplotu telesného jadra najmenej 32 °C.",
        ]}
      />

      <FlowConnector />

      <DecisionCard question="Došlo k obnoveniu spontánneho krvného obehu (ROSC)?" />

      <ContentCard
        title="Nie – žiadny ROSC"
        iconName="hand-left-outline"
        tone="danger"
        items={["Zvážte ukončenie KPR."]}
      />

      <ContentCard
        title="Áno – krvný obeh je obnovený"
        iconName="heart-circle-outline"
        tone="info"
        items={[
          "Pripravte sa na multiorgánové zlyhávanie a možnú potrebu respiračnej podpory pomocou ECLS.",
          "Pokračujte v poresuscitačnej starostlivosti.",
        ]}
      />
    </AlgorithmScreen>
  );
}
