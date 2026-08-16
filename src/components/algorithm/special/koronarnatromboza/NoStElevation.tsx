import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "ROSC bez ST elevácií",
    title: "Zhodnoťte nestabilitu a ischémiu",
    description:
      "Neprítomnosť ST elevácií sama osebe neurčuje potrebu okamžitej koronarografie.",
    question:
      "Je pacient hemodynamicky nestabilný alebo má známky prebiehajúcej ischémie?",
    immediateTitle: "Áno – zvážte okamžitú koronarografiu",
    immediateItems: [
      "Vykonajte koronarografiu a perkutánnu koronárnu intervenciu, ak je potrebná.",
    ],
    delayedTitle: "Nie – urgentnú katetrizáciu nevykonávajte rutinne",
    delayedItems: [
      "U stabilného pacienta bez príznakov ischémie možno vyšetrenie odložiť, ak neexistuje vysoká pravdepodobnosť akútnej koronárnej oklúzie.",
    ],
    alternativeTitle: "Posúďte inú príčinu",
    alternativeItems: [
      "Ak klinický kontext naznačuje alternatívnu etiológiu zastavenia krvného obehu, posúďte nekoronárne príčiny.",
    ],
  },
  en: {
    badge: "ROSC without ST-elevation",
    title: "Assess instability and ischaemia",
    description:
      "The absence of ST-elevation alone does not determine the need for immediate coronary angiography.",
    question:
      "Is the patient haemodynamically unstable or showing signs of ongoing ischaemia?",
    immediateTitle: "Yes – consider immediate coronary angiography",
    immediateItems: [
      "Perform coronary angiography and percutaneous coronary intervention if required.",
    ],
    delayedTitle: "No – do not perform urgent catheterisation routinely",
    delayedItems: [
      "In a stable patient without signs of ischaemia, evaluation can be delayed if there is no high probability of acute coronary occlusion.",
    ],
    alternativeTitle: "Assess for another cause",
    alternativeItems: [
      "Assess for non-coronary causes if the clinical context suggests an alternative aetiology of the cardiac arrest.",
    ],
  },
};

export default function NoStElevation() {
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

      <ContentCard
        title={text.immediateTitle}
        iconName="flash-outline"
        tone="danger"
        items={text.immediateItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.delayedTitle}
        iconName="time-outline"
        items={text.delayedItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.alternativeTitle}
        iconName="search-outline"
        tone="info"
        items={text.alternativeItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
