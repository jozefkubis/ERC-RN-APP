import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Špeciálne prostredie"
        title="Topenie"
        description="Pri topení je prioritou bezpečnosť záchrancu, rýchle vytiahnutie z vody a včasná ventilácia."
        urgent
      />

      <HeroCard
        eyebrow="Prvý krok"
        title="Začnite 5 vdychmi"
        description="Ak je k dispozícii, použite 100 % inspirovaný kyslík a potom pokračujte štandardným protokolom KPR."
        iconName="water"
        danger
      />

      <ContentCard
        title="Bezpečná záchrana"
        iconName="shield-checkmark-outline"
        tone="warning"
        items={[
          "Záchrancovia a prví zasahujúci majú uprednostniť vlastnú bezpečnosť.",
          "Použite najbezpečnejšiu záchrannú techniku, ktorú bezpečne zvládnete.",
          "Použite záchranný materiál a plávacie zariadenia, na ktorých použitie ste vyškolení.",
        ]}
      />

      <ContentCard
        title="Vytiahnite obeť z vody"
        iconName="arrow-up-circle-outline"
        items={[
          "Svedkovia udalosti majú zavolať odbornú pomoc čo najskôr.",
          "Imobilizácia chrbtice vo vode nemá zdržiavať vytiahnutie obete, keď je potrebná resuscitácia.",
          "Po vytiahnutí čo najskôr skontrolujte dýchanie a začnite resuscitačný postup.",
        ]}
      />

      <ContentCard
        title="Ventilujte účinne"
        iconName="medical-outline"
        tone="info"
        items={[
          "Použite pomôcky na zabezpečenie priechodnosti dýchacích ciest a ventiláciu, ak ste primerane vyškolení.",
          "Postupne zvyšujte inspiračný tlak len podľa potreby.",
          "Vyhnite sa zbytočne vysokému tlaku, aby ste znížili riziko nafúknutia žalúdka.",
        ]}
      />

      <ContentCard
        title="Ak resuscitácia nie je úspešná"
        iconName="git-branch-outline"
        tone="danger"
        items={[
          "Zvážte eKPR podľa miestnych protokolov, ak počiatočná resuscitácia nie je úspešná.",
          "Dodržte odporúčania pre hypotermiu.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý BLS"
        description="Pokračovať štandardným protokolom KPR"
        iconName="heart-outline"
        variant="light"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/bls/step1")
        }
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS"
        description="Rozšírená resuscitácia po úvodných vdychoch a začatí KPR"
        iconName="pulse-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />

      <FlowActionButton
        title="Otvoriť hypotermiu"
        description="Postup pri náhodnom podchladení a zastavení obehu"
        iconName="snow-outline"
        variant="light"
        onPress={() => router.push("/algorithms/special/hypotermia/intro")}
      />
    </AlgorithmScreen>
  );
}
