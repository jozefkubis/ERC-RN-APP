import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "D",
    title: "Zhodnotenie neurologického stavu",
    description: "Disability",
    recognitionTitle: "Rozpoznanie",
    recognition: [
      "Neurologické zlyhanie",
      "Držanie tela, zreničky, AVPU, pGCS, lateralizácia, tonus, kŕče",
    ],
    monitoringTitle: "Monitoring a vyšetrenia",
    monitoring: ["Glykémia"],
    therapyTitle: "Liečba a zváženie",
    therapy: [
      "Neuroprotektívne stratégie (liečba kŕčov a hypoglykémie, analgézia, sedácia)",
      "Príznaky mozgovej príhody alebo neuroinfekcie u detí",
    ],
    goalTitle: "Cieľ",
    goal: ["Neuroprotekcia"],
    highRiskTitle: "Vysoké riziko zastavenia krvného obehu",
    highRisk: ["Intrakraniálna hypertenzia, hypoglykémia"],
  },
  en: {
    badge: "D",
    title: "Neurological assessment",
    description: "Disability",
    recognitionTitle: "Recognition",
    recognition: [
      "Neurological failure",
      "Posture, pupils, AVPU, pGCS, lateralisation, tone, seizures",
    ],
    monitoringTitle: "Monitoring and investigations",
    monitoring: ["Blood glucose"],
    therapyTitle: "Treatment and considerations",
    therapy: [
      "Neuroprotective strategies (treatment of seizures and hypoglycaemia, analgesia, sedation)",
      "Signs of stroke or neuroinfection in children",
    ],
    goalTitle: "Goal",
    goal: ["Neuroprotection"],
    highRiskTitle: "High risk of cardiac arrest",
    highRisk: ["Intracranial hypertension, hypoglycaemia"],
  },
};

export default function DDisabilityPals() {
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
        title={text.recognitionTitle}
        iconName="search-outline"
        items={text.recognition}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.monitoringTitle}
        iconName="eye-outline"
        items={text.monitoring}
        tone="info"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.therapyTitle}
        iconName="medkit-outline"
        items={text.therapy}
        tone="info"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.goalTitle}
        iconName="flag-outline"
        items={text.goal}
        tone="info"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.highRiskTitle}
        iconName="alert-circle-outline"
        items={text.highRisk}
        tone="warning"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
