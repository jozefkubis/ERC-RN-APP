import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function TraumaStep3() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 3"
        title="Ďalší postup po ROSC"
        description="Pokračujte podľa toho, či sa pacient nachádza v prednemocničnom alebo nemocničnom prostredí."
      />

      <HeroCard
        eyebrow="Prednemocnične"
        title="Okamžitý transport"
        description="Transportujte pacienta do vhodnej nemocnice."
        iconName="car-outline"
      />

      <HeroCard
        eyebrow="V nemocnici"
        title="Damage control surgery"
        description="Pokračujte v damage control resuscitácii."
        iconName="medkit-outline"
      />
    </AlgorithmScreen>
  );
}
