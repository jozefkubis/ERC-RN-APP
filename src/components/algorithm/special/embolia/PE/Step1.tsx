import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useRouter } from "expo-router";

export default function Step1() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 1"
        title="Rozpoznajte pľúcnu embóliu"
        description="Myslite na pľúcnu embóliu pri náhlom nástupe progresívnej dušnosti a včas identifikujte hemodynamickú nestabilitu."
      />

      <ContentCard
        title="Kedy myslieť na pľúcnu embóliu"
        iconName="search-outline"
        tone="info"
        items={[
          "Zvážte pľúcnu embóliu u všetkých pacientov s náhlym nástupom progresívnej dušnosti a bez známeho srdcového alebo pľúcneho ochorenia.",
        ]}
      />

      <ContentCard
        title="Vyhodnoťte vysoké riziko"
        iconName="pulse-outline"
        items={[
          "Realizujte 12-zvodové EKG: vylúčte akútny koronárny syndróm a hľadajte preťaženie pravej komory.",
          "Identifikujte hemodynamickú nestabilitu a vysoko rizikovú pľúcnu embóliu.",
          "Vykonajte echokardiografiu pri lôžku.",
        ]}
      />

      <FlowConnector />

      <FlowActionButton
        title="Pokračovať v diagnostike a liečbe"
        description="Začnite antikoaguláciu a potvrďte diagnózu"
        iconName="arrow-forward-circle-outline"
        onPress={() =>
          router.push("/algorithms/special/embolia/PE/step2")
        }
      />
    </AlgorithmScreen>
  );
}
