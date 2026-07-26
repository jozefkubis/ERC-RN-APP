import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 1"
        title="Posúďte hyperkaliémiu"
        description="Myslite na hyperkaliémiu pri rizikových stavoch, EKG zmenách alebo metabolickej príčine zastavenia obehu. Pri ťažkej hyperkaliémii konajte bez odkladu."
        urgent
      />

      <HeroCard
        eyebrow="Riziko arytmie a ZO"
        title="K⁺ zvýšený alebo podozrenie"
        description="Hľadajte slabosť, parestézie, brady-/tachyarytmie, široké QRS, vysoké T vlny a kontext zlyhania obličiek, crush syndrómu, lýzy buniek alebo liekov."
        iconName="add-circle"
      />

      <ContentCard
        title="Okamžite overte a zastavte prísun K⁺"
        iconName="analytics-outline"
        tone="info"
        items={[
          "Monitorujte EKG a čo najskôr skontrolujte K⁺, glykémiu, krvné plyny a renálne funkcie.",
          "Zastavte exogénne zdroje draslíka vrátane infúzií alebo liekov, ktoré môžu zvyšovať K⁺.",
          "Pri EKG zmenách alebo klinickej nestabilite neliečte len číslo, ale toxicitu hyperkaliémie.",
        ]}
      />

      <FlowConnector />

      <DecisionCard
        question="Je pacient v zastavení krvného obehu?"
        description="Ak nereaguje a nedýcha normálne, postupujte súčasne podľa ALS a liečte hyperkaliémiu ako reverzibilnú príčinu."
      />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/kalium/hyper/cardiac-arrest")
        }
      />
      <NoButton
        onPress={() =>
          router.push("/algorithms/special/kalium/hyper/step2")
        }
      />

      <FlowActionButton
        title="Otvoriť ALS"
        description="Pri potvrdenom ZO prejdite priamo na okamžitú resuscitáciu"
        iconName="heart-dislike-outline"
        variant="danger"
        onPress={() => router.push("/algorithms/adult-resuscitation/als/step2")}
      />
    </AlgorithmScreen>
  );
}
