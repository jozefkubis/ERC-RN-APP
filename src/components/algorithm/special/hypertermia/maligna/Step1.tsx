import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Malígna hypertermia",
    title: "Zastavte spúšťač a podajte dantrolén",
    description:
      "Konajte okamžite pri podozrení na malígnu hypertermiu počas anestézie alebo krátko po nej. Súbežne riešte oxygenáciu, ventiláciu a aktívne chladenie.",
    heroEyebrow: "Čo najskôr i.v.",
    heroTitle: "Dantrolén 2,5 mg/kg",
    heroDescription:
      "Podajte úvodnú dávku dantrolénu i.v. čo najskôr a pokračujte podľa klinickej odpovede a lokálneho protokolu.",
    immediateTitle: "Okamžité kroky",
    immediateItems: [
      "Ihneď zastavte vyvolávajúce faktory vrátane prchavých anestetík a sukcinylcholínu.",
      "Vypnite a odstráňte vaporizér a vymeňte okruh ventilátora.",
      "Ak nie je možné vymeniť ventilátor, vymeňte uhlíkové filtre.",
    ],
    supportTitle: "Podporná liečba",
    supportItems: [
      "Začnite aktívne chladenie.",
      "Podajte 100 % kyslík a snažte sa o normokapniu pomocou hyperventilácie.",
      "Kontrolujte a liečte komplikácie podľa stavu pacienta, najmä acidózu a hyperkaliémiu.",
    ],
    expertTitle: "Privolajte expertnú pomoc",
    expertItems: [
      "Kontaktujte centrum pre malígnu hypertermiu kvôli poradeniu a následnej starostlivosti.",
      "Po stabilizácii pokračujte v monitorovaní a odovzdajte informáciu o podozrení na malígnu hypertermiu.",
    ],
  },
  en: {
    badge: "Malignant hyperthermia",
    title: "Stop the trigger and give dantrolene",
    description:
      "Act immediately if malignant hyperthermia is suspected during or shortly after anaesthesia. Manage oxygenation, ventilation, and active cooling at the same time.",
    heroEyebrow: "As soon as possible IV",
    heroTitle: "Dantrolene 2.5 mg/kg",
    heroDescription:
      "Give the initial dose of dantrolene IV as soon as possible and continue according to the clinical response and local protocol.",
    immediateTitle: "Immediate actions",
    immediateItems: [
      "Immediately stop triggering agents, including volatile anaesthetics and succinylcholine.",
      "Turn off and remove the vaporiser and change the ventilator circuit.",
      "If the ventilator cannot be changed, change the charcoal filters.",
    ],
    supportTitle: "Supportive treatment",
    supportItems: [
      "Start active cooling.",
      "Give 100% oxygen and aim for normocapnia using hyperventilation.",
      "Monitor and treat complications according to the patient's condition, especially acidosis and hyperkalaemia.",
    ],
    expertTitle: "Call for expert help",
    expertItems: [
      "Contact a malignant hyperthermia centre for advice and follow-up.",
      "After stabilisation, continue monitoring and communicate the suspected malignant hyperthermia during handover.",
    ],
  },
};

export default function Step1() {
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
        iconName="medical"
        danger
        themeMode={themeMode}
      />

      <ContentCard
        title={text.immediateTitle}
        iconName="close-circle-outline"
        tone="danger"
        items={text.immediateItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.supportTitle}
        iconName="thermometer-outline"
        tone="info"
        items={text.supportItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.expertTitle}
        iconName="call-outline"
        items={text.expertItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
