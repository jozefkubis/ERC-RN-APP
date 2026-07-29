import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import { useRouter } from "expo-router";

export default function Step3NoVitals() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 3"
        title="Začnite KPR a neodďaľujte transport"
        description="Pokračujte v resuscitácii a súčasne pripravte bezpečný transport pacienta."
        urgent
      />

      <ContentCard
        title="KPR, liečba a transport"
        iconName="heart-outline"
        tone="danger"
        items={[
          "Začnite s KPR, neodďaľujte transport.",
          "Ak nie je možná kontinuálna KPR, pri náročnej alebo nebezpečnej záchrane zvážte prerušovanú alebo odloženú KPR.",
          "Zabezpečte manažment dýchacích ciest.",
          "Pri teplote jadra < 30 °C podajte najviac 3 defibrilačné výboje a nepodávajte adrenalín.",
          "Získajte informácie o mechanizme udalosti.",
        ]}
      />

      <FlowConnector />

      <DecisionCard question="Nastalo zastavenie srdca z inej príčiny ešte pred podchladením?" />

      <ContentCard
        title="Áno"
        iconName="business-outline"
        tone="info"
        items={[
          "Transportujte pacienta do najbližšej vhodnej nemocnice alebo pokračujte podľa pokynov supervízora.",
        ]}
      />

      <NoButton
        onPress={() =>
          router.push("/algorithms/special/hypotermia/regular/step4-novitals")
        }
      />
    </AlgorithmScreen>
  );
}
