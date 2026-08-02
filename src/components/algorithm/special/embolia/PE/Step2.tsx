import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step2() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 2"
        title="Začnite liečbu a potvrďte diagnózu"
        description="Antikoagulačnú liečbu začnite už počas diagnostického procesu, pokiaľ nie sú prítomné známky krvácania alebo absolútne kontraindikácie."
      />

      <HeroCard
        eyebrow="Počas diagnostického procesu"
        title="Heparín 80 IU/kg i.v."
        description="Podajte antikoagulačnú liečbu, pokiaľ nie sú prítomné známky krvácania alebo absolútne kontraindikácie."
        iconName="medical"
      />

      <ContentCard
        title="Potvrďte diagnózu"
        iconName="scan-outline"
        tone="info"
        items={["Vykonajte CT pulmoangiografiu."]}
      />

      <ContentCard
        title="Pri rýchlom zhoršovaní"
        iconName="warning-outline"
        tone="danger"
        items={[
          "Zvážte chirurgickú embolektómiu alebo transkatétrovú trombektómiu ako alternatívu k záchrannej fibrinolytickej terapii.",
        ]}
      />
    </AlgorithmScreen>
  );
}
