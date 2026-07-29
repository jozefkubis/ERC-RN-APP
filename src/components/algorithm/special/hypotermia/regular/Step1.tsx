import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
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
        title="Rozpoznajte náhodnú hypotermiu"
        description="Zmerajte teplotu telesného jadra teplomerom schopným merať nízke teploty. Ak meranie nie je možné, použite klinické vyšetrenie."
        urgent
      />

      <ContentCard
        title="Teplota jadra < 35 °C alebo pacient studený na dotyk"
        iconName="snow-outline"
        tone="info"
        items={[
          "U bezvedomého podchladeného pacienta kontrolujte vitálne funkcie až 1 minútu.",
        ]}
      />

      <FlowConnector />

      <DecisionCard question="Sú prítomné vitálne funkcie?" />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step2-vitals")
        }
      />
      <NoButton
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step2-novitals")
        }
      />
    </AlgorithmScreen>
  );
}
