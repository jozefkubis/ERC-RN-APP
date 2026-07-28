import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";

export default function Step4() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 4"
        title="Posúďte neurologický stav"
        description="Pri teplote jadra najviac 40,5 °C skontrolujte prítomnosť zmätenosti alebo dezorientácie."
      />

      <FlowConnector />

      <DecisionCard question="Teplota jadra ≤ 40,5 °C a zmätenosť / dezorientácia?" />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step3")
        }
      />
      <NoButton
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step5")
        }
      />
    </AlgorithmScreen>
  );
}
