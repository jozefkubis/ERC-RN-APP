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
        title="Záchranná zdravotná služba a transport"
        description="Pri prednemocničnej resuscitácii je základom kvalitná KPR na mieste udalosti; transport počas KPR má mať jasnú indikáciu."
        urgent
      />

      <HeroCard
        eyebrow="Praktické pravidlo"
        title="Resuscitujte primárne na mieste"
        description="Pacienta počas prebiehajúcej resuscitácie netransportujte, pokiaľ neexistuje vhodná indikácia, napríklad premostenie k liečbe v nemocnici."
        iconName="location"
        danger
      />

      <ContentCard
        title="Kedy zvažovať transport počas KPR"
        iconName="navigate-outline"
        tone="warning"
        items={[
          "Transportujte len pri jasnej indikácii a vopred určenom cieli.",
          "Typickou indikáciou môže byť premostenie k liečbe dostupnej až v nemocnici.",
          "Počas rozhodovania udržujte kvalitu kompresií, ventilácie a defibrilácie.",
        ]}
      />

      <ContentCard
        title="Ak transportujete počas resuscitácie"
        iconName="construct-outline"
        tone="info"
        items={[
          "Zvážte zariadenie na mechanické kompresie hrudníka.",
          "Zvážte získanie invazívneho arteriálneho krvného tlaku už v prednemocničnom prostredí, ak je to možné.",
          "Invazívny tlak môže pomôcť usmerniť resuscitáciu aj poresuscitačnú starostlivosť.",
        ]}
      />

      <ContentCard
        title="Debriefing a kvalita"
        iconName="analytics-outline"
        items={[
          "Systémy ZZS by mali používať registre udalostí.",
          "Využívajte údaje zo zariadení, napríklad z defibrilátorov.",
          "Použite dáta na debriefing a neustále zlepšovanie kvality.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý BLS"
        description="Základná resuscitácia v prednemocničnom prostredí"
        iconName="heart-outline"
        variant="light"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/bls/step1")
        }
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS"
        description="Rozšírená resuscitácia pri dostupnom profesionálnom tíme"
        iconName="pulse-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
