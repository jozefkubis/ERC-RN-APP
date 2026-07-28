import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";

export default function Step5() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 5"
        title="Skontrolujte sodík v krvi"
        description="Vyhodnoťte koncentráciu sodíka a podľa výsledku zvoľte ďalší postup."
      />

      <FlowConnector />

      <DecisionCard question="Sodík v krvi < 130 mEq·l⁻¹?" />

      <YesButton />
      <NoButton />
    </AlgorithmScreen>
  );
}
