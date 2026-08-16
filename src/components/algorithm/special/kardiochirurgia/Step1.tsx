import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Špeciálne prostredie",
    title: "Zastavenie obehu po kardiochirurgii",
    description:
      "Po operácii srdca rýchlo potvrďte zastavenie obehu, využite monitorovanie a pri skorom pooperačnom zastavení pripravte re-sternotómiu.",
    resternotomyEyebrow: "Prvých 5 minút",
    resternotomyTitle: "Re-sternotómia pri operácii do 10 dní",
    resternotomyDescription:
      "Ak je pacient do 10 dní po kardiochirurgii, vykonajte re-sternotómiu do 5 minút bez ohľadu na miesto, kde sa pacient nachádza.",
    confirmTitle: "Potvrďte zastavenie obehu",
    confirmItems: [
      "Potvrďte zastavenie srdca pomocou klinických príznakov.",
      "Hľadajte absenciu pulzácií na arteriálnej krivke.",
      "Zvážte ultrazvuk na identifikáciu reverzibilných príčin.",
    ],
    rhythmTitle: "Upravte rytmový postup",
    rhythmItems: [
      "Pri VF/pVT podajte až 3 po sebe idúce defibrilačné výboje.",
      "Pri asystólii alebo extrémnej bradykardii použite epikardiálnu kardiostimuláciu na maximálny výkon.",
      "Znížte dávku adrenalínu i.v. na 0,05-0,1 mg.",
    ],
    openChestTitle: "Po otvorení hrudníka",
    openChestItems: [
      "Keď je hrudník znovu otvorený, poskytnite priame kompresie srdca.",
      "Pokračujte v cielenej liečbe reverzibilnej príčiny podľa nálezu a tímového plánu.",
    ],
    refractoryTitle: "Pri refraktérnom priebehu",
    refractoryItems: [
      "Zvážte eKPR pri predĺženej resuscitácii alebo pri minimálne invazívnych výkonoch, kde môže byť opätovné otvorenie hrudníka oneskorené.",
    ],
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription: "Použiť všeobecný algoritmus rozšírenej resuscitácie",
  },
  en: {
    badge: "Special setting",
    title: "Cardiac arrest following cardiac surgery",
    description:
      "After cardiac surgery, confirm cardiac arrest rapidly, use available monitoring, and prepare for re-sternotomy in early postoperative cardiac arrest.",
    resternotomyEyebrow: "Within the first 5 minutes",
    resternotomyTitle: "Re-sternotomy if surgery was within 10 days",
    resternotomyDescription:
      "If the patient is within 10 days of cardiac surgery, perform re-sternotomy within 5 minutes regardless of the patient's location.",
    confirmTitle: "Confirm cardiac arrest",
    confirmItems: [
      "Confirm cardiac arrest using clinical signs.",
      "Look for the absence of pulsation on the arterial pressure waveform.",
      "Consider ultrasound to identify reversible causes.",
    ],
    rhythmTitle: "Modify rhythm management",
    rhythmItems: [
      "For VF/pVT, deliver up to 3 consecutive defibrillation shocks.",
      "For asystole or extreme bradycardia, use epicardial pacing at maximum output.",
      "Reduce the IV adrenaline dose to 0.05–0.1 mg.",
    ],
    openChestTitle: "After reopening the chest",
    openChestItems: [
      "Provide open cardiac compressions once the chest is reopened.",
      "Continue targeted treatment of the reversible cause according to the findings and team plan.",
    ],
    refractoryTitle: "For a refractory course",
    refractoryItems: [
      "Consider ECPR for prolonged resuscitation or minimally invasive cases where reopening the chest may be delayed.",
    ],
    alsTitle: "Open adult ALS",
    alsDescription: "Use the general advanced life support algorithm",
  },
};

export default function Step1() {
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
        eyebrow={text.resternotomyEyebrow}
        title={text.resternotomyTitle}
        description={text.resternotomyDescription}
        iconName="time"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.confirmTitle}
        iconName="pulse-outline"
        tone="danger"
        items={text.confirmItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.rhythmTitle}
        iconName="flash-outline"
        tone="warning"
        items={text.rhythmItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.openChestTitle}
        iconName="hand-left-outline"
        items={text.openChestItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.refractoryTitle}
        iconName="git-branch-outline"
        tone="info"
        items={text.refractoryItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.alsTitle}
        description={text.alsDescription}
        iconName="pulse-outline"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
