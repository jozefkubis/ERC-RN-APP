import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";

export default function Step3Vitals() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 3"
        title="Posúďte riziko zastavenia obehu"
        description="Pri zhoršenom stave vedomia vyhľadajte známky kardiocirkulačnej nestability a podľa nich zvoľte cieľ transportu."
        urgent
      />

      <ContentCard
        title="Rizikové znaky"
        iconName="warning-outline"
        tone="warning"
        items={[
          "Srdcová frekvencia < 45 min⁻¹.",
          "Systolický krvný tlak < 90 mmHg.",
          "Kardiocirkulačná nestabilita.",
          "Teplota jadra < 32 °C u starších a polymorbídnych pacientov alebo < 30 °C u mladých a zdravých pacientov.",
        ]}
      />

      <FlowConnector />

      <DecisionCard question="Je prítomný aspoň jeden rizikový znak?" />

      <ContentCard
        title="Všetky odpovede nie"
        iconName="business-outline"
        items={["Transportujte pacienta do najbližšej vhodnej nemocnice."]}
      />

      <ContentCard
        title="Aspoň jedna odpoveď áno"
        iconName="medkit-outline"
        tone="danger"
        items={["Transportujte pacienta do nemocnice s možnosťou ECLS."]}
      />

      <FlowConnector />

      <ContentCard
        title="Hypotermia II/III – stredne ťažká až ťažká"
        iconName="snow-outline"
        tone="info"
        lead="Stupeň II: porucha vedomia, zvyčajne 28–32 °C. Stupeň III: bezvedomie s prítomnými vitálnymi funkciami, zvyčajne < 28 °C."
        items={[
          "Pohybujte s pacientom minimálne a opatrne, aby ste predišli kolapsu po záchrane.",
          "Zabráňte ďalším tepelným stratám.",
          "Začnite aktívne vonkajšie a minimálne invazívne ohrievanie.",
          "Zabezpečte dýchacie cesty podľa potreby.",
        ]}
      />

      <FlowConnector />

      <DecisionCard question="Spozorované hypotermické zastavenie srdca?" />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/cpr")
        }
      />
    </AlgorithmScreen>
  );
}
