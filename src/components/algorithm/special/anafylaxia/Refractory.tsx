import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Refractory() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Refraktérna"
        title="Refraktérna anafylaxia"
        description="Pretrvávanie problémov s dýchaním alebo obehom napriek dvom správne podaným i.m. dávkam adrenalínu."
        urgent
      />

      <HeroCard
        eyebrow="Špecializovaná liečba"
        title="Začnite i.v. infúziu adrenalínu"
        description="Len skúsený špecialista v primerane monitorovanom prostredí. Infúziu titrujte podľa klinickej odpovede."
        iconName="medkit"
        danger
      />

      <ContentCard
        title="Kým sa pripraví infúzia"
        iconName="timer-outline"
        tone="danger"
        items={[
          "Pokračujte v i.m. adrenalíne každých 5 minút",
          "Privolajte seniornú a intenzivistickú pomoc",
          "Nepodávajte i.v. adrenalín ako nekontrolovaný bolus",
        ]}
      />

      <ContentCard
        title="Optimalizujte ABC"
        iconName="options-outline"
        tone="info"
        items={[
          "Zabezpečte dýchacie cesty včas a podávajte 100 % kyslík",
          "Pokračujte v bolusoch kryštaloidu podľa odpovede",
          "Kontinuálne monitorujte EKG, SpO₂ a krvný tlak",
          "Pri liečbe betablokátorom a refraktérnom šoku zvážte glukagón podľa lokálneho protokolu",
        ]}
      />

      <FlowActionButton
        title="Stav sa stabilizoval"
        description="Pokračujte v monitorovaní a následnej starostlivosti"
        iconName="checkmark-circle-outline"
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/aftercare")
        }
      />

      <FlowActionButton
        title="Zastavenie obehu"
        description="Okamžite začnite štandardný ALS postup"
        iconName="heart-dislike-outline"
        variant="danger"
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/cardiac-arrest")
        }
      />
    </AlgorithmScreen>
  );
}
