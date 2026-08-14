import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Hypokaliémia",
    title: "Doplňte K+ podľa závažnosti",
    description:
      "Liečbu riaďte hodnotou K+, prítomnosťou symptómov a abnormalitami na EKG. Súčasne hľadajte a korigujte príčinu.",
    heroEyebrow: "Pri ZO spôsobenom hypokaliémiou",
    heroTitle: "KCl i.v. počas KPR",
    heroDescription:
      "Podajte 20 mmol chloridu draselného i.v. počas 2-3 minút, následne 10 mmol počas 2 minút a potom upravte rýchlosť infúzie podľa monitorovanej hladiny K+.",
    riskTitle: "Rozhodnite podľa rizika",
    riskItems: [
      "Zohľadnite závažnosť hypokaliémie, svalovú slabosť, arytmie a EKG abnormality.",
      "Monitorujte EKG a opakovane kontrolujte hladinu K+ pri i.v. substitúcii.",
      "Pri nestabilite alebo závažných EKG zmenách postupujte urgentne a privolajte expertnú pomoc.",
    ],
    electrolytesTitle: "Korigujte elektrolyty",
    electrolytesItems: [
      "Kde je to vhodné, doplňte draslík enterálne alebo intravenózne podľa lokálneho protokolu.",
      "Súčasne napravte deficit horčíka, ktorý môže brániť úprave K+ a podporovať arytmie.",
      "Po stabilizácii upravte príčinu strát K+ a nastavte ďalšie monitorovanie.",
    ],
  },
  en: {
    badge: "Hypokalaemia",
    title: "Replace K+ according to severity",
    description:
      "Guide treatment by K+ level, symptoms, and ECG abnormalities. At the same time, identify and correct the cause.",
    heroEyebrow: "In cardiac arrest caused by hypokalaemia",
    heroTitle: "IV KCl during CPR",
    heroDescription:
      "Give 20 mmol potassium chloride IV over 2-3 minutes, then 10 mmol over 2 minutes, and then adjust the infusion rate according to monitored K+ level.",
    riskTitle: "Decide according to risk",
    riskItems: [
      "Consider severity of hypokalaemia, muscle weakness, arrhythmias, and ECG abnormalities.",
      "Monitor ECG and repeatedly check K+ level during IV replacement.",
      "If unstable or severe ECG changes are present, act urgently and call expert help.",
    ],
    electrolytesTitle: "Correct electrolytes",
    electrolytesItems: [
      "Where appropriate, replace potassium enterally or intravenously according to local protocol.",
      "Correct magnesium deficit at the same time, as it can prevent K+ correction and promote arrhythmias.",
      "After stabilisation, treat the cause of K+ loss and arrange further monitoring.",
    ],
  },
};

export default function Step1() {
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

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="flash"
        danger
        themeMode={themeMode}
      />

      <ContentCard
        title={text.riskTitle}
        iconName="analytics-outline"
        tone="info"
        items={text.riskItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.electrolytesTitle}
        iconName="medkit-outline"
        items={text.electrolytesItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
