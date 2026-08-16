import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Začnite KPR a neodďaľujte transport",
    description:
      "Pokračujte v resuscitácii a súčasne pripravte bezpečný transport pacienta.",
    treatmentTitle: "KPR, liečba a transport",
    treatmentItems: [
      "Začnite s KPR, neodďaľujte transport.",
      "Ak nie je možná kontinuálna KPR, pri náročnej alebo nebezpečnej záchrane zvážte prerušovanú alebo odloženú KPR.",
      "Zabezpečte manažment dýchacích ciest.",
      "Pri teplote jadra < 30 °C podajte najviac 3 defibrilačné výboje a nepodávajte adrenalín.",
      "Získajte informácie o mechanizme udalosti.",
    ],
    question: "Nastalo zastavenie srdca z inej príčiny ešte pred podchladením?",
    yesTitle: "Áno",
    yesItems: [
      "Transportujte pacienta do najbližšej vhodnej nemocnice alebo pokračujte podľa pokynov supervízora.",
    ],
    no: "Nie",
  },
  en: {
    badge: "Step 3",
    title: "Start CPR and do not delay transport",
    description:
      "Continue resuscitation while preparing safe transport of the patient.",
    treatmentTitle: "CPR, treatment, and transport",
    treatmentItems: [
      "Start CPR and do not delay transport.",
      "If continuous CPR is not possible during a difficult or dangerous rescue, consider intermittent or delayed CPR.",
      "Provide airway management.",
      "At a core temperature < 30 °C, give no more than 3 defibrillation shocks and do not give adrenaline.",
      "Obtain information about the mechanism of the event.",
    ],
    question: "Did cardiac arrest from another cause occur before hypothermia?",
    yesTitle: "Yes",
    yesItems: [
      "Transport the patient to the nearest suitable hospital or follow the supervisor's instructions.",
    ],
    no: "No",
  },
};

export default function Step3NoVitals() {
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
        title={text.treatmentTitle}
        iconName="heart-outline"
        tone="danger"
        items={text.treatmentItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard question={text.question} themeMode={themeMode} />

      <ContentCard
        title={text.yesTitle}
        iconName="business-outline"
        tone="info"
        items={text.yesItems}
        themeMode={themeMode}
      />

      <NoButton
        title={text.no}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step4-novitals")
        }
      />
    </AlgorithmScreen>
  );
}
