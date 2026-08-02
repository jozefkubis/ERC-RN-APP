import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Zastavenie obehu"
        title="Pľúcna embólia počas KPR"
        description="Pri predpokladanej alebo známej pľúcnej embólii pokračujte vo vysokokvalitnej KPR a súčasne začnite špecifickú liečbu."
        urgent
      />

      <ContentCard
        title="Diagnostická stopa počas KPR"
        iconName="analytics-outline"
        tone="info"
        items={[
          "ETCO₂ < 1,7 kPa/13 mmHg počas vysokokvalitných kompresií hrudníka môže podporovať diagnózu pľúcnej embólie, ide však o nešpecifický znak.",
        ]}
      />

      <HeroCard
        eyebrow="Predpokladaná príčina zastavenia obehu"
        title="Použite fibrinolytiká"
        description="Fibrinolytickú liečbu použite, keď je pľúcna embólia predpokladanou príčinou zastavenia krvného obehu."
        iconName="medical"
        danger
      />

      <ContentCard
        title="Ak je pľúcna embólia známou príčinou"
        iconName="git-branch-outline"
        tone="danger"
        items={[
          "Použite fibrinolytiká, chirurgickú embolektómiu alebo perkutánnu mechanickú trombektómiu.",
        ]}
      />

      <ContentCard
        title="Záchranná terapia a rozhodovanie"
        iconName="people-outline"
        items={[
          "Zvážte eKPR ako záchrannú terapiu pre vybraných pacientov, keď konvenčná KPR zlyháva a zariadenie ju môže poskytnúť.",
          "Zriaďte multidisciplinárny tím na rozhodovanie o manažmente vysokorizikovej pľúcnej embólie podľa miestnych zdrojov.",
        ]}
      />
    </AlgorithmScreen>
  );
}
