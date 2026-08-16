import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import DecisionCard from "@/src/components/ui/DecisionCard";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Vyhodnoťte 12-zvodové EKG",
    description:
      "Po trvalom ROSC určte ďalší reperfúzny postup podľa prítomnosti ST elevácií.",
    question: "Sú na EKG prítomné ST elevácie?",
    yes: "Áno",
    no: "Nie",
  },
  en: {
    badge: "Step 2",
    title: "Assess the 12-lead ECG",
    description:
      "After sustained ROSC, determine the next reperfusion strategy according to the presence of ST-elevation.",
    question: "Is ST-elevation present on the ECG?",
    yes: "Yes",
    no: "No",
  },
};

export default function Step2() {
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

      <DecisionCard question={text.question} themeMode={themeMode} />

      <YesButton
        title={text.yes}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/koronarnatromboza/st-elevation")
        }
      />
      <NoButton
        title={text.no}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/koronarnatromboza/no-st-elevation")
        }
      />
    </AlgorithmScreen>
  );
}
