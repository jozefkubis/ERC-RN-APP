import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "KPR",
    title: "Kardiopulmonálna resuscitácia",
    description:
      "Pri spozorovanom hypotermickom zastavení srdca začnite okamžite kardiopulmonálnu resuscitáciu.",
    actionTitle: "Začnite KPR",
    actionDescription: "Spustite kardiopulmonálnu resuscitáciu.",
  },
  en: {
    badge: "CPR",
    title: "Cardiopulmonary resuscitation",
    description:
      "For witnessed hypothermic cardiac arrest, start cardiopulmonary resuscitation immediately.",
    actionTitle: "Start CPR",
    actionDescription: "Begin cardiopulmonary resuscitation.",
  },
};

export default function CPR() {
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

      <FlowConnector />

      <FlowActionButton
        title={text.actionTitle}
        description={text.actionDescription}
        iconName="heart-dislike-outline"
        variant="danger"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step4-novitals")
        }
      />
    </AlgorithmScreen>
  );
}
