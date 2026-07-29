import AvaLifeLink from "@/src/components/algorithm/special/hypotermia/lavina/AvaLifeLink";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 1"
        title="Záchrana z lavíny"
        description="Pri rozhodovaní o začatí KPR zohľadnite okolnosti zasypania a stav pacienta."
        urgent
      />

      <ContentCard
        title="Rozhodnutie o začatí KPR"
        iconName="heart-outline"
        tone="danger"
        lead="Pri začatí KPR sa riaďte týmito tromi faktormi:"
        items={[
          "Teplota telesného jadra.",
          "Dĺžka zavalenia.",
          "Priechodnosť dýchacích ciest.",
        ]}
      />

      <FlowConnector />

      <AvaLifeLink />

      <ContentCard
        title="Kedy zvážiť tento postup"
        iconName="people-outline"
        tone="info"
        items={[
          "Pri nehode s viacerými osobami zasypanými v lavíne.",
          "Ak sú na mieste iba poskytovatelia základnej životnej podpory (BLS).",
          "Ak počet záchrancov nie je dostatočný na súčasnú starostlivosť o všetkých zasypaných.",
        ]}
      />
    </AlgorithmScreen>
  );
}
