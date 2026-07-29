import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";

export default function Step2() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 2"
        title="Vyhodnoťte teplotu jadra"
        description="Zmerajte teplotu telesného jadra a podľa výsledku zvoľte ďalší postup."
      />

      <FlowConnector />

      <DecisionCard
        question="Teplota jadra* > 40,5 °C?"
        description="Použite teplotnú sondu."
      />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step3")
        }
      />
      <NoButton
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step4")
        }
      />
    </AlgorithmScreen>
  );
}
