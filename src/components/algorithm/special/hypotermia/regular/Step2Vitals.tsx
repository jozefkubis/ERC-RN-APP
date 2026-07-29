import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";

export default function Step2Vitals() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 2"
        title="Posúďte stav vedomia"
        description="Pri zachovaných vitálnych funkciách skontrolujte, či dochádza k zhoršeniu stavu vedomia."
      />

      <FlowConnector />

      <DecisionCard question="Zhoršenie stavu vedomia?" />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step3-vitals")
        }
      />

      <ContentCard
        title="Nie – postup podľa prítomnosti zranenia"
        iconName="medkit-outline"
        items={[
          "V prípade zranenia transportujte pacienta do najbližšej nemocnice.",
          "Ak pacient nie je zranený, zvážte ošetrenie na mieste alebo v nemocnici.",
        ]}
      />

      <FlowConnector />

      <ContentCard
        title="Hypotermia I – mierna"
        iconName="snow-outline"
        tone="info"
        lead="Pacient je pri vedomí, vitálne funkcie sú prítomné a teplota telesného jadra je spravidla 32–35 °C."
        items={[
          "Teplé prostredie a suché oblečenie.",
          "Teplé sladené nápoje.",
          "Aktívny pohyb.",
        ]}
      />
    </AlgorithmScreen>
  );
}
