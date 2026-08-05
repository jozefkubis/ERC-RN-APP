import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";

export default function Step2() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Rozhodnutie"
        title="Je maternica veľká?"
        description="Rozhodnutie urobte klinicky počas prebiehajúcej KPR. Nečakajte na presné určenie týždňa gravidity."
        urgent
      />

      <ContentCard
        title="Počas rozhodovania stále robte"
        iconName="repeat-outline"
        tone="info"
        items={[
          "Pokračujte vo vysokokvalitnej KPR a minimalizujte prerušenia.",
          "Udržujte manuálny posun maternice doľava, ak sú dostupní aspoň dvaja členovia tímu.",
          "Zaveďte i.v./i.o. vstup ideálne na hornej končatine alebo v oblasti nad bránicou.",
          "Dýchacie cesty zabezpečuje skúsená osoba; riziko aspirácie a zlyhania intubácie je vyššie.",
        ]}
      />

      <FlowConnector />

      <DecisionCard
        question="Gravidita nad 20 týždňov alebo fundus nad pupkom?"
        description="Ak áno, resuscitačná hysterotómia je časovo kritická intervencia na zlepšenie resuscitácie matky."
      />

      <YesButton onPress={() => router.push("/algorithms/special/pregnet/step3")} />
      <NoButton
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
