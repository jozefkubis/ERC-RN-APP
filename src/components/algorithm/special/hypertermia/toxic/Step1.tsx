import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Toxíny",
    title: "Obmedzte toxín a chlaďte aktívne",
    description:
      "Myslite na toxínmi spôsobenú hypertermiu pri sympatomimetikách, MDMA, serotonínovom syndróme alebo inom hypermetabolickom stave.",
    heroEyebrow: "Antipyretiká nepomáhajú",
    heroTitle: "Aktívne chladenie",
    heroDescription:
      "Použite techniky aktívneho chladenia a súbežne minimalizujte ďalšie vystavenie alebo absorpciu toxínu.",
    exposureTitle: "Znížte expozíciu toxínu",
    exposureItems: [
      "Chráňte tím a pacienta pred ďalšou expozíciou toxínu.",
      "Minimalizujte vystavenie a absorpciu toxínu podľa situácie a lokálneho toxikologického protokolu.",
      "Zvážte skorú konzultáciu toxikologického centra alebo špecialistu.",
    ],
    metabolismTitle: "Kontrolujte hypermetabolizmus",
    metabolismItems: [
      "Tlmte agitáciu, svalovú aktivitu a kŕče, ktoré zvyšujú tvorbu tepla.",
      "Podajte kyslík, monitorujte vitálne funkcie, EKG, teplotu jadra a glykémiu.",
      "Antipyretiká nemajú prínos, pretože centrálne termoregulačné mechanizmy sú ovplyvnené toxínmi.",
    ],
    abcdeTitle: "Pokračujte podľa ABCDE",
    abcdeItems: [
      "Pri zhoršovaní vitálnych funkcií postupujte podľa ABCDE a privolajte resuscitačný tím.",
      "Pri zastavení obehu pokračujte podľa ALS a neprestávajte chladiť pacienta.",
    ],
  },
  en: {
    badge: "Toxins",
    title: "Minimise toxin exposure and cool actively",
    description:
      "Consider toxin-induced hyperthermia with sympathomimetics, MDMA, serotonin syndrome, or another hypermetabolic state.",
    heroEyebrow: "Antipyretics do not help",
    heroTitle: "Active cooling",
    heroDescription:
      "Use active cooling techniques while minimising further exposure to or absorption of the toxin.",
    exposureTitle: "Reduce toxin exposure",
    exposureItems: [
      "Protect the team and the patient from further exposure to the toxin.",
      "Minimise exposure and absorption according to the situation and local toxicology protocol.",
      "Consider early consultation with a poisons centre or specialist.",
    ],
    metabolismTitle: "Control hypermetabolism",
    metabolismItems: [
      "Treat agitation, muscle activity, and seizures that increase heat production.",
      "Give oxygen and monitor vital signs, ECG, core temperature, and blood glucose.",
      "Antipyretics have no benefit because toxins affect central thermoregulatory mechanisms.",
    ],
    abcdeTitle: "Continue according to ABCDE",
    abcdeItems: [
      "If vital signs deteriorate, follow the ABCDE approach and call the resuscitation team.",
      "In cardiac arrest, follow ALS and continue cooling the patient.",
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
        iconName="thermometer"
        danger
        themeMode={themeMode}
      />

      <ContentCard
        title={text.exposureTitle}
        iconName="shield-checkmark-outline"
        tone="danger"
        items={text.exposureItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.metabolismTitle}
        iconName="pulse-outline"
        tone="info"
        items={text.metabolismItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.abcdeTitle}
        iconName="medkit-outline"
        items={text.abcdeItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
