import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Špeciálne prostredie",
    title: "Záchranná zdravotná služba a transport",
    description:
      "Pri prednemocničnej resuscitácii je základom kvalitná KPR na mieste udalosti. Transport počas KPR musí mať jasnú indikáciu.",
    sceneEyebrow: "Praktické pravidlo",
    sceneTitle: "Resuscitujte primárne na mieste",
    sceneDescription:
      "Pacienta počas prebiehajúcej resuscitácie netransportujte, pokiaľ neexistuje vhodná indikácia, napríklad premostenie k liečbe v nemocnici.",
    transportTitle: "Kedy zvažovať transport počas KPR",
    transportItems: [
      "Transportujte len pri jasnej indikácii a do vopred určeného cieľového pracoviska.",
      "Indikáciou môže byť premostenie k liečbe dostupnej až v nemocnici.",
      "Počas rozhodovania udržujte kvalitu kompresií, ventilácie a defibrilácie.",
    ],
    ongoingTitle: "Ak transportujete počas resuscitácie",
    ongoingItems: [
      "Zvážte mechanickú KPR.",
      "Ak je to možné, zvážte invazívne meranie arteriálneho krvného tlaku už v prednemocničnom prostredí.",
      "Invazívny tlak môže pomôcť usmerniť resuscitáciu aj poresuscitačnú starostlivosť.",
    ],
    qualityTitle: "Debriefing a kvalita",
    qualityItems: [
      "Systémy ZZS by mali používať registre udalostí.",
      "Využívajte údaje zo zariadení, napríklad z defibrilátorov.",
      "Použite údaje na debriefing a neustále zlepšovanie kvality.",
    ],
    blsTitle: "Otvoriť dospelý BLS",
    blsDescription: "Základná resuscitácia v prednemocničnom prostredí",
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription:
      "Rozšírená resuscitácia pri dostupnom profesionálnom tíme",
  },
  en: {
    badge: "Special setting",
    title: "Emergency medical services and transport",
    description:
      "High-quality CPR at the scene is the foundation of pre-hospital resuscitation. Transport during CPR must have a clear indication.",
    sceneEyebrow: "Practical rule",
    sceneTitle: "Resuscitate primarily at the scene",
    sceneDescription:
      "Do not transport a patient during ongoing resuscitation unless there is an appropriate indication, such as bridging to in-hospital treatment.",
    transportTitle: "When to consider transport during CPR",
    transportItems: [
      "Transport only for a clear indication and to a predetermined destination hospital.",
      "An indication may be bridging to treatment that is only available in hospital.",
      "Maintain the quality of chest compressions, ventilation and defibrillation while making the decision.",
    ],
    ongoingTitle: "If transporting during resuscitation",
    ongoingItems: [
      "Consider mechanical CPR.",
      "If feasible, consider obtaining invasive arterial blood pressure in the pre-hospital setting.",
      "Invasive blood pressure may help guide resuscitation and post-resuscitation care.",
    ],
    qualityTitle: "Debriefing and quality",
    qualityItems: [
      "EMS systems should use cardiac arrest registries.",
      "Use data provided by equipment, such as defibrillators.",
      "Use the data for debriefing and continuous quality improvement.",
    ],
    blsTitle: "Open adult BLS",
    blsDescription: "Basic life support in the pre-hospital setting",
    alsTitle: "Open adult ALS",
    alsDescription:
      "Advanced life support when a professional team is available",
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
        eyebrow={text.sceneEyebrow}
        title={text.sceneTitle}
        description={text.sceneDescription}
        iconName="location"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.transportTitle}
        iconName="navigate-outline"
        tone="warning"
        items={text.transportItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.ongoingTitle}
        iconName="construct-outline"
        tone="info"
        items={text.ongoingItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.qualityTitle}
        iconName="analytics-outline"
        items={text.qualityItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.blsTitle}
        description={text.blsDescription}
        iconName="heart-outline"
        variant="light"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/bls/step1")
        }
      />

      <FlowActionButton
        title={text.alsTitle}
        description={text.alsDescription}
        iconName="pulse-outline"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
