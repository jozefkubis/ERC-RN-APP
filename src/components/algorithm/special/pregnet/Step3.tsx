import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Časovo kritické",
    title: "Pripravte resuscitačnú hysterotómiu",
    description:
      "Pri zastavení obehu u pacientky nad 20. týždeň gravidity alebo s fundom nad pupkom pripravte výkon včas a vykonajte ho čo najskôr skúseným tímom.",
    goalEyebrow: "Cieľ",
    goalTitle: "Zachrániť matku",
    goalDescription:
      "Stabilizácia matky stabilizuje aj plod. Počas prípravy a výkonu pokračujte v KPR a ALS bez zbytočných prestávok.",
    causesTitle: "4P k 4H a 4T",
    causesLead:
      "Hľadajte špecifické reverzibilné príčiny tehotenstva a peripartálneho obdobia:",
    causesItems: [
      "Preeklampsia a eklampsia.",
      "Popôrodná alebo puerperálna sepsa.",
      "Komplikácie placenty a maternice.",
      "Peripartálna kardiomyopatia.",
    ],
    treatmentTitle: "Lieky a špecifické zásahy",
    treatmentItems: [
      "Kalcium chlorid 10 ml i.v. 10 % pri predávkovaní Mg, nízkom kalciu alebo hyperkaliémii.",
      "Magnézium 4 g i.v. pri eklampsii; 2 g i.v. pri polymorfnej VT.",
      "Kyselina tranexamová 1 g i.v. pri krvácaní.",
      "Pripravte sa na veľké pôrodnícke krvácanie po ROSC alebo po výkone.",
    ],
    roscTitle: "Po ROSC",
    roscItems: [
      "Pokračujte v multidisciplinárnej poresuscitačnej starostlivosti.",
      "Stabilizujte matku, priebežne riešte príčinu zastavenia obehu a pripravte neonatalógov na starostlivosť o novorodenca.",
    ],
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription:
      "Pokračovať vo všeobecnom ALS algoritme popri úpravách pre tehotnú",
  },
  en: {
    badge: "Time-critical",
    title: "Prepare for resuscitative hysterotomy",
    description:
      "For cardiac arrest beyond 20 weeks of gestation or with the uterine fundus above the umbilicus, prepare early and perform the procedure as soon as possible with a skilled team.",
    goalEyebrow: "Goal",
    goalTitle: "Save the mother",
    goalDescription:
      "Stabilising the mother also stabilises the fetus. Continue CPR and ALS without unnecessary interruptions during preparation and the procedure.",
    causesTitle: "4Ps in addition to the 4Hs and 4Ts",
    causesLead:
      "Look for reversible causes specific to pregnancy and the peripartum period:",
    causesItems: [
      "Pre-eclampsia and eclampsia.",
      "Postpartum or puerperal sepsis.",
      "Placental and uterine complications.",
      "Peripartum cardiomyopathy.",
    ],
    treatmentTitle: "Medicines and specific interventions",
    treatmentItems: [
      "Calcium chloride 10 mL IV 10% for magnesium overdose, low calcium, or hyperkalaemia.",
      "Magnesium 4 g IV for eclampsia; 2 g IV for polymorphic VT.",
      "Tranexamic acid 1 g IV for haemorrhage.",
      "Prepare for major obstetric haemorrhage after ROSC or the procedure.",
    ],
    roscTitle: "After ROSC",
    roscItems: [
      "Continue multidisciplinary post-resuscitation care.",
      "Stabilise the mother, continue treating the cause of cardiac arrest, and prepare the neonatal team to care for the newborn.",
    ],
    alsTitle: "Open adult ALS",
    alsDescription:
      "Continue the general ALS algorithm alongside the modifications for pregnancy",
  },
};

export default function Step3() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
        urgent
      />

      <HeroCard
        eyebrow={text.goalEyebrow}
        title={text.goalTitle}
        description={text.goalDescription}
        iconName="medical"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.causesTitle}
        iconName="search-outline"
        tone="warning"
        lead={text.causesLead}
        items={text.causesItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.treatmentTitle}
        iconName="medkit-outline"
        items={text.treatmentItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.roscTitle}
        iconName="checkmark-circle-outline"
        tone="info"
        items={text.roscItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.alsTitle}
        description={text.alsDescription}
        iconName="arrow-redo-outline"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
