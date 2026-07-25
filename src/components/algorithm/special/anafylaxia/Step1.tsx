import { useRouter } from "expo-router";
import FlowConnector from "../../../ui/FlowConnector";
import {
  AlgorithmScreen,
  ContentCard,
  FlowActionButton,
  StepHeader,
} from "./anaphylaxis-ui";

export default function Step1() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 1"
        title="Rozpoznajte anafylaxiu"
        description="Konajte už pri podozrení. Kožné alebo slizničné zmeny sú časté, ale pri anafylaxii nemusia byť prítomné."
      />

      <ContentCard
        title="Náhly vznik ochorenia"
        iconName="flash-outline"
        tone="info"
        lead="Hľadajte život ohrozujúce problémy A, B alebo C:"
        items={[
          "A – opuch dýchacích ciest, zachrípnutie alebo stridor",
          "B – sťažené dýchanie, pískoty, únava, cyanóza alebo SpO₂ < 94 %",
          "C – hypotenzia, príznaky šoku, zmätenosť alebo porucha vedomia",
        ]}
      />

      <ContentCard
        title="Podporné znaky"
        iconName="body-outline"
        items={[
          "Kožné alebo slizničné zmeny – erytém, urtikária alebo opuch",
          "Nedávny kontakt so známym alebo pravdepodobným spúšťačom",
          "Kožné prejavy môžu chýbať; ich neprítomnosť nevylučuje anafylaxiu",
        ]}
      />

      <FlowConnector />

      <FlowActionButton
        title="Podozrenie na anafylaxiu"
        description="Privolajte pomoc a začnite okamžitú liečbu"
        iconName="call-outline"
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/step2")
        }
      />

      <FlowActionButton
        title="Pacient je v zastavení obehu"
        description="Prejdite priamo na ALS pri anafylaxii"
        iconName="heart-dislike-outline"
        variant="danger"
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/cardiac-arrest")
        }
      />
    </AlgorithmScreen>
  );
}
