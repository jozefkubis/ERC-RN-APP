import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useRouter } from "expo-router";

export default function Step2NoVitals() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 2"
        title="Posúďte dôvody na nezačatie alebo ukončenie KPR"
        description="Pred pokračovaním vyhodnoťte všetky uvedené podmienky."
        urgent
      />

      <ContentCard
        title="Skontrolujte tieto podmienky"
        iconName="warning-outline"
        tone="danger"
        items={[
          "Zjavné príznaky smrti.",
          "Platný pokyn nepokúšať sa o KPR.",
          "Podmienky nebezpečné pre záchrancu.",
          "Zasypanie lavínou dlhšie ako 60 minút, dýchacie cesty zaplnené snehom a asystólia.",
        ]}
      />

      <FlowConnector />

      <DecisionCard question="Je prítomná aspoň jedna z uvedených podmienok?" />

      <ContentCard
        title="Akákoľvek odpoveď áno"
        iconName="hand-left-outline"
        tone="danger"
        items={["Zvážte nezačatie alebo ukončenie KPR."]}
      />

      <FlowActionButton
        title="Všetky odpovede nie"
        description="Začnite KPR a pokračujte v postupe."
        iconName="checkmark-circle-outline"
        onPress={() =>
          router.push(
            "/algorithms/special/hypotermia/regular/step3-novitals",
          )
        }
      />
    </AlgorithmScreen>
  );
}
