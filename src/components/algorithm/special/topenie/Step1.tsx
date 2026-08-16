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
    title: "Topenie",
    description:
      "Pri topení je prioritou bezpečnosť záchrancu, rýchle vytiahnutie z vody a včasná ventilácia.",
    breathsEyebrow: "Prvý krok",
    breathsTitle: "Začnite 5 vdychmi",
    breathsDescription:
      "Ak je k dispozícii, použite 100 % inspirovaný kyslík a potom pokračujte štandardným protokolom KPR.",
    rescueTitle: "Bezpečná záchrana",
    rescueItems: [
      "Záchrancovia a prví zasahujúci majú uprednostniť vlastnú bezpečnosť.",
      "Použite najbezpečnejšiu záchrannú techniku, ktorú bezpečne zvládnete.",
      "Použite záchranný materiál a plávacie zariadenia, na ktorých použitie ste vyškolení.",
    ],
    removalTitle: "Vytiahnite obeť z vody",
    removalItems: [
      "Svedkovia udalosti majú zavolať odbornú pomoc čo najskôr.",
      "Imobilizácia chrbtice vo vode nemá zdržiavať vytiahnutie obete, keď je potrebná resuscitácia.",
      "Po vytiahnutí čo najskôr skontrolujte dýchanie a začnite resuscitačný postup.",
    ],
    ventilationTitle: "Ventilujte účinne",
    ventilationItems: [
      "Použite pomôcky na zabezpečenie priechodnosti dýchacích ciest a ventiláciu, ak ste primerane vyškolení.",
      "Postupne zvyšujte inspiračný tlak len podľa potreby.",
      "Vyhnite sa zbytočne vysokému tlaku, aby ste znížili riziko nafúknutia žalúdka.",
    ],
    unsuccessfulTitle: "Ak resuscitácia nie je úspešná",
    unsuccessfulItems: [
      "Zvážte eKPR podľa miestnych protokolov, ak počiatočná resuscitácia nie je úspešná.",
      "Dodržte odporúčania pre hypotermiu.",
    ],
    blsTitle: "Otvoriť dospelý BLS",
    blsDescription: "Pokračovať štandardným protokolom KPR",
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription:
      "Rozšírená resuscitácia po úvodných vdychoch a začatí KPR",
    hypothermiaTitle: "Otvoriť hypotermiu",
    hypothermiaDescription:
      "Postup pri náhodnom podchladení a zastavení obehu",
  },
  en: {
    badge: "Special setting",
    title: "Drowning",
    description:
      "In drowning, prioritise rescuer safety, rapid removal from the water, and early ventilation.",
    breathsEyebrow: "First step",
    breathsTitle: "Start with 5 ventilations",
    breathsDescription:
      "Use 100% inspired oxygen when available, then continue with the standard CPR protocol.",
    rescueTitle: "Safe rescue",
    rescueItems: [
      "Rescuers and first responders should prioritise their own safety.",
      "Use the safest rescue technique you can perform confidently.",
      "Use rescue equipment and flotation devices that you are trained to use.",
    ],
    removalTitle: "Remove the victim from the water",
    removalItems: [
      "Bystanders should call for professional help as soon as possible.",
      "Spinal immobilisation in water should not delay removing the victim when resuscitation is required.",
      "After removal, assess breathing and start resuscitation as soon as possible.",
    ],
    ventilationTitle: "Ventilate effectively",
    ventilationItems: [
      "Use airway and ventilation equipment if you are appropriately trained.",
      "Increase inspiratory pressure gradually only as required.",
      "Avoid unnecessarily high pressure to reduce the risk of stomach inflation.",
    ],
    unsuccessfulTitle: "If resuscitation is unsuccessful",
    unsuccessfulItems: [
      "Consider escalation to ECPR according to local protocols if initial resuscitation is unsuccessful.",
      "Follow the recommendations for hypothermia.",
    ],
    blsTitle: "Open adult BLS",
    blsDescription: "Continue with the standard CPR protocol",
    alsTitle: "Open adult ALS",
    alsDescription:
      "Advanced life support after initial ventilations and starting CPR",
    hypothermiaTitle: "Open hypothermia",
    hypothermiaDescription:
      "Management of accidental hypothermia and cardiac arrest",
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
        eyebrow={text.breathsEyebrow}
        title={text.breathsTitle}
        description={text.breathsDescription}
        iconName="water"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.rescueTitle}
        iconName="shield-checkmark-outline"
        tone="warning"
        items={text.rescueItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.removalTitle}
        iconName="arrow-up-circle-outline"
        items={text.removalItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.ventilationTitle}
        iconName="medical-outline"
        tone="info"
        items={text.ventilationItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.unsuccessfulTitle}
        iconName="git-branch-outline"
        tone="danger"
        items={text.unsuccessfulItems}
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

      <FlowActionButton
        title={text.hypothermiaTitle}
        description={text.hypothermiaDescription}
        iconName="snow-outline"
        variant="light"
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/hypotermia/intro")}
      />
    </AlgorithmScreen>
  );
}
