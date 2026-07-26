import NoButton from "@/src/components/ui/NoButton";
import YesButton from "@/src/components/ui/YesButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step3() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 3"
        title="Bez odpovede po 5 minútach"
        description="Opakujte i.m. adrenalín, pokračujte v podpore ABC a aktívne korigujte hypovolémiu."
        urgent
      />

      <HeroCard
        eyebrow="Druhá i.m. dávka"
        title="Zopakujte adrenalín"
        description="Podajte rovnakú i.m. dávku po 5 minútach, ak sa stav nezlepšil."
        iconName="repeat"
        danger
      />

      <ContentCard
        title="Pokračujte bez prerušenia"
        iconName="pulse"
        tone="info"
        items={[
          "Znovu zhodnoťte A, B, C, D a E",
          "Pokračujte vo vysokoprietokovom kyslíku a monitorovaní",
          "Zopakujte bolus kryštaloidu podľa klinickej odpovede",
          "Potvrďte, že bol privolaný resuscitačný tím alebo ZZS",
        ]}
      />

      <FlowConnector />

      <DecisionCard
        question="Pretrvávajú problémy B alebo C po dvoch i.m. dávkach?"
        description="Pretrvávajúca dychová alebo obehová nestabilita znamená refraktérnu anafylaxiu."
      />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/refractory")
        }
      />
      <NoButton
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
