import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import HeroCard from "@/src/components/ui/HeroCard";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Bez odpovede po 5 minútach",
    description:
      "Opakujte i.m. adrenalín, pokračujte v podpore ABC a aktívne korigujte hypovolémiu.",
    heroEyebrow: "Druhá i.m. dávka",
    heroTitle: "Zopakujte adrenalín",
    heroDescription:
      "Podajte rovnakú i.m. dávku po 5 minútach, ak sa stav nezlepšil.",
    continueTitle: "Pokračujte bez prerušenia",
    continueItems: [
      "Znovu zhodnoťte A, B, C, D a E",
      "Pokračujte vo vysokoprietokovom kyslíku a monitorovaní",
      "Zopakujte bolus kryštaloidu podľa klinickej odpovede",
      "Potvrďte, že bol privolaný resuscitačný tím alebo ZZS",
    ],
    question: "Pretrvávajú problémy B alebo C po dvoch i.m. dávkach?",
    questionDescription:
      "Pretrvávajúca dychová alebo obehová nestabilita znamená refraktérnu anafylaxiu.",
    yes: "Áno",
    no: "Nie",
    yesDescription: "Otvoriť refraktérnu anafylaxiu",
    noDescription: "Prejsť na následnú starostlivosť",
    arrestTitle: "Zastavenie obehu",
    arrestDescription: "Okamžite začnite štandardný ALS postup",
  },
  en: {
    badge: "Step 3",
    title: "No response after 5 minutes",
    description:
      "Repeat IM adrenaline, continue ABC support, and actively correct hypovolaemia.",
    heroEyebrow: "Second IM dose",
    heroTitle: "Repeat adrenaline",
    heroDescription:
      "Give the same IM dose after 5 minutes if the condition has not improved.",
    continueTitle: "Continue without interruption",
    continueItems: [
      "Reassess A, B, C, D, and E",
      "Continue high-flow oxygen and monitoring",
      "Repeat crystalloid bolus according to clinical response",
      "Confirm that the resuscitation team or EMS has been called",
    ],
    question: "Do B or C problems persist after two IM doses?",
    questionDescription:
      "Persistent breathing or circulatory instability means refractory anaphylaxis.",
    yes: "Yes",
    no: "No",
    yesDescription: "Open refractory anaphylaxis",
    noDescription: "Go to aftercare",
    arrestTitle: "Cardiac arrest",
    arrestDescription: "Start the standard ALS algorithm immediately",
  },
};

export default function Step3() {
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

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="repeat"
        danger
        themeMode={themeMode}
      />

      <ContentCard
        title={text.continueTitle}
        iconName="pulse"
        tone="info"
        items={text.continueItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard
        question={text.question}
        description={text.questionDescription}
        themeMode={themeMode}
      />

      <YesButton
        title={text.yes}
        description={text.yesDescription}
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/anafylaxia/refractory")}
      />
      <NoButton
        title={text.no}
        description={text.noDescription}
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/anafylaxia/aftercare")}
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
