import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import HeroCard from "@/src/components/ui/HeroCard";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Určte stav pacienta",
    description:
      "Smerujte pacienta do centra s možnosťou PKI a ďalší postup zvoľte podľa toho, či dosiahol trvalý ROSC.",
    pciEyebrow: "Akútna koronárna oklúzia",
    pciTitle: "Smerujte pacienta do PKI centra",
    pciDescription:
      "Pri ST elevácii alebo podozrení na prebiehajúcu ischémiu aktivujte existujúcu STEMI sieť.",
    question: "Dosiahol pacient trvalý ROSC?",
    questionDescription:
      "Rozhodnite podľa pretrvávajúcej obnovy spontánnej cirkulácie.",
    yes: "Áno",
    no: "Nie",
    readinessTitle: "Pripravenosť systému",
    readinessItems: [
      "Podporujte zdravotnú výchovu na rozpoznávanie príznakov a minimalizáciu oneskorení pri vyhľadávaní lekárskej starostlivosti.",
      "Podporujte školenie BLS pre pravdepodobných záchrancov vo vysokorizikových skupinách.",
      "Posilnite regionálne siete na zabezpečenie včasnej perkutánnej koronárnej intervencie.",
    ],
  },
  en: {
    badge: "Step 1",
    title: "Determine the patient's status",
    description:
      "Transfer the patient to a centre with PCI capability and choose the next step according to whether sustained ROSC has been achieved.",
    pciEyebrow: "Acute coronary occlusion",
    pciTitle: "Transfer the patient to a PCI centre",
    pciDescription:
      "In case of ST-elevation or suspected ongoing ischaemia, activate the existing STEMI network.",
    question: "Has the patient achieved sustained ROSC?",
    questionDescription:
      "Determine whether return of spontaneous circulation is sustained.",
    yes: "Yes",
    no: "No",
    readinessTitle: "System preparedness",
    readinessItems: [
      "Enhance health education to recognise symptoms and minimise delays in seeking medical care.",
      "Promote BLS training for likely rescuers of high-risk groups.",
      "Strengthen regional networks to ensure timely percutaneous coronary intervention.",
    ],
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
        urgent
      />

      <HeroCard
        eyebrow={text.pciEyebrow}
        title={text.pciTitle}
        description={text.pciDescription}
        iconName="business"
        themeMode={themeMode}
      />

      <DecisionCard
        question={text.question}
        description={text.questionDescription}
        themeMode={themeMode}
      />

      <YesButton
        title={text.yes}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/koronarnatromboza/step2")
        }
      />
      <NoButton
        title={text.no}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/koronarnatromboza/ongoing-cpr")
        }
      />

      <ContentCard
        title={text.readinessTitle}
        iconName="people-outline"
        tone="info"
        items={text.readinessItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
