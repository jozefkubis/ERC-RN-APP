import HopeScoreLink from "@/src/components/algorithm/special/hypotermia/HopeScoreLink";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";

export default function Step4NoVitals() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 4"
        title="Transportujte pacienta do nemocnice s ECLS"
        description="Pokračujte v KPR počas transportu a v nemocnici stanovte predpokladaný prínos mimotelového ohrievania."
        urgent
      />

      <ContentCard
        title="ECLS – mimotelová podpora životných funkcií"
        iconName="pulse-outline"
        tone="info"
        lead="ECLS (Extracorporeal Life Support) dočasne zabezpečuje mimotelový krvný obeh a okysličovanie krvi. Pri hypotermickom zastavení obehu umožňuje kontrolované vnútorné ohrievanie."
        items={[
          "Prevezte pacienta do nemocnice s možnosťou ECLS.",
          "Neukončujte KPR počas transportu.",
        ]}
      />

      <FlowConnector />

      <HopeScoreLink />

      <DecisionCard question="Je vypočítaná pravdepodobnosť prežitia najmenej 10 %?" />

      <ContentCard
        title="Nie – pravdepodobnosť je nižšia ako 10 %"
        iconName="hand-left-outline"
        tone="danger"
        items={["Zvážte ukončenie KPR."]}
      />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step5-novitals")
        }
      />
    </AlgorithmScreen>
  );
}
