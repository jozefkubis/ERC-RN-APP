import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "C",
    title: "Vyšetrenie a stabilizácia krvného obehu",
    description: "Circulation",
    recognitionTitle: "Rozpoznanie",
    recognition: [
      "Šok a jeho typ",
      "Pulzová frekvencia, objem pulzu, periférna perfúzia, krvný tlak, preload, rytmus",
    ],
    monitoringTitle: "Monitoring a vyšetrenia",
    monitoring: [
      "EKG monitoring, NIBP",
      "12-zvodové EKG, POCUS, vyšetrenie krvi pri lôžku vrátane laktátu, diuréza",
    ],
    therapyTitle: "Liečba a zváženie",
    therapy: [
      "IV/IO, izotonické kryštaloidy, krvné produkty",
      "Vazopresory, inotropiká",
      "Liečba arytmií",
      "Špecifické intervencie podľa typu šoku, vrátane ECMO",
    ],
    goalTitle: "Cieľ",
    goal: [
      "Adekvátna perfúzia orgánov, systolický krvný tlak a stredný krvný tlak (MAP) nad 5. percentilom",
    ],
    highRiskTitle: "Vysoké riziko zastavenia krvného obehu",
    highRisk: ["Vykrvácanie, tamponáda"],
  },
  en: {
    badge: "C",
    title: "Circulation assessment and stabilisation",
    description: "Circulation",
    recognitionTitle: "Recognition",
    recognition: [
      "Shock and its type",
      "Heart rate, pulse volume, peripheral perfusion, blood pressure, preload, rhythm",
    ],
    monitoringTitle: "Monitoring and investigations",
    monitoring: [
      "ECG monitoring, NIBP",
      "12-lead ECG, POCUS, point-of-care blood testing including lactate, urine output",
    ],
    therapyTitle: "Treatment and considerations",
    therapy: [
      "IV/IO, isotonic crystalloids, blood products",
      "Vasopressors, inotropes",
      "Treatment of arrhythmias",
      "Specific interventions according to the type of shock, including ECMO",
    ],
    goalTitle: "Goal",
    goal: [
      "Adequate organ perfusion, systolic blood pressure and mean arterial pressure (MAP) above the 5th percentile",
    ],
    highRiskTitle: "High risk of cardiac arrest",
    highRisk: ["Exsanguination, tamponade"],
  },
};

export default function CCirculationPals() {
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
