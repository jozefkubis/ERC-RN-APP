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
    title: "Zastavenie krvného obehu pri športe",
    description:
      "Pri náhlom kolapse športovca je kľúčová pripravenosť športoviska, okamžitý prístup na plochu a rýchle začatie resuscitácie.",
    accessEyebrow: "Priorita na podujatí",
    accessTitle: "Zabezpečte okamžitý prístup na hraciu plochu",
    accessDescription:
      "Záchranný tím sa musí dostať k pacientovi okamžite a bezpečne, bez zdržania organizačnými alebo bezpečnostnými bariérami.",
    preventionTitle: "Prevencia a riziko",
    preventionItems: [
      "Skríning ako primárna prevencia zohráva dôležitú úlohu, ale zostáva kontroverzný.",
      "Všetky športy a športoviská by mali vykonať hodnotenie rizika náhleho zastavenia obehu.",
      "Hodnotenie rizika má zohľadniť pravdepodobnosť udalosti aj jej následky.",
    ],
    readinessTitle: "Pripravenosť športoviska",
    readinessItems: [
      "Zaveďte stratégie na zmiernenie rizika podľa typu športu a priestoru.",
      "Vopred určte prístupové cesty pre záchranný tím.",
      "Udržujte plán použiteľný aj počas zápasu alebo hromadného podujatia.",
    ],
    awarenessTitle: "Zvyšujte povedomie",
    awarenessItems: [
      "Programy na zvyšovanie povedomia počas športových podujatí sú uskutočniteľné.",
      "Zamerajte ich aj na skupiny, ktoré sa zatiaľ problematike zastavenia obehu nevenujú.",
      "Cieľom je rýchle rozpoznanie kolapsu, privolanie pomoci a začatie KPR.",
    ],
    blsTitle: "Otvoriť dospelý BLS",
    blsDescription: "Začať základnú resuscitáciu a použiť AED",
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription:
      "Rozšírená resuscitácia pri dostupnom profesionálnom tíme",
  },
  en: {
    badge: "Special setting",
    title: "Cardiac arrest in sports",
    description:
      "When an athlete suddenly collapses, venue preparedness, immediate access to the field of play and rapid initiation of resuscitation are essential.",
    accessEyebrow: "Event priority",
    accessTitle: "Gain immediate access to the field of play",
    accessDescription:
      "The response team must reach the patient immediately and safely, without delays caused by organisational or security barriers.",
    preventionTitle: "Prevention and risk",
    preventionItems: [
      "Screening as primary prevention plays an important role but remains controversial.",
      "All sports and exercise facilities should undertake a cardiac arrest risk assessment.",
      "The risk assessment should consider both the likelihood and consequences of cardiac arrest.",
    ],
    readinessTitle: "Venue preparedness",
    readinessItems: [
      "Put risk mitigation strategies in place according to the type of sport and venue.",
      "Define access routes for the response team in advance.",
      "Keep the plan usable during a match or mass gathering.",
    ],
    awarenessTitle: "Raise awareness",
    awarenessItems: [
      "Awareness programmes at sporting events are feasible.",
      "Include target groups not yet engaged with cardiac arrest awareness.",
      "Aim for rapid recognition of collapse, calling for help and initiation of CPR.",
    ],
    blsTitle: "Open adult BLS",
    blsDescription: "Start basic life support and use an AED",
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
        eyebrow={text.accessEyebrow}
        title={text.accessTitle}
        description={text.accessDescription}
        iconName="walk"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.preventionTitle}
        iconName="shield-checkmark-outline"
        tone="info"
        items={text.preventionItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.readinessTitle}
        iconName="map-outline"
        tone="warning"
        items={text.readinessItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.awarenessTitle}
        iconName="megaphone-outline"
        items={text.awarenessItems}
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
