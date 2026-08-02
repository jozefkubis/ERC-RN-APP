import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function StElevation() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="ROSC + ST elevácie"
        title="Zabezpečte včasnú reperfúziu"
        description="Pri ST eleváciách po trvalom ROSC postupujte cestou urgentnej koronarografie a podľa potreby PKI."
        urgent
      />

      <HeroCard
        eyebrow="Od stanovenia diagnózy"
        title="Koronarografia do 120 minút"
        description="Vykonajte koronarografiu a perkutánnu koronárnu intervenciu, ak je potrebná."
        iconName="time"
        danger
      />

      <ContentCard
        title="Ak sa očakáva väčšie oneskorenie PKI"
        iconName="warning-outline"
        tone="warning"
        items={[
          "V prednemocničnom prostredí alebo pri nedostupnosti PKI zvážte fibrinolýzu.",
          "Pri traumatickom zastavení krvného obehu pacienta okamžite prevezte do PKI centra.",
        ]}
      />
    </AlgorithmScreen>
  );
}
