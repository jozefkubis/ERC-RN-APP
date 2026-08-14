import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Zastavenie obehu",
    title: "Anafylaxia počas KPR",
    description:
      "Postupujte podľa štandardného ALS algoritmu a súčasne agresívne liečte anafylaxiu ako reverzibilnú príčinu.",
    heroEyebrow: "Bezodkladne",
    heroTitle: "Začnite kvalitnú KPR",
    heroDescription:
      "Minimalizujte prerušenia kompresií, pripojte defibrilátor a postupujte podľa zisteného rytmu.",
    changesTitle: "Úpravy pri anafylaxii",
    changesItems: [
      "Podávajte adrenalín 1 mg i.v./i.o. podľa štandardného ALS algoritmu",
      "Zabezpečte dýchacie cesty včas; opuch ich môže rýchlo zhoršiť",
      "Ventilujte 100 % kyslíkom a skontrolujte účinnosť ventilácie",
      "Podávajte rýchle bolusy i.v./i.o. kryštaloidu a sledujte odpoveď",
      "Odstráňte spúšťač, ak je to okamžite možné",
    ],
    causeTitle: "Myslite na reverzibilnú príčinu",
    causeItems: [
      "Ťažká vazodilatácia a presun tekutiny spôsobujú výraznú relatívnu hypovolémiu",
      "Opakovane kontrolujte dýchacie cesty, ventiláciu a obeh",
      "Po ROSC pokračujte v liečbe anafylaxie a intenzívnom monitorovaní",
    ],
    alsTitle: "Otvoriť dospelý ALS algoritmus",
    alsDescription: "Pokračovať na úvodné kroky rozšírenej resuscitácie",
    roscTitle: "ROSC",
    roscDescription: "Pokračujte v stabilizácii po obnovení obehu",
  },
  en: {
    badge: "Cardiac arrest",
    title: "Anaphylaxis during CPR",
    description:
      "Follow the standard ALS algorithm and treat anaphylaxis aggressively as a reversible cause at the same time.",
    heroEyebrow: "Immediately",
    heroTitle: "Start high-quality CPR",
    heroDescription:
      "Minimise interruptions in compressions, attach a defibrillator, and follow the detected rhythm.",
    changesTitle: "Modifications for anaphylaxis",
    changesItems: [
      "Give adrenaline 1 mg IV/IO according to the standard ALS algorithm",
      "Secure the airway early; swelling can deteriorate rapidly",
      "Ventilate with 100 % oxygen and check ventilation effectiveness",
      "Give rapid IV/IO crystalloid boluses and monitor the response",
      "Remove the trigger if immediately possible",
    ],
    causeTitle: "Think reversible cause",
    causeItems: [
      "Severe vasodilation and fluid shift cause marked relative hypovolaemia",
      "Repeatedly check airway, ventilation, and circulation",
      "After ROSC, continue anaphylaxis treatment and intensive monitoring",
    ],
    alsTitle: "Open adult ALS algorithm",
    alsDescription: "Continue with the first steps of advanced life support",
    roscTitle: "ROSC",
    roscDescription: "Continue stabilisation after return of circulation",
  },
};

export default function CardiacArrest() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        urgent
        themeMode={themeMode}
      />

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="heart"
        danger
        themeMode={themeMode}
      />

      <ContentCard
        title={text.changesTitle}
        iconName="medical-outline"
        tone="danger"
        items={text.changesItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.causeTitle}
        iconName="search-outline"
        tone="info"
        items={text.causeItems}
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

      <FlowActionButton
        title={text.roscTitle}
        description={text.roscDescription}
        iconName="checkmark-circle-outline"
        variant="light"
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/anafylaxia/aftercare")}
      />
    </AlgorithmScreen>
  );
}
