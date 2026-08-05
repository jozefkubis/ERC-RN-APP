import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step3() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Časovo kritické"
        title="Pripravte resuscitačnú hysterotómiu"
        description="Pri zastavení obehu u pacientky nad 20. týždeň gravidity alebo s fundom nad pupkom pripravte výkon včas a vykonajte ho čo najskôr skúseným tímom."
        urgent
      />

      <HeroCard
        eyebrow="Cieľ"
        title="Zachrániť matku"
        description="Stabilizácia matky stabilizuje aj plod. Počas prípravy a výkonu pokračujte v KPR a ALS bez zbytočných prestávok."
        iconName="medical"
        danger
      />

      <ContentCard
        title="4P k 4H a 4T"
        iconName="search-outline"
        tone="warning"
        lead="Hľadajte špecifické reverzibilné príčiny tehotenstva a peripartálneho obdobia:"
        items={[
          "Preeklampsia a eklampsia.",
          "Popôrodná alebo puerperálna sepsa.",
          "Komplikácie placenty a maternice.",
          "Peripartálna kardiomyopatia.",
        ]}
      />

      <ContentCard
        title="Lieky a špecifické zásahy"
        iconName="medkit-outline"
        items={[
          "Kalcium chlorid 10 ml i.v. 10 % pri predávkovaní Mg, nízkom kalciu alebo hyperkaliémii.",
          "Magnézium 4 g i.v. pri eklampsii; 2 g i.v. pri polymorfnej VT.",
          "Kyselina tranexamová 1 g i.v. pri krvácaní.",
          "Pripravte sa na veľké pôrodnícke krvácanie po ROSC alebo po výkone.",
        ]}
      />

      <ContentCard
        title="Po ROSC"
        iconName="checkmark-circle-outline"
        tone="info"
        items={[
          "Pokračujte v multidisciplinárnej poresuscitačnej starostlivosti.",
          "Stabilizujte matku, priebežne riešte príčinu zastavenia obehu a pripravte neonatalógov na starostlivosť o novorodenca.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS"
        description="Pokračovať vo všeobecnom ALS algoritme popri úpravách pre tehotnú"
        iconName="arrow-redo-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
