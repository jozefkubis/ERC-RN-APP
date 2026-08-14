import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Rozpoznajte anafylaxiu",
    description:
      "Konajte už pri podozrení. Kožné alebo slizničné zmeny sú časté, ale pri anafylaxii nemusia byť prítomné.",
    suddenTitle: "Náhly vznik ochorenia",
    suddenLead: "Hľadajte život ohrozujúce problémy A, B alebo C:",
    suddenItems: [
      "A - opuch dýchacích ciest, zachrípnutie alebo stridor",
      "B - sťažené dýchanie, pískoty, únava, cyanóza alebo SpO2 < 94 %",
      "C - hypotenzia, príznaky šoku, zmätenosť alebo porucha vedomia",
    ],
    supportTitle: "Podporné znaky",
    supportItems: [
      "Kožné alebo slizničné zmeny - erytém, urtikária alebo opuch",
      "Nedávny kontakt so známym alebo pravdepodobným spúšťačom",
      "Kožné prejavy môžu chýbať; ich neprítomnosť nevylučuje anafylaxiu",
    ],
    suspicionTitle: "Podozrenie na anafylaxiu",
    suspicionDescription: "Privolajte pomoc a začnite okamžitú liečbu",
    arrestTitle: "Pacient je v zastavení obehu",
    arrestDescription: "Prejdite priamo na ALS pri anafylaxii",
  },
  en: {
    badge: "Step 1",
    title: "Recognise anaphylaxis",
    description:
      "Act on suspicion. Skin or mucosal changes are common, but they may be absent in anaphylaxis.",
    suddenTitle: "Sudden onset of illness",
    suddenLead: "Look for life-threatening A, B, or C problems:",
    suddenItems: [
      "A - airway swelling, hoarse voice, or stridor",
      "B - breathing difficulty, wheeze, fatigue, cyanosis, or SpO2 < 94 %",
      "C - hypotension, signs of shock, confusion, or impaired consciousness",
    ],
    supportTitle: "Supporting features",
    supportItems: [
      "Skin or mucosal changes - flushing, urticaria, or swelling",
      "Recent exposure to a known or likely trigger",
      "Skin features may be absent; absence does not exclude anaphylaxis",
    ],
    suspicionTitle: "Suspected anaphylaxis",
    suspicionDescription: "Call for help and start immediate treatment",
    arrestTitle: "Patient is in cardiac arrest",
    arrestDescription: "Go directly to ALS for anaphylaxis",
  },
};

export default function Step1() {
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

      <ContentCard
        title={text.suddenTitle}
        iconName="flash-outline"
        tone="info"
        lead={text.suddenLead}
        items={text.suddenItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.supportTitle}
        iconName="body-outline"
        items={text.supportItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <FlowActionButton
        title={text.suspicionTitle}
        description={text.suspicionDescription}
        iconName="call-outline"
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/anafylaxia/step2")}
      />

      <FlowActionButton
        title={text.arrestTitle}
        description={text.arrestDescription}
        iconName="heart-dislike-outline"
        variant="danger"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/cardiac-arrest")
        }
      />
    </AlgorithmScreen>
  );
}
