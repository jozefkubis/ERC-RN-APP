import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";

export default function Step7() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 7"
        title="Posúďte hydratáciu"
        description="Skontrolujte, či sú prítomné známky závažnej dehydratácie."
      />

      <FlowConnector />

      <DecisionCard question="Silne dehydrovaný?" />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step8")
        }
      />
      <NoButton
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step9")
        }
      />
    </AlgorithmScreen>
  );
}
