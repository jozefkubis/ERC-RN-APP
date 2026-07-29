import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import StepHeader from "@/src/components/ui/StepHeader";
import * as Linking from "expo-linking";

const AVALIFE_SOURCE_URL =
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC9104102/";

export default function AvaLife() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Pomôcka"
        title="Algoritmus AvaLife"
        description="AvaLife je rozhodovací postup vytvorený špeciálne pre záchranu a prvú pomoc pacientom zasypaným lavínou."
      />

      <ContentCard
        title="Na čo slúži"
        iconName="git-network-outline"
        tone="info"
        items={[
          "Spája vyhľadávanie, vyslobodenie, triedenie a prvú pomoc do jedného postupu.",
          "Pomáha rozdeliť obmedzené záchranné kapacity tak, aby sa maximalizovala šanca na prežitie.",
          "Obsahuje postupy pre jednotlivé aj viacnásobné zasypanie a pre základnú životnú podporu.",
        ]}
      />

      <ContentCard
        title="Kedy ho ERC 2025 odporúča zvážiť"
        iconName="people-outline"
        tone="warning"
        items={[
          "Je zasypaných viac osôb.",
          "Na mieste sú iba poskytovatelia BLS.",
          "Záchrancov nie je dosť na súčasné ošetrenie všetkých pacientov.",
        ]}
      />

      <ContentCard
        title="Dôležité"
        iconName="warning-outline"
        tone="danger"
        items={[
          "Postup má používať vyškolený záchranca podľa dostupnej verzie algoritmu, miestnych protokolov a bezpečnosti na mieste.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť publikovaný algoritmus"
        description="Odborná publikácia AvaLife s algoritmami a vysvetlením."
        iconName="open-outline"
        onPress={() => void Linking.openURL(AVALIFE_SOURCE_URL)}
      />
    </AlgorithmScreen>
  );
}
