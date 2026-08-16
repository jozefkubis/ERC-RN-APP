import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Špeciálne prostredie",
    title: "Pacient so zariadením na podporu ľavej komory",
    description:
      "Pri pacientovi s LVAD v bezvedomí okamžite aktivujte špecializovaný tím a súčasne sa pokúste obnoviť funkciu zariadenia.",
    teamTitle: "Aktivujte špecializovaný tím",
    teamDescription:
      "Okamžite privolajte tím so skúsenosťami s LVAD a postupujte podľa lokálneho protokolu pre nefungujúce zariadenie.",
    multipleRescuersTitle: "Ak je dostupných viac záchrancov",
    multipleRescuersItems: [
      "Začnite KPR.",
      "Súčasne sa pokúste obnoviť funkciu zariadenia.",
      "Riešte problémy so zariadením ako prioritu podľa príslušných protokolov.",
    ],
    singleRescuerTitle: "Ak je prítomný iba jeden záchranca",
    singleRescuerItems: [
      "Zvážte odloženie KPR až o 2 minúty.",
      "Tento čas využite na pokus o obnovenie funkcie zariadenia.",
      "Ak sa funkciu zariadenia nepodarí obnoviť, začnite KPR.",
    ],
    priorityTitle: "Praktická priorita",
    priorityItems: [
      "Skontrolujte napájanie, káble, ovládač a alarmy zariadenia podľa lokálneho postupu.",
      "Ak je dostupný koordinátor LVAD alebo centrum, kontaktujte ho čo najskôr.",
    ],
  },
  en: {
    badge: "Special setting",
    title: "Patient with a left ventricular assist device",
    description:
      "For an unconscious patient with an LVAD, immediately activate the specialist team while attempting to restore device function.",
    teamTitle: "Activate the specialist team",
    teamDescription:
      "Immediately call a team experienced in LVAD care and follow the local protocol for a non-functioning device.",
    multipleRescuersTitle: "If multiple rescuers are available",
    multipleRescuersItems: [
      "Start CPR.",
      "Simultaneously attempt to restore device function.",
      "Prioritise device troubleshooting according to the relevant protocols.",
    ],
    singleRescuerTitle: "If only one rescuer is present",
    singleRescuerItems: [
      "Consider delaying CPR for up to 2 minutes.",
      "Use this time to attempt to restore device function.",
      "If device function cannot be restored, start CPR.",
    ],
    priorityTitle: "Practical priority",
    priorityItems: [
      "Check the power supply, cables, controller and device alarms according to the local protocol.",
      "Contact the LVAD coordinator or centre as soon as possible, if available.",
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
        themeMode={themeMode}
        urgent
      />

      <HeroCard
        eyebrow="LVAD"
        title={text.teamTitle}
        description={text.teamDescription}
        iconName="call"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.multipleRescuersTitle}
        iconName="people-outline"
        tone="danger"
        items={text.multipleRescuersItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.singleRescuerTitle}
        iconName="person-outline"
        tone="warning"
        items={text.singleRescuerItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.priorityTitle}
        iconName="settings-outline"
        tone="info"
        items={text.priorityItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
