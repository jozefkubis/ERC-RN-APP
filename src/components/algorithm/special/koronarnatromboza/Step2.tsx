import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import DecisionCard from "@/src/components/ui/DecisionCard";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";

export default function Step2() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 2"
        title="Vyhodnoťte 12-zvodové EKG"
        description="Po trvalom ROSC určte ďalší reperfúzny postup podľa prítomnosti ST elevácií."
      />

      <DecisionCard question="Sú na EKG prítomné ST elevácie?" />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/koronarnatromboza/st-elevation")
        }
      />
      <NoButton
        onPress={() =>
          router.push("/algorithms/special/koronarnatromboza/no-st-elevation")
        }
      />
    </AlgorithmScreen>
  );
}
