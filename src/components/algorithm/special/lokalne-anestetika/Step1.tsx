import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Toxické látky",
    title: "Systémová toxicita lokálnych anestetík",
    description:
      "Pri podozrení na LAST okamžite zastavte lokálne anestetikum, liečte hypoxiu a acidózu a začnite lipidovú liečbu.",
    stopEyebrow: "Bezodkladne",
    stopTitle: "Zastavte lokálne anestetikum",
    stopDescription:
      "Ak je to možné, okamžite ukončite podávanie lokálnej anestézie a pripravte 20 % lipidovú emulziu.",
    stabiliseTitle: "Stabilizujte pacienta",
    stabiliseItems: [
      "Hyperventilujte pacienta, aby ste zvýšili pH plazmy, ak je prítomná metabolická acidóza.",
      "Liečte záchvaty podávaním benzodiazepínov.",
      "Pri zastavení obehu pokračujte v resuscitácii a zvážte jej predĺženie nad 1 hodinu.",
    ],
    adrenalineTitle: "Upravte adrenalín",
    adrenalineItems: [
      "Podajte nižšiu dávku adrenalínu.",
      "Použite dávku najviac 1 mikrogram/kg namiesto 1 mg i.v. bolusu.",
    ],
    lipidTitle: "Podajte 20 % lipidovú emulziu",
    lipidItems: [
      "Počiatočný bolus: 1,5 ml/kg i.v. počas 1 minúty.",
      "Potom pokračujte infúziou 0,25 ml/kg/min.",
      "Neprekročte maximálnu kumulatívnu dávku 12 ml/kg i.v. 20 % lipidovej emulzie.",
    ],
    noRoscTitle: "Ak nie je ROSC do 5 minút",
    noRoscItems: [
      "Zdvojnásobte rýchlosť infúzie lipidov.",
      "Podajte maximálne dva ďalšie lipidové bolusy.",
      "Ďalšie bolusy podávajte v 5-minútových intervaloch, kým nedôjde k ROSC.",
    ],
    refractoryTitle: "Pri refraktérnom priebehu",
    refractoryItems: [
      "Zvážte eKPR podľa dostupnosti a miestnych protokolov.",
      "Pokračujte v cielenej liečbe hypoxie, acidózy a záchvatov.",
    ],
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription: "Použiť všeobecný algoritmus rozšírenej resuscitácie",
  },
  en: {
    badge: "Toxic agents",
    title: "Local anaesthetic systemic toxicity",
    description:
      "If LAST is suspected, stop the local anaesthetic immediately, treat hypoxia and acidosis, and start lipid emulsion therapy.",
    stopEyebrow: "Immediately",
    stopTitle: "Stop the local anaesthetic",
    stopDescription:
      "Stop administration of the local anaesthetic if possible and prepare 20% lipid emulsion.",
    stabiliseTitle: "Stabilise the patient",
    stabiliseItems: [
      "Hyperventilate the patient to increase plasma pH if metabolic acidosis is present.",
      "Treat seizures by administering benzodiazepines.",
      "During cardiac arrest, continue resuscitation and consider prolonging it beyond 1 hour.",
    ],
    adrenalineTitle: "Adjust adrenaline",
    adrenalineItems: [
      "Give a lower dose of adrenaline.",
      "Use a dose of no more than 1 microgram/kg instead of a 1 mg IV bolus.",
    ],
    lipidTitle: "Give 20% lipid emulsion",
    lipidItems: [
      "Initial bolus: 1.5 mL/kg IV over 1 minute.",
      "Then continue with an infusion at 0.25 mL/kg/min.",
      "Do not exceed a maximum cumulative dose of 12 mL/kg IV of 20% lipid emulsion.",
    ],
    noRoscTitle: "If ROSC is not achieved within 5 minutes",
    noRoscItems: [
      "Double the lipid infusion rate.",
      "Give a maximum of two additional lipid boluses.",
      "Give additional boluses at 5-minute intervals until ROSC is achieved.",
    ],
    refractoryTitle: "For a refractory course",
    refractoryItems: [
      "Consider ECPR according to availability and local protocols.",
      "Continue targeted treatment of hypoxia, acidosis, and seizures.",
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
        eyebrow={text.stopEyebrow}
        title={text.stopTitle}
        description={text.stopDescription}
        iconName="ban"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.stabiliseTitle}
        iconName="medical-outline"
        tone="danger"
        items={text.stabiliseItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.adrenalineTitle}
        iconName="pulse-outline"
        tone="warning"
        items={text.adrenalineItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.lipidTitle}
        iconName="water-outline"
        tone="info"
        items={text.lipidItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.noRoscTitle}
        iconName="time-outline"
        tone="warning"
        items={text.noRoscItems}
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
