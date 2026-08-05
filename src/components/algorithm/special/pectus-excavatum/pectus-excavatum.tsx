import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function PectusExcavatum() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Špeciálna skupina pacientov"
        title="Resuscitácia pri pectus excavatum"
        description="Prispôsobte kompresie zmenenému tvaru hrudníka a včas vyhodnoťte ich účinnosť."
        urgent
      />

      <ContentCard
        title="Čo je pectus excavatum?"
        iconName="information-circle-outline"
        tone="info"
        lead="Nazýva sa aj lievikovitý alebo vpadnutý hrudník."
        items={[
          "Je to vrodená deformita hrudnej steny, pri ktorej je hrudná kosť preliačená smerom dovnútra.",
          "Zmenený tvar hrudníka môže ovplyvniť vykonávanie účinných kompresií.",
        ]}
      />

      <HeroCard
        eyebrow="Kompresie hrudníka"
        title="Zvážte hĺbku 3–4 cm"
        description="Priebežne hodnoťte účinnosť kompresií a prispôsobte použitú silu anatómii pacienta."
        iconName="fitness-outline"
        danger
      />

      <ContentCard
        title="Ak má pacient Nussovu dlahu"
        iconName="construct-outline"
        tone="warning"
        lead="Dlaha vystužuje prednú časť hrudníka a opiera sa o rebrá."
        items={[
          "Na vykonanie účinných kompresií hrudníka môže byť potrebná podstatne väčšia sila.",
        ]}
      />

      <ContentCard
        title="Ak kompresie nie sú účinné"
        iconName="heart-outline"
        tone="danger"
        items={[
          "Zvážte skoré zavedenie eKPR.",
        ]}
      />

      <ContentCard
        title="Defibrilácia"
        iconName="flash-outline"
        items={[
          "Použite predo-zadné umiestnenie elektród.",
          "Použite štandardné energie výbojov.",
        ]}
      />
    </AlgorithmScreen>
  );
}
