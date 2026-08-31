import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Rozpoznajte náhodnú hypotermiu",
    description:
      "Zmerajte teplotu telesného jadra teplomerom schopným merať nízke teploty. Ak meranie nie je možné, použite klinické vyšetrenie.",
    temperatureTitle: "Teplota jadra < 35 °C alebo pacient studený na dotyk",
    temperatureItems: [
      "U bezvedomého podchladeného pacienta kontrolujte vitálne funkcie až 1 minútu.",
    ],
    question: "Sú prítomné vitálne funkcie?",
    yes: "Áno",
    no: "Nie",
    yesDescription: "Pokračovať pri zachovaných vitálnych funkciách",
    noDescription: "Prejsť na vetvu bez vitálnych funkcií",
  },
  en: {
    badge: "Step 1",
    title: "Recognise accidental hypothermia",
    description:
      "Measure core temperature with a low-reading thermometer. If measurement is not possible, use clinical examination.",
    temperatureTitle: "Core temperature < 35 °C or patient cold to touch",
    temperatureItems: [
      "Check vital signs for up to 1 minute in an unconscious hypothermic patient.",
    ],
    question: "Are vital signs present?",
    yes: "Yes",
    no: "No",
    yesDescription: "Continue with vital signs present",
    noDescription: "Go to the no vital signs pathway",
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
        urgent
        themeMode={themeMode}
      />

      <ContentCard
        title={text.temperatureTitle}
        iconName="snow-outline"
        tone="info"
        items={text.temperatureItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard question={text.question} themeMode={themeMode} />

      <YesButton
        title={text.yes}
        description={text.yesDescription}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step2-vitals")
        }
      />
      <NoButton
        title={text.no}
        description={text.noDescription}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step2-novitals")
        }
      />
    </AlgorithmScreen>
  );
}
