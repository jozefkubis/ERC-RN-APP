import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function OngoingCPR() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Bez trvalého ROSC"
        title="Transport počas prebiehajúcej KPR"
        description="Ak sa pokračovanie resuscitácie nepovažuje za márne, smerujte pacienta do centra schopného poskytnúť ďalšiu invazívnu alebo extrakorporálnu liečbu."
        urgent
      />

      <HeroCard
        eyebrow="Prebiehajúca resuscitácia"
        title="Transportujte do PKI centra"
        description="Transportujte pacienta bez trvalého ROSC s prebiehajúcou KPR, pokiaľ sa pokračovanie resuscitácie nepovažuje za márne."
        iconName="navigate"
        danger
      />

      <ContentCard
        title="V centre zvážte"
        iconName="medkit-outline"
        tone="info"
        items={[
          "Koronárnu angiografiu.",
          "eKPR podľa dostupných zdrojov a odbornosti tímu.",
        ]}
      />
    </AlgorithmScreen>
  );
}
