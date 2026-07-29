import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useRouter } from "expo-router";

export default function CPR() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="KPR"
        title="Kardiopulmonálna resuscitácia"
        description="Pri spozorovanom hypotermickom zastavení srdca začnite okamžite kardiopulmonálnu resuscitáciu."
        urgent
      />

      <FlowConnector />

      <FlowActionButton
        title="Začnite KPR"
        description="Spustite kardiopulmonálnu resuscitáciu."
        iconName="heart-dislike-outline"
        variant="danger"
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step4-novitals")
        }
      />
    </AlgorithmScreen>
  );
}
