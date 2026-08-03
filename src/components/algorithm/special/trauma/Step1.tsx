import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";

export default function Step1() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 1"
        title="Traumatické zastavenie krvného obehu / hroziace zastavenie krvného obehu"
        description="Rýchlo určte, či ide o pravdepodobné netraumatické zastavenie obehu."
        urgent
      />

      <FlowConnector />

      <DecisionCard question="Pravdepodobné netraumatické zastavenie obehu?" />

      <YesButton
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
      <NoButton
        onPress={() => router.push("/algorithms/special/trauma/step2")}
      />
    </AlgorithmScreen>
  );
}
