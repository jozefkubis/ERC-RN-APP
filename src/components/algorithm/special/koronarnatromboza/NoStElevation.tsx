import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function NoStElevation() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="ROSC bez ST elevácií"
        title="Zhodnoťte nestabilitu a ischémiu"
        description="Neprítomnosť ST elevácií sama osebe neurčuje potrebu okamžitej koronarografie."
      />

      <DecisionCard question="Je pacient hemodynamicky nestabilný alebo má známky prebiehajúcej ischémie?" />

      <ContentCard
        title="Áno – zvážte okamžitú koronarografiu"
        iconName="flash-outline"
        tone="danger"
        items={[
          "Vykonajte koronarografiu a perkutánnu koronárnu intervenciu, ak je potrebná.",
        ]}
      />

      <ContentCard
        title="Nie – urgentnú katetrizáciu nevykonávajte rutinne"
        iconName="time-outline"
        items={[
          "U stabilného pacienta bez príznakov ischémie možno vyšetrenie odložiť, ak neexistuje vysoká pravdepodobnosť akútnej koronárnej oklúzie.",
        ]}
      />

      <ContentCard
        title="Posúďte inú príčinu"
        iconName="search-outline"
        tone="info"
        items={[
          "Ak klinický kontext naznačuje alternatívnu etiológiu zastavenia krvného obehu, posúďte nekoronárne príčiny.",
        ]}
      />
    </AlgorithmScreen>
  );
}
