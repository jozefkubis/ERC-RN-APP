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
    badge: "Krok 2",
    title: "Posúďte stav vedomia",
    description:
      "Pri zachovaných vitálnych funkciách skontrolujte, či dochádza k zhoršeniu stavu vedomia.",
    question: "Zhoršenie stavu vedomia?",
    yes: "Áno",
    noTitle: "Nie – postup podľa prítomnosti zranenia",
    noItems: [
      "V prípade zranenia transportujte pacienta do najbližšej nemocnice.",
      "Ak pacient nie je zranený, zvážte ošetrenie na mieste alebo v nemocnici.",
    ],
    mildTitle: "Hypotermia I – mierna",
    mildLead:
      "Pacient je pri vedomí, vitálne funkcie sú prítomné a teplota telesného jadra je spravidla 32–35 °C.",
    mildItems: [
      "Teplé prostredie a suché oblečenie.",
      "Teplé sladené nápoje.",
      "Aktívny pohyb.",
    ],
  },
  en: {
    badge: "Step 2",
    title: "Assess level of consciousness",
    description:
      "If vital signs are present, check whether the level of consciousness is deteriorating.",
    question: "Deteriorating level of consciousness?",
    yes: "Yes",
    noTitle: "No – proceed according to the presence of injury",
    noItems: [
      "If injured, transport the patient to the nearest hospital.",
      "If the patient is not injured, consider treatment on site or in hospital.",
    ],
    mildTitle: "Hypothermia I – mild",
    mildLead:
      "The patient is conscious, vital signs are present, and core body temperature is usually 32–35 °C.",
    mildItems: [
      "Warm environment and dry clothing.",
      "Warm sweet drinks.",
      "Active movement.",
    ],
  },
};

export default function Step2Vitals() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard question={text.question} themeMode={themeMode} />

      <YesButton
        title={text.yes}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step3-vitals")
        }
      />

      <ContentCard
        title={text.noTitle}
        iconName="medkit-outline"
        items={text.noItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <ContentCard
        title={text.mildTitle}
        iconName="snow-outline"
        tone="info"
        lead={text.mildLead}
        items={text.mildItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
