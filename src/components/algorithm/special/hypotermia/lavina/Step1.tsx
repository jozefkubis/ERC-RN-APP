import AvaLifeLink from "@/src/components/algorithm/special/hypotermia/lavina/AvaLifeLink";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Záchrana z lavíny",
    description:
      "Pri rozhodovaní o začatí KPR zohľadnite okolnosti zasypania a stav pacienta.",
    decisionTitle: "Rozhodnutie o začatí KPR",
    decisionLead: "Pri začatí KPR sa riaďte týmito tromi faktormi:",
    decisionItems: [
      "Teplota telesného jadra.",
      "Dĺžka zavalenia.",
      "Priechodnosť dýchacích ciest.",
    ],
    useTitle: "Kedy zvážiť tento postup",
    useItems: [
      "Pri nehode s viacerými osobami zasypanými v lavíne.",
      "Ak sú na mieste iba poskytovatelia základnej životnej podpory (BLS).",
      "Ak počet záchrancov nie je dostatočný na súčasnú starostlivosť o všetkých zasypaných.",
    ],
  },
  en: {
    badge: "Step 1",
    title: "Avalanche rescue",
    description:
      "When deciding whether to start CPR, consider the circumstances of burial and the patient's condition.",
    decisionTitle: "Decision to start CPR",
    decisionLead: "Base the initiation of CPR on these three factors:",
    decisionItems: [
      "Core body temperature.",
      "Burial time.",
      "Airway patency.",
    ],
    useTitle: "When to consider this pathway",
    useItems: [
      "In an avalanche accident with multiple buried people.",
      "If only basic life support (BLS) providers are on scene.",
      "If there are not enough rescuers to care for all buried people at the same time.",
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
        urgent
        themeMode={themeMode}
      />

      <ContentCard
        title={text.decisionTitle}
        iconName="heart-outline"
        tone="danger"
        lead={text.decisionLead}
        items={text.decisionItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <AvaLifeLink />

      <ContentCard
        title={text.useTitle}
        iconName="people-outline"
        tone="info"
        items={text.useItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
