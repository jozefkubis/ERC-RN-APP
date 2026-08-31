import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Rozhodnutie",
    title: "Je maternica veľká?",
    description:
      "Rozhodnutie urobte klinicky počas prebiehajúcej KPR. Nečakajte na presné určenie týždňa gravidity.",
    ongoingTitle: "Počas rozhodovania stále robte",
    ongoingItems: [
      "Pokračujte vo vysokokvalitnej KPR a minimalizujte prerušenia.",
      "Udržujte manuálny posun maternice doľava, ak sú dostupní aspoň dvaja členovia tímu.",
      "Zaveďte i.v./i.o. vstup ideálne na hornej končatine alebo v oblasti nad bránicou.",
      "Dýchacie cesty zabezpečuje skúsená osoba; riziko aspirácie a zlyhania intubácie je vyššie.",
    ],
    question: "Gravidita nad 20 týždňov alebo fundus nad pupkom?",
    questionDescription:
      "Ak áno, resuscitačná hysterotómia je časovo kritická intervencia na zlepšenie resuscitácie matky.",
    yes: "Áno",
    no: "Nie",
    yesDescription: "Prejsť na prípravu hysterotómie",
    noDescription: "Pokračovať štandardným ALS postupom",
  },
  en: {
    badge: "Decision",
    title: "Is the uterus enlarged?",
    description:
      "Make the decision clinically during ongoing CPR. Do not wait for precise confirmation of gestational age.",
    ongoingTitle: "Continue these actions while deciding",
    ongoingItems: [
      "Continue high-quality CPR and minimise interruptions.",
      "Maintain manual left uterine displacement when at least two team members are available.",
      "Establish IV/IO access, ideally in an upper limb or above the diaphragm.",
      "Airway management should be performed by an experienced person; the risks of aspiration and failed intubation are increased.",
    ],
    question: "Gestation over 20 weeks or uterine fundus above the umbilicus?",
    questionDescription:
      "If yes, resuscitative hysterotomy is a time-sensitive intervention to improve maternal resuscitation.",
    yes: "Yes",
    no: "No",
    yesDescription: "Go to hysterotomy preparation",
    noDescription: "Continue with standard ALS",
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
        urgent
      />

      <ContentCard
        title={text.ongoingTitle}
        iconName="repeat-outline"
        tone="info"
        items={text.ongoingItems}
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
        onPress={() => router.push("/algorithms/special/pregnet/step3")}
      />
      <NoButton
        title={text.no}
        description={text.noDescription}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
