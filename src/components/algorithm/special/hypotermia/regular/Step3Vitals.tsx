import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Posúďte riziko zastavenia obehu",
    description:
      "Pri zhoršenom stave vedomia vyhľadajte známky kardiocirkulačnej nestability a podľa nich zvoľte cieľ transportu.",
    riskTitle: "Rizikové znaky",
    riskItems: [
      "Srdcová frekvencia < 45 min⁻¹.",
      "Systolický krvný tlak < 90 mmHg.",
      "Kardiocirkulačná nestabilita.",
      "Teplota jadra < 32 °C u starších a polymorbídnych pacientov alebo < 30 °C u mladých a zdravých pacientov.",
    ],
    riskQuestion: "Je prítomný aspoň jeden rizikový znak?",
    noRiskTitle: "Všetky odpovede nie",
    noRiskItems: ["Transportujte pacienta do najbližšej vhodnej nemocnice."],
    riskPresentTitle: "Aspoň jedna odpoveď áno",
    riskPresentItems: ["Transportujte pacienta do nemocnice s možnosťou ECLS."],
    stageTitle: "Hypotermia II/III – stredne ťažká až ťažká",
    stageLead:
      "Stupeň II: porucha vedomia, zvyčajne 28–32 °C. Stupeň III: bezvedomie s prítomnými vitálnymi funkciami, zvyčajne < 28 °C.",
    stageItems: [
      "Pohybujte s pacientom minimálne a opatrne, aby ste predišli kolapsu po záchrane.",
      "Zabráňte ďalším tepelným stratám.",
      "Začnite aktívne vonkajšie a minimálne invazívne ohrievanie.",
      "Zabezpečte dýchacie cesty podľa potreby.",
    ],
    arrestQuestion: "Spozorované hypotermické zastavenie srdca?",
    yes: "Áno",
    yesDescription: "Otvoriť KPR pri hypotermii",
  },
  en: {
    badge: "Step 3",
    title: "Assess the risk of cardiac arrest",
    description:
      "With a deteriorating level of consciousness, look for signs of cardiocirculatory instability and use them to choose the transport destination.",
    riskTitle: "Risk factors",
    riskItems: [
      "Heart rate < 45 min⁻¹.",
      "Systolic blood pressure < 90 mmHg.",
      "Cardiocirculatory instability.",
      "Core temperature < 32 °C in older or multimorbid patients, or < 30 °C in young and healthy patients.",
    ],
    riskQuestion: "Is at least one risk factor present?",
    noRiskTitle: "All answers are no",
    noRiskItems: ["Transport the patient to the nearest suitable hospital."],
    riskPresentTitle: "At least one answer is yes",
    riskPresentItems: ["Transport the patient to a hospital with ECLS capability."],
    stageTitle: "Hypothermia II/III – moderate to severe",
    stageLead:
      "Stage II: impaired consciousness, usually 28–32 °C. Stage III: unconscious with vital signs present, usually < 28 °C.",
    stageItems: [
      "Move the patient as little and as carefully as possible to prevent rescue collapse.",
      "Prevent further heat loss.",
      "Start active external and minimally invasive rewarming.",
      "Manage the airway as needed.",
    ],
    arrestQuestion: "Witnessed hypothermic cardiac arrest?",
    yes: "Yes",
    yesDescription: "Open CPR in hypothermia",
  },
};

export default function Step3Vitals() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        urgent
        themeMode={themeMode}
      />

      <ContentCard
        title={text.riskTitle}
        iconName="warning-outline"
        tone="warning"
        items={text.riskItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard question={text.riskQuestion} themeMode={themeMode} />

      <ContentCard
        title={text.noRiskTitle}
        iconName="business-outline"
        items={text.noRiskItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.riskPresentTitle}
        iconName="medkit-outline"
        tone="danger"
        items={text.riskPresentItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <ContentCard
        title={text.stageTitle}
        iconName="snow-outline"
        tone="info"
        lead={text.stageLead}
        items={text.stageItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard question={text.arrestQuestion} themeMode={themeMode} />

      <YesButton
        title={text.yes}
        description={text.yesDescription}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/cpr")
        }
      />
    </AlgorithmScreen>
  );
}
