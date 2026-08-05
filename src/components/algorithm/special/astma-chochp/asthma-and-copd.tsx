import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function AsthmaAndCopd() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Špeciálna skupina pacientov"
        title="Astma a chronická obštrukčná choroba pľúc"
        description="Pri zastavení krvného obehu okamžite liečte hypoxiu a hľadajte reverzibilné príčiny."
        urgent
      />

      <HeroCard
        eyebrow="Bezodkladná priorita"
        title="Podajte 100 % kyslík"
        description="Liečte život ohrozujúcu hypoxiu a pokračujte podľa štandardného ALS algoritmu."
        iconName="medical-outline"
        danger
      />

      <ContentCard
        title="Vylúčte tenzný pneumotorax"
        iconName="search-outline"
        tone="danger"
        items={[
          "Pátrajte po známkach tenzného pneumotoraxu a pri podozrení ho bezodkladne liečte.",
        ]}
      />

      <ContentCard
        title="Znížte dynamickú hyperinfláciu"
        iconName="fitness-outline"
        tone="warning"
        items={[
          "Vykonajte tracheálnu intubáciu pre vysoké inflačné tlaky.",
          "Zvážte manuálnu dekompresiu hrudníka a dočasné odpojenie od ventilácie.",
        ]}
      />

      <ContentCard
        title="Ak úvodná resuscitácia nie je úspešná"
        iconName="heart-outline"
        tone="info"
        items={[
          "Zvážte eKPR v súlade s miestnymi protokolmi.",
        ]}
      />
    </AlgorithmScreen>
  );
}
