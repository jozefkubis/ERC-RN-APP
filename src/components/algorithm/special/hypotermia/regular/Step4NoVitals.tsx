import HopeScoreLink from "@/src/components/algorithm/special/hypotermia/HopeScoreLink";
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
    badge: "Krok 4",
    title: "Transportujte pacienta do nemocnice s ECLS",
    description:
      "Pokračujte v KPR počas transportu a v nemocnici stanovte predpokladaný prínos mimotelového ohrievania.",
    eclsTitle: "ECLS – mimotelová podpora životných funkcií",
    eclsLead:
      "ECLS (Extracorporeal Life Support) dočasne zabezpečuje mimotelový krvný obeh a okysličovanie krvi. Pri hypotermickom zastavení obehu umožňuje kontrolované vnútorné ohrievanie.",
    eclsItems: [
      "Prevezte pacienta do nemocnice s možnosťou ECLS.",
      "Neukončujte KPR počas transportu.",
    ],
    question: "Je vypočítaná pravdepodobnosť prežitia najmenej 10 %?",
    noTitle: "Nie – pravdepodobnosť je nižšia ako 10 %",
    noItems: ["Zvážte ukončenie KPR."],
    yes: "Áno",
    yesDescription: "Pokračovať ohrievaním a resuscitáciou",
  },
  en: {
    badge: "Step 4",
    title: "Transport the patient to a hospital with ECLS",
    description:
      "Continue CPR during transport and assess the expected benefit of extracorporeal rewarming in hospital.",
    eclsTitle: "ECLS – extracorporeal life support",
    eclsLead:
      "ECLS temporarily provides extracorporeal circulation and blood oxygenation. In hypothermic cardiac arrest, it enables controlled internal rewarming.",
    eclsItems: [
      "Transport the patient to a hospital with ECLS capability.",
      "Do not terminate CPR during transport.",
    ],
    question: "Is the calculated probability of survival at least 10%?",
    noTitle: "No – probability is below 10%",
    noItems: ["Consider terminating CPR."],
    yes: "Yes",
    yesDescription: "Continue with rewarming and resuscitation",
  },
};

export default function Step4NoVitals() {
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
        title={text.eclsTitle}
        iconName="pulse-outline"
        tone="info"
        lead={text.eclsLead}
        items={text.eclsItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <HopeScoreLink />

      <DecisionCard question={text.question} themeMode={themeMode} />

      <ContentCard
        title={text.noTitle}
        iconName="hand-left-outline"
        tone="danger"
        items={text.noItems}
        themeMode={themeMode}
      />

      <YesButton
        title={text.yes}
        description={text.yesDescription}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step5-novitals")
        }
      />
    </AlgorithmScreen>
  );
}
