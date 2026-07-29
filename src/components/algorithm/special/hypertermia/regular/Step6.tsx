import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step6() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 6"
        title="Liečte hyponatriémiu"
        description="Pri abnormálnom mentálnom stave začnite okamžitú liečbu hypertonickým roztokom."
        urgent
      />

      <FlowConnector />

      <ContentCard
        title="Podajte 3 % NaCl intravenózne"
        iconName="medkit-outline"
        tone="danger"
        items={[
          "Podajte 100 ml bolus v 10-minútových intervaloch.",
          "Druhý a tretí bolus podajte iba v prípade potreby.",
          "Ak je mentálny stav normálny, podajte perorálne sodík.",
        ]}
      />
    </AlgorithmScreen>
  );
}
