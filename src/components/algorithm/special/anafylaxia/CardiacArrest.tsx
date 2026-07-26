import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function CardiacArrest() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Zastavenie obehu"
        title="Anafylaxia počas KPR"
        description="Postupujte podľa štandardného ALS algoritmu a súčasne agresívne liečte anafylaxiu ako reverzibilnú príčinu."
        urgent
      />

      <HeroCard
        eyebrow="Bezodkladne"
        title="Začnite kvalitnú KPR"
        description="Minimalizujte prerušenia kompresií, pripojte defibrilátor a postupujte podľa zisteného rytmu."
        iconName="heart"
        danger
      />

      <ContentCard
        title="Úpravy pri anafylaxii"
        iconName="medical-outline"
        tone="danger"
        items={[
          "Podávajte adrenalín 1 mg i.v./i.o. podľa štandardného ALS algoritmu",
          "Zabezpečte dýchacie cesty včas; opuch ich môže rýchlo zhoršiť",
          "Ventilujte 100 % kyslíkom a skontrolujte účinnosť ventilácie",
          "Podávajte rýchle bolusy i.v./i.o. kryštaloidu a sledujte odpoveď",
          "Odstráňte spúšťač, ak je to okamžite možné",
        ]}
      />

      <ContentCard
        title="Myslite na reverzibilnú príčinu"
        iconName="search-outline"
        tone="info"
        items={[
          "Ťažká vazodilatácia a presun tekutiny spôsobujú výraznú relatívnu hypovolémiu",
          "Opakovane kontrolujte dýchacie cesty, ventiláciu a obeh",
          "Po ROSC pokračujte v liečbe anafylaxie a intenzívnom monitorovaní",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS algoritmus"
        description="Pokračovať na úvodné kroky rozšírenej resuscitácie"
        iconName="arrow-redo-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />

      <FlowActionButton
        title="ROSC"
        description="Pokračujte v stabilizácii po obnovení obehu"
        iconName="checkmark-circle-outline"
        variant="light"
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/aftercare")
        }
      />
    </AlgorithmScreen>
  );
}
