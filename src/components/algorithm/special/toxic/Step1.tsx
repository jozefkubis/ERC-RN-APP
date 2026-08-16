import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Toxické látky",
    title: "Chráňte seba a liečte reverzibilnú príčinu",
    description:
      "Zvažujte intoxikáciu ako príčinu zastavenia krvného obehu u všetkých pacientov a súčasne pokračujte v štandardnej resuscitácii.",
    safetyEyebrow: "Najprv bezpečnosť záchrancu",
    safetyTitle: "Zaistite svoju osobnú bezpečnosť",
    safetyDescription:
      "Pri priamom kontakte s pokožkou, napríklad pri dýchaní z úst do úst, môže dôjsť k prenosu toxickej látky.",
    exposureTitle: "Znížte expozíciu a absorpciu",
    exposureItems: [
      "Znížte ďalšiu absorpciu toxickej látky.",
      "Zvážte špecifické opatrenia, ako sú antidotá, dekontaminácia a zvýšené vylučovanie.",
      "Ak je antidotum dostupné, podajte ho čo najskôr.",
    ],
    prolongedTitle: "Buďte pripravení na predĺženú resuscitáciu",
    prolongedItems: [
      "Pokračujte v resuscitácii dlhšie, pretože koncentrácia toxínu môže počas metabolizácie alebo vylučovania postupne klesať.",
    ],
    consultationTitle: "Konzultujte toxikologické centrum",
    consultationItems: [
      "Kontaktujte regionálne alebo národné toxikologické centrum pre informácie o liečbe otráveného pacienta.",
    ],
  },
  en: {
    badge: "Toxic agents",
    title: "Protect yourself and treat the reversible cause",
    description:
      "Assess all patients in cardiac arrest for potential intoxication while continuing standard resuscitation.",
    safetyEyebrow: "Rescuer safety first",
    safetyTitle: "Ensure your personal safety",
    safetyDescription:
      "Direct skin contact, such as during mouth-to-mouth ventilation, may transmit toxic agents.",
    exposureTitle: "Reduce exposure and absorption",
    exposureItems: [
      "Reduce further absorption of the toxic agent.",
      "Consider specific treatment measures such as antidotes, decontamination, and enhanced elimination.",
      "Administer an antidote, where available, as soon as possible.",
    ],
    prolongedTitle: "Be prepared for prolonged resuscitation",
    prolongedItems: [
      "Continue resuscitation for a prolonged period, as the toxin concentration may fall while it is metabolised or excreted.",
    ],
    consultationTitle: "Consult a poison centre",
    consultationItems: [
      "Consult a regional or national poison centre for information on treating the poisoned patient.",
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
        eyebrow={text.safetyEyebrow}
        title={text.safetyTitle}
        description={text.safetyDescription}
        iconName="shield-checkmark"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.exposureTitle}
        iconName="shield-outline"
        tone="danger"
        items={text.exposureItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.prolongedTitle}
        iconName="time-outline"
        tone="info"
        items={text.prolongedItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.consultationTitle}
        iconName="call-outline"
        items={text.consultationItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
