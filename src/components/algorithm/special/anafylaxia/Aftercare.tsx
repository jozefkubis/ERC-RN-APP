import { useRouter } from "expo-router";
import InfoCard from "../../../ui/info-card";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Aftercare() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Stabilizácia"
        title="Po klinickom zlepšení"
        description="Anafylaxia sa môže znovu zhoršiť. Pokračujte v monitorovaní a zaistite bezpečnú následnú starostlivosť."
      />

      <HeroCard
        eyebrow="Pokračujte v ABCDE"
        title="Sledujte klinickú odpoveď"
        description="Udržiavajte monitorovanie, liečte pretrvávajúce problémy a rozhodnite o ďalšom sledovaní podľa rizika."
        iconName="pulse"
      />

      <ContentCard
        title="Pred ukončením akútnej starostlivosti"
        iconName="clipboard-outline"
        items={[
          "Zaznamenajte spúšťač, čas príznakov a všetky dávky adrenalínu",
          "Zvážte odber tryptázy podľa lokálneho protokolu bez odkladu urgentnej liečby",
          "Dĺžku monitorovania určte podľa závažnosti, odpovede a rizika bifázickej reakcie",
          "Zaistite alergologické vyšetrenie a písomný núdzový plán",
          "Ak je indikovaný autoinjektor, zabezpečte predpis aj praktické poučenie",
        ]}
      />

      <InfoCard
        title="Dôležité"
        description="Antihistaminiká ani kortikosteroidy nenahrádzajú adrenalín a nesmú oddialiť liečbu problémov A, B alebo C."
        iconName="alert-circle-outline"
      />

      <FlowActionButton
        title="Späť na špeciálne okolnosti"
        description="Ukončiť tento algoritmus"
        iconName="grid-outline"
        variant="light"
        onPress={() => router.push("/algorithms/special")}
      />
    </AlgorithmScreen>
  );
}
