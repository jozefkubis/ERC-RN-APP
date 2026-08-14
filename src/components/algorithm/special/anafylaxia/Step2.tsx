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
    badge: "Krok 2",
    title: "Okamžitá liečba",
    description:
      "Liečbu neodkladajte. I.m. adrenalín je liekom prvej voľby a podáva sa pri prvom podozrení na anafylaxiu.",
    heroEyebrow: "Ihneď intramuskulárne",
    heroTitle: "Adrenalín 500 mikrogramov",
    heroDescription:
      "0,5 ml roztoku 1 mg/ml (1 : 1 000) do anterolaterálnej strany strednej tretiny stehna. Dávka pre dospelého a dieťa nad 12 rokov.",
    childrenTitle: "Dávka pre deti",
    childrenLead: "Adrenalín 1 mg/ml (1 : 1 000), intramuskulárne do stehna:",
    childrenItems: [
      "6 - 12 rokov: 300 mikrogramov (0,3 ml)",
      "6 mes. - 6 rokov: 150 mikrogramov (0,15 ml)",
      "Menej ako 6 mesiacov: 100 - 150 mikrogramov (0,1 - 0,15 ml)",
      "Hmotnostná dávka: 0,01 mg/kg, maximálne 0,5 mg",
      "Uvedené dávky platia iba pre i.m. podanie",
    ],
    parallelTitle: "Súbežné kroky",
    parallelItems: [
      "Privolajte resuscitačný tím alebo ZZS",
      "Odstráňte alebo zastavte spúšťač, ak je to okamžite možné",
      "Pacienta uložte naplocho; pri dychovej tiesni môže sedieť, tehotnú uložte na ľavý bok",
      "Zabezpečte dýchacie cesty, podajte vysokoprietokový kyslík a zaistite i.v./i.o. vstup",
      "Monitorujte SpO2, EKG a krvný tlak",
    ],
    fluidsTitle: "Tekutinová resuscitácia",
    fluidsItems: [
      "Podajte včas bolus i.v. kryštaloidu a sledujte odpoveď",
      "Dospelý: 500 - 1 000 ml",
      "Dieťa: 10 ml/kg",
    ],
    question: "Zlepšenie do 5 minút?",
    questionDescription:
      "Znovu posúďte najmä pretrvávanie problémov s dýchaním alebo obehom.",
    yes: "Áno",
    no: "Nie",
  },
  en: {
    badge: "Step 2",
    title: "Immediate treatment",
    description:
      "Do not delay treatment. IM adrenaline is the first-line medicine and is given at the first suspicion of anaphylaxis.",
    heroEyebrow: "Immediately intramuscular",
    heroTitle: "Adrenaline 500 micrograms",
    heroDescription:
      "0.5 ml of 1 mg/ml solution (1 : 1 000) into the anterolateral mid-thigh. Dose for an adult and a child over 12 years.",
    childrenTitle: "Dose for children",
    childrenLead: "Adrenaline 1 mg/ml (1 : 1 000), intramuscular into the thigh:",
    childrenItems: [
      "6 - 12 years: 300 micrograms (0.3 ml)",
      "6 months - 6 years: 150 micrograms (0.15 ml)",
      "Less than 6 months: 100 - 150 micrograms (0.1 - 0.15 ml)",
      "Weight-based dose: 0.01 mg/kg, maximum 0.5 mg",
      "These doses apply only to IM administration",
    ],
    parallelTitle: "Parallel actions",
    parallelItems: [
      "Call the resuscitation team or EMS",
      "Remove or stop the trigger if immediately possible",
      "Lay the patient flat; they may sit if breathing is difficult, and place a pregnant patient on the left side",
      "Secure the airway, give high-flow oxygen, and obtain IV/IO access",
      "Monitor SpO2, ECG, and blood pressure",
    ],
    fluidsTitle: "Fluid resuscitation",
    fluidsItems: [
      "Give an early IV crystalloid bolus and monitor the response",
      "Adult: 500 - 1 000 ml",
      "Child: 10 ml/kg",
    ],
    question: "Improvement within 5 minutes?",
    questionDescription:
      "Reassess especially for ongoing breathing or circulation problems.",
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
        urgent
        themeMode={themeMode}
      />

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="medical"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.childrenTitle}
        iconName="people-outline"
        tone="info"
        lead={text.childrenLead}
        items={text.childrenItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.parallelTitle}
        iconName="people"
        tone="info"
        items={text.parallelItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.fluidsTitle}
        iconName="water-outline"
        items={text.fluidsItems}
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
        onPress={() => router.push("/algorithms/special/anafylaxia/aftercare")}
      />
      <NoButton
        title={text.no}
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/anafylaxia/step3")}
      />
    </AlgorithmScreen>
  );
}
