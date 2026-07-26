import FlowConnector from "@/src/components/ui/FlowConnector";
import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function CardiacArrest() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Hyperkaliemický ZO"
        title="ALS + špecifická liečba K⁺"
        description="Pokračujte vo vysoko kvalitnej KPR podľa ALS a súčasne liečte hyperkaliémiu ako reverzibilnú príčinu zastavenia obehu."
        urgent
      />

      <FlowActionButton
        title="Otvoriť ALS"
        description="Začnite KPR, pripojte defibrilátor/monitor a postupujte podľa rytmu"
        iconName="pulse"
        variant="danger"
        onPress={() => router.push("/algorithms/adult-resuscitation/als/step2")}
      />

      <HeroCard
        eyebrow="ERC 2025 pri hyperkaliemickom ZO"
        title="10 ml 10 % CaCl₂ i.v. + 50 mmol NaHCO₃ i.v."
        description="Podajte chlorid vápenatý a bikarbonát sodný cez samostatné intravenózne vstupy alebo s preplachom medzi nimi."
        iconName="medical"
        danger
      />

      <ContentCard
        title="Presuňte K⁺ do buniek"
        iconName="swap-vertical"
        tone="info"
        items={[
          "Podajte 10 jednotiek rýchlo pôsobiaceho inzulínu a 25 g glukózy i.v.",
          "Ak bola glykémia pred liečbou < 7 mmol/l, po úvodnej liečbe pokračujte 10 % glukózou 50 ml/h počas 5 hodín.",
          "Podajte nebulizovaný salbutamol 10-20 mg ako doplnok k inzulínu a glukóze.",
        ]}
      />

      <FlowConnector />

      <ContentCard
        title="Odstráňte K⁺ a eskalujte"
        iconName="git-branch-outline"
        tone="warning"
        items={[
          "Zvážte dialýzu pri refraktérnej ťažkej hyperkaliémii.",
          "Zvážte ECPR v súlade s miestnymi protokolmi, ak počiatočný pokus o resuscitáciu nie je úspešný.",
          "Po ROSC pokračujte v častom monitorovaní K⁺, glykémie a EKG.",
        ]}
      />
    </AlgorithmScreen>
  );
}
