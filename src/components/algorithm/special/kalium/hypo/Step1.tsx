import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Hypokaliémia"
        title="Doplňte K⁺ podľa závažnosti"
        description="Liečbu riaďte hodnotou K⁺, prítomnosťou symptómov a abnormalitami na EKG. Súčasne hľadajte a korigujte príčinu."
      />

      <HeroCard
        eyebrow="Pri ZO spôsobenom hypokaliémiou"
        title="KCl i.v. počas KPR"
        description="Podajte 20 mmol chloridu draselného i.v. počas 2-3 minút, následne 10 mmol počas 2 minút a potom upravte rýchlosť infúzie podľa monitorovanej hladiny K⁺."
        iconName="flash"
        danger
      />

      <ContentCard
        title="Rozhodnite podľa rizika"
        iconName="analytics-outline"
        tone="info"
        items={[
          "Zohľadnite závažnosť hypokaliémie, svalovú slabosť, arytmie a EKG abnormality.",
          "Monitorujte EKG a opakovane kontrolujte hladinu K⁺ pri i.v. substitúcii.",
          "Pri nestabilite alebo závažných EKG zmenách postupujte urgentne a privolajte expertnú pomoc.",
        ]}
      />

      <ContentCard
        title="Korigujte elektrolyty"
        iconName="medkit-outline"
        items={[
          "Kde je to vhodné, doplňte draslík enterálne alebo intravenózne podľa lokálneho protokolu.",
          "Súčasne napravte deficit horčíka, ktorý môže brániť úprave K⁺ a podporovať arytmie.",
          "Po stabilizácii upravte príčinu strát K⁺ a nastavte ďalšie monitorovanie.",
        ]}
      />
    </AlgorithmScreen>
  );
}
