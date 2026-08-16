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
    title: "Zastavenie krvného obehu počas letu",
    description:
      "V lietadle prispôsobte KPR obmedzenému priestoru, dostupnému vybaveniu a rozhodnutiu posádky o prípadnom odklone letu.",
    helpEyebrow: "Okamžite",
    helpTitle: "Vyhľadajte zdravotníka na palube",
    helpDescription:
      "Požiadajte o pomoc zdravotníckych pracovníkov prostredníctvom palubného hlásenia a začnite resuscitáciu s dostupným vybavením.",
    compressionsTitle: "Kompresie v obmedzenom priestore",
    compressionsItems: [
      "Ak pacienta nemožno v priebehu niekoľkých sekúnd presunúť, záchranca si má kľaknúť do priestoru pre nohy pred sedadlami pri uličke.",
      "Ak je to možné, presuňte pacienta na miesto s dostatočným priestorom na podlahe, napríklad do palubnej kuchynky.",
      "KPR spoza hlavy je možnosťou v prostredí s obmedzeným priestorom.",
    ],
    airwayTitle: "Dýchacie cesty a vybavenie",
    airwayItems: [
      "Zabezpečenie dýchacích ciest prispôsobte dostupnému vybaveniu.",
      "Používajte iba postupy, na ktoré má záchranca dostatočnú odbornosť.",
      "Ak je dostupné AED alebo kyslík, použite ich podľa možností paluby.",
    ],
    diversionTitle: "Rozhodnutie o odklone letu",
    diversionItems: [
      "Ak trasa vedie oblasťou bez dlhšie dostupného letiska a počas KPR je vysoká pravdepodobnosť ROSC, zvážte skorý odklon.",
      "Ak je ROSC nepravdepodobný, zvážte riziká odklonu a poskytnite posádke vhodné odporúčanie.",
      "Ak bola KPR ukončená bez ROSC, zo zdravotného hľadiska nie je odklon potrebný; riaďte sa pravidlami leteckej spoločnosti.",
    ],
    blsTitle: "Otvoriť dospelý BLS",
    blsDescription: "Základná resuscitácia a použitie AED",
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription:
      "Rozšírená resuscitácia pri dostupnom profesionálnom tíme",
  },
  en: {
    badge: "Special setting",
    title: "In-flight cardiac arrest",
    description:
      "On an aircraft, adapt CPR to the confined space, available equipment and the crew's decision about possible flight diversion.",
    helpEyebrow: "Immediately",
    helpTitle: "Seek a healthcare professional on board",
    helpDescription:
      "Request help from healthcare professionals through an in-flight announcement and start resuscitation with the available equipment.",
    compressionsTitle: "Compressions in a confined space",
    compressionsItems: [
      "If the patient cannot be moved within a few seconds, the rescuer should kneel in the leg space in front of the aisle seats.",
      "If possible, move the patient to an area with adequate floor space, such as the galley.",
      "Overhead CPR is an option in confined spaces.",
    ],
    airwayTitle: "Airway and equipment",
    airwayItems: [
      "Base airway management on the available equipment.",
      "Use only techniques within the rescuer's expertise.",
      "Use an AED or oxygen if available on board.",
    ],
    diversionTitle: "Decision about flight diversion",
    diversionItems: [
      "If the route passes over an area where no airport can be reached for a prolonged period and ROSC is likely during CPR, consider early diversion.",
      "If ROSC is unlikely, consider the risks of diversion and advise the flight crew appropriately.",
      "If CPR is terminated without ROSC, there is no medical need for diversion; follow airline policy.",
    ],
    blsTitle: "Open adult BLS",
    blsDescription: "Basic life support and AED use",
    alsTitle: "Open adult ALS",
    alsDescription:
      "Advanced life support when a professional team is available",
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
        eyebrow={text.helpEyebrow}
        title={text.helpTitle}
        description={text.helpDescription}
        iconName="airplane"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.compressionsTitle}
        iconName="body-outline"
        tone="warning"
        items={text.compressionsItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.airwayTitle}
        iconName="medical-outline"
        tone="info"
        items={text.airwayItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.diversionTitle}
        iconName="navigate-outline"
        items={text.diversionItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.blsTitle}
        description={text.blsDescription}
        iconName="heart-outline"
        variant="light"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/bls/step1")
        }
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
