import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step9() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 9"
        title="Posúďte ďalšie príznaky"
        description="Ak klinický obraz poukazuje na inú príčinu, pokračujte podľa príslušného algoritmu."
      />

      <DecisionCard question="Ďalšie príznaky?" />

      <FlowConnector />

      <ContentCard
        title="Áno – Zvoľte vhodný algoritmus"
        iconName="git-branch-outline"
        tone="info"
        items={["Napríklad algoritmus pre hypoglykémiu."]}
      />

      <ContentCard
        title="Nie – Prepustite pacienta"
        iconName="checkmark-circle-outline"
        items={["Ak nie sú prítomné ďalšie príznaky, ukončite algoritmus."]}
      />
    </AlgorithmScreen>
  );
}
