import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import HeroCard from "@/src/components/ui/HeroCard";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";

export default function Step1() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 1"
        title="Určte stav pacienta"
        description="Smerujte pacienta do centra s možnosťou PKI a ďalší postup zvoľte podľa toho, či dosiahol trvalý ROSC."
        urgent
      />

      <HeroCard
        eyebrow="Akútna koronárna oklúzia"
        title="Smerujte pacienta do PKI centra"
        description="Pri ST elevácii alebo podozrení na prebiehajúcu ischémiu aktivujte existujúcu STEMI sieť."
        iconName="business"
      />

      <DecisionCard
        question="Dosiahol pacient trvalý ROSC?"
        description="Rozhodnite podľa pretrvávajúcej obnovy spontánnej cirkulácie."
      />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/koronarnatromboza/step2")
        }
      />
      <NoButton
        onPress={() =>
          router.push("/algorithms/special/koronarnatromboza/ongoing-cpr")
        }
      />

      <ContentCard
        title="Pripravenosť systému"
        iconName="people-outline"
        tone="info"
        items={[
          "Podporujte zdravotnú výchovu na rozpoznávanie príznakov a minimalizáciu oneskorení pri vyhľadávaní lekárskej starostlivosti.",
          "Podporujte školenie BLS pre pravdepodobných záchrancov vo vysokorizikových skupinách.",
          "Posilnite regionálne siete na zabezpečenie včasnej perkutánnej koronárnej intervencie.",
        ]}
      />
    </AlgorithmScreen>
  );
}
