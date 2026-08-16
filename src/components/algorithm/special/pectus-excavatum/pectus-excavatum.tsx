import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Špeciálna skupina pacientov",
    title: "Resuscitácia pri pectus excavatum",
    description:
      "Prispôsobte kompresie zmenenému tvaru hrudníka a včas vyhodnoťte ich účinnosť.",
    informationTitle: "Čo je pectus excavatum?",
    informationLead: "Nazýva sa aj lievikovitý alebo vpadnutý hrudník.",
    informationItems: [
      "Je to vrodená deformita hrudnej steny, pri ktorej je hrudná kosť preliačená smerom dovnútra.",
      "Zmenený tvar hrudníka môže ovplyvniť vykonávanie účinných kompresií.",
    ],
    compressionsEyebrow: "Kompresie hrudníka",
    compressionsTitle: "Zvážte hĺbku 3–4 cm",
    compressionsDescription:
      "Priebežne hodnoťte účinnosť kompresií a prispôsobte použitú silu anatómii pacienta.",
    nussTitle: "Ak má pacient Nussovu dlahu",
    nussLead: "Dlaha vystužuje prednú časť hrudníka a opiera sa o rebrá.",
    nussItems: [
      "Na vykonanie účinných kompresií hrudníka môže byť potrebná podstatne väčšia sila.",
    ],
    ineffectiveTitle: "Ak kompresie nie sú účinné",
    ineffectiveItems: ["Zvážte skoré zavedenie eKPR."],
    defibrillationTitle: "Defibrilácia",
    defibrillationItems: [
      "Použite predo-zadné umiestnenie elektród.",
      "Použite štandardné energie výbojov.",
    ],
  },
  en: {
    badge: "Special patient group",
    title: "Resuscitation in patients with pectus excavatum",
    description:
      "Adapt chest compressions to the altered chest shape and assess their effectiveness early.",
    informationTitle: "What is pectus excavatum?",
    informationLead: "It is also known as funnel chest or sunken chest.",
    informationItems: [
      "It is a congenital chest wall deformity in which the sternum is depressed inwards.",
      "The altered chest shape may affect the delivery of effective chest compressions.",
    ],
    compressionsEyebrow: "Chest compressions",
    compressionsTitle: "Consider a depth of 3–4 cm",
    compressionsDescription:
      "Continuously assess compression effectiveness and adapt the force to the patient's anatomy.",
    nussTitle: "If the patient has a Nuss bar",
    nussLead: "The bar supports the front of the chest and rests against the ribs.",
    nussItems: [
      "Substantially increased force may be required to deliver effective chest compressions.",
    ],
    ineffectiveTitle: "If chest compressions are ineffective",
    ineffectiveItems: ["Consider early implementation of ECPR."],
    defibrillationTitle: "Defibrillation",
    defibrillationItems: [
      "Use anteroposterior pad placement.",
      "Use standard shock energies.",
    ],
  },
};

export default function PectusExcavatum() {
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

      <ContentCard
        title={text.informationTitle}
        iconName="information-circle-outline"
        tone="info"
        lead={text.informationLead}
        items={text.informationItems}
        themeMode={themeMode}
      />

      <HeroCard
        eyebrow={text.compressionsEyebrow}
        title={text.compressionsTitle}
        description={text.compressionsDescription}
        iconName="fitness-outline"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.nussTitle}
        iconName="construct-outline"
        tone="warning"
        lead={text.nussLead}
        items={text.nussItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.ineffectiveTitle}
        iconName="heart-outline"
        tone="danger"
        items={text.ineffectiveItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.defibrillationTitle}
        iconName="flash-outline"
        items={text.defibrillationItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
