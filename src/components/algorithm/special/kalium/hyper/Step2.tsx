import FlowConnector from "@/src/components/ui/FlowConnector";
import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step2() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 2"
        title="Liečte hyperkaliémiu bez ZO"
        description="Podľa ERC 2025 sú ciele tri: presunúť draslík do buniek, antagonizovať účinok hyperkaliémie a odstrániť draslík z tela."
        urgent
      />

      <HeroCard
        eyebrow="Ťažká hyperkaliémia so zmenami na EKG"
        title="10 ml 10 % CaCl₂ i.v."
        description="Podajte chlorid vápenatý i.v. na stabilizáciu myokardu. Ak nie je dostupný, použite 30 ml 10 % glukonátu vápenatého podľa lokálneho protokolu."
        iconName="shield-checkmark"
        danger
      />

      <ContentCard
        title="Presuňte draslík do buniek"
        iconName="swap-vertical"
        tone="info"
        items={[
          "Podajte 10 jednotiek rýchlo pôsobiaceho inzulínu a 25 g glukózy i.v. pri stredne ťažkej a ťažkej hyperkaliémii.",
          "Ak je glykémia pred liečbou < 7 mmol/l, pokračujte infúziou 10 % glukózy 50 ml/h počas 5 hodín.",
          "Podajte nebulizovaný salbutamol 10-20 mg ako doplnok k inzulínu a glukóze.",
        ]}
      />

      <FlowConnector />

      <ContentCard
        title="Odstráňte draslík z tela"
        iconName="exit-outline"
        items={[
          "Podajte perorálne 10 g cyklosilikátu zirkónia sodného.",
          "Zvážte dialýzu pri refraktérnej ťažkej hyperkaliémii.",
          "Monitorujte K⁺, glykémiu a EKG; účinok presunu K⁺ do buniek je prechodný.",
        ]}
      />

      <FlowActionButton
        title="Zastavenie obehu"
        description="Prejdite na hyperkaliemický ZO a súčasne spustite ALS"
        iconName="heart-dislike-outline"
        variant="danger"
        onPress={() =>
          router.push("/algorithms/special/kalium/hyper/cardiac-arrest")
        }
      />
    </AlgorithmScreen>
  );
}
