import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import * as Linking from "expo-linking";

const AVALIFE_SOURCE_URL =
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC9104102/";

const pageText = {
  sk: {
    badge: "Pomôcka",
    title: "Algoritmus AvaLife",
    description:
      "AvaLife je rozhodovací postup vytvorený špeciálne pre záchranu a prvú pomoc pacientom zasypaným lavínou.",
    purposeTitle: "Na čo slúži",
    purposeItems: [
      "Spája vyhľadávanie, vyslobodenie, triedenie a prvú pomoc do jedného postupu.",
      "Pomáha rozdeliť obmedzené záchranné kapacity tak, aby sa maximalizovala šanca na prežitie.",
      "Obsahuje postupy pre jednotlivé aj viacnásobné zasypanie a pre základnú životnú podporu.",
    ],
    useTitle: "Kedy ho ERC 2025 odporúča zvážiť",
    useItems: [
      "Je zasypaných viac osôb.",
      "Na mieste sú iba poskytovatelia BLS.",
      "Záchrancov nie je dosť na súčasné ošetrenie všetkých pacientov.",
    ],
    importantTitle: "Dôležité",
    importantItems: [
      "Postup má používať vyškolený záchranca podľa dostupnej verzie algoritmu, miestnych protokolov a bezpečnosti na mieste.",
    ],
    sourceTitle: "Otvoriť publikovaný algoritmus",
    sourceDescription: "Odborná publikácia AvaLife s algoritmami a vysvetlením.",
  },
  en: {
    badge: "Tool",
    title: "AvaLife algorithm",
    description:
      "AvaLife is a decision pathway developed specifically for the rescue and first aid of patients buried in avalanches.",
    purposeTitle: "What it is for",
    purposeItems: [
      "It combines search, extrication, triage, and first aid into one pathway.",
      "It helps allocate limited rescue resources to maximise the chance of survival.",
      "It includes pathways for single and multiple burials and for basic life support.",
    ],
    useTitle: "When ERC 2025 recommends considering it",
    useItems: [
      "Multiple people are buried.",
      "Only BLS providers are on scene.",
      "There are not enough rescuers to treat all patients at the same time.",
    ],
    importantTitle: "Important",
    importantItems: [
      "The pathway should be used by a trained rescuer according to the available version of the algorithm, local protocols, and safety at the scene.",
    ],
    sourceTitle: "Open the published algorithm",
    sourceDescription:
      "The AvaLife scientific publication with algorithms and explanation.",
  },
};

export default function AvaLife() {
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.purposeTitle}
        iconName="git-network-outline"
        tone="info"
        items={text.purposeItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.useTitle}
        iconName="people-outline"
        tone="warning"
        items={text.useItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.importantTitle}
        iconName="warning-outline"
        tone="danger"
        items={text.importantItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.sourceTitle}
        description={text.sourceDescription}
        iconName="open-outline"
        themeMode={themeMode}
        onPress={() => void Linking.openURL(AVALIFE_SOURCE_URL)}
      />
    </AlgorithmScreen>
  );
}
