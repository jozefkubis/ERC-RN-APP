import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useRouter } from "expo-router";

export default function Obesity() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Špeciálna skupina pacientov"
        title="Resuscitácia obéznych pacientov"
        description="Nie je potrebná odchýlka od štandardného resuscitačného postupu."
      />

      <HeroCard
        eyebrow="Odporúčanie ERC 2025"
        title="Postupujte štandardne"
        description="Obézni pacienti by mali dostať štandardnú resuscitačnú liečbu podľa BLS alebo ALS algoritmu."
        iconName="body-outline"
      />

      <FlowActionButton
        title="Otvoriť BLS"
        description="Základná resuscitácia dospelých"
        iconName="heart-outline"
        variant="light"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/bls/step1")
        }
      />

      <FlowActionButton
        title="Otvoriť ALS"
        description="Rozšírená resuscitácia dospelých"
        iconName="pulse-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
